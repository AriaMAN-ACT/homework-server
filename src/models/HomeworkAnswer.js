const mongoose = require('mongoose');

const homeworkAnswersSchema = new mongoose.Schema({
    file: {
        type: String,
        required: [true, 'A HomeworkAnswer Must Have a file']
    },
    manager: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'A Homework Must have a Manager']
    },
    homework: {
        type: mongoose.Schema.ObjectId,
        ref: 'Homework'
    },
    requestAt: {
        type: Number
    }
});

const HomeworkAnswer = mongoose.model('HomeworkAnswers', homeworkAnswersSchema);

module.exports = HomeworkAnswer;