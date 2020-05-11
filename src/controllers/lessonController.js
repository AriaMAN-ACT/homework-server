const factory = require('./handlerFactory');
const Lesson = require('../models/Lesson');

exports.getLessons = factory.getAll(Lesson);

exports.createLesson = factory.createOne(Lesson);

exports.getLesson = factory.getOne(Lesson);

exports.updateLesson = factory.updateOne(Lesson);

exports.deleteLesson = factory.deleteOne(Lesson);