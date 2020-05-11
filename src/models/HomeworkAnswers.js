const mongoose = require('mongoose');

const homeworkAnswersSchema = new mongoose.Schema({});

const HomeworkAnswers = mongoose.model('HomeworkAnswers', homeworkAnswersSchema);

module.exports = HomeworkAnswers;