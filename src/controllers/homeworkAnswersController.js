const factory = require('./handlerFactory');
const HomeworkAnswer = require('../models/HomeworkAnswer');

exports.getHomeworkAnswers = factory.getAll(HomeworkAnswer);

exports.createHomeworkAnswer = factory.createOne(HomeworkAnswer);

exports.getHomeworkAnswer = factory.getOne(HomeworkAnswer);

exports.updateHomeworkAnswer = factory.updateOne(HomeworkAnswer);

exports.deleteHomeworkAnswer = factory.deleteOne(HomeworkAnswer);