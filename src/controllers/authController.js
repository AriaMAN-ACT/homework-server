const jsonWebToken = require('jsonwebtoken');

const User = require('../models/User');
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