const factory = require('./handlerFactory');
const Homework = require('../models/Homework');

exports.getHomeworks = factory.getAll(Homework);

exports.createHomework = factory.createOne(Homework);

exports.getHomework = factory.getOne(Homework);

exports.updateHomework = factory.updateOne(Homework);

exports.deleteHomework = factory.deleteOne(Homework);