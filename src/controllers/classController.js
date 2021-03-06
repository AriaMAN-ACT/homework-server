const factory = require('./handlerFactory');
const Class = require('../models/Class');

exports.getClasses = factory.getAll(Class);

exports.createClass = factory.createOne(Class);

exports.getClass = factory.getOne(Class);

exports.updateClass = factory.updateOne(Class);

exports.deleteClass = factory.deleteOne(Class);