const factory = require('./handlerFactory');
const Grade = require('../models/Grade');

exports.getGrades = factory.getAll(Grade);

exports.createGrade = factory.createOne(Grade);

exports.getGrade = factory.getOne(Grade);

exports.updateGrade = factory.updateOne(Grade);

exports.deleteGrade = factory.deleteOne(Grade);