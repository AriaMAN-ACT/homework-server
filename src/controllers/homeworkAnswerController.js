const factory = require('./handlerFactory');
const HomeworkAnswer = require('../models/HomeworkAnswer');
const catchError = require('../utils/catchError');
const AppError = require('../utils/AppError');
exports.getHomeworkAnswers = factory.getAll(HomeworkAnswer);

exports.createHomeworkAnswer = catchError(
    async (req, res) => {
        if (!req.files) {
            throw new AppError('No Files In The Request', 404);
        }

        const file = req.files.file;

        const extension = file.name.split('.').pop();

        if (extension !== 'pdf') {
            throw new AppError('Invalid File Input', 404);
        }

        const name = `${Date.now()}-${req.user._id}.${extension}`;

        file.mv(`${__dirname}/../../uploads/${name}`);

        req.body.file = name;

        const doc = await HomeworkAnswer.create({...req.body, manager: req.user._id});

        res.status(201).json({
            status: 'success',
            data: {
                doc
            }
        });
    }
);

exports.getHomeworkAnswer = factory.getOne(HomeworkAnswer);

exports.updateHomeworkAnswer = catchError(
    async (req, res) => {
        if (!req.files) {
            throw new AppError('No Files In The Request', 404);
        }

        const file = req.files.file;

        const extension = file.name.split('.').pop();

        if (extension !== 'pdf') {
            throw new AppError('Invalid File Input', 404);
        }

        const name = `${Date.now()}-${req.user._id}.${extension}`;

        file.mv(`${__dirname}/../../uploads/${name}`);

        const doc = await HomeworkAnswer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!doc) {
            throw new AppError('No document found with that ID', 404);
        }

        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        });
    }
);

exports.deleteHomeworkAnswer = factory.deleteOne(HomeworkAnswer);