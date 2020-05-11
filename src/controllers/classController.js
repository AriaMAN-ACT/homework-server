const factory = require('./handlerFactory');
const Class = require('../models/Class');

exports.getLessons = factory.getAll(Class);

exports.createLesson = factory.createOne(Class);

exports.getLesson = factory.getOne(Class);

exports.updateLesson = factory.updateOne(Class);

exports.deleteLesson = factory.deleteOne(Class);