const factory = require('./handlerFactory');
const School = require('../models/School');

exports.getSchools = factory.getAll(School);

exports.createSchool = factory.createOne(School);

exports.getSchool = factory.getOne(School);

exports.updateSchool = factory.updateOne(School);

exports.deleteSchool = factory.deleteOne(School);