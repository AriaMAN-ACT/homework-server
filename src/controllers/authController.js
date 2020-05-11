const {promisify} = require('util');
const jsonWebToken = require('jsonwebtoken');

const User = require('../models/User');
const School = require('../models/School');
const catchError = require('../utils/catchError');
const AppError = require('../utils/AppError');

const signToken = ({_id}) => {
    return jsonWebToken.sign(
        {
            id: _id
        },
        process.env.JSON_WEB_TOKEN_SECRET
    );
};

const sendToken = (user, statusCode, res) => {
    const token = signToken(user._id);

    user.password = undefined;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    });
};

exports.signIn = catchError(async (req, res) => {
    const {username, password} = req.body;
    if (
        !username ||
        !password ||
        password.length < 8 ||
        password.length > 100) {
        throw new AppError('request body should have valid email and password.', 400);
    }
    const user = await User.findOne({username}).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        throw new AppError('Incorrect username or password', 401);
    }

    sendToken(user, 200, res);
});

exports.protect = catchError(async (req, res, next) => {
    let token;
    if (req.headers.authorization) {
        token = req.headers.authorization;
    }
    if (!token) {
        throw new AppError('You are not logged in.', 401);
    }
    const decodedToken = await promisify(jsonWebToken.verify)(token, process.env.JSON_WEB_TOKEN_SECRET);
    const user = await User.findById(decodedToken.id);
    if (!user) {
        throw new AppError(
            'The user belong to the token that no longer exists',
            401
        );
    }
    req.user = user;
    next();
});

exports.restrictTo = (...rotes) => {
    return catchError(
        (req, res, next) => {
            if (rotes.includes(req.user.rote)) {
                return next();
            } else if (rotes.includes('selfUser')) {
                if (req.user.id === req.query.id) {
                    return next();
                }
            } else if (rotes.includes('selfManager')) {
                if (User.findById(req.query.id).manager === req.user._id) {
                    return next();
                }
            } else if (rotes.includes('schoolManager')) {
                if (School.findById(req.query.id).manager === req.user._id) {
                    return next();
                }
            }
            throw new AppError('You don\'t have permission to do that', 403);
        }
    );
};