const mongoose = require('mongoose');

const homeworkAnswersSchema = new mongoose.Schema({});

const HomeworkAnswer = mongoose.model('HomeworkAnswers', homeworkAnswersSchema);

module.exports = HomeworkAnswer;