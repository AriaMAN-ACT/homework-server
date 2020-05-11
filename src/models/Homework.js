const mongoose = require('mongoose');

const homeworkSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'A Homework Must have a description']
    },
    startAt: {
        type: Number,
        required: [true, 'A Homework Must have a startAt']
    },
    endAt: {
        type: Number,
        required: [true, 'A Homework Must have a endAt']
    },
    sendAfter: {
        type: Boolean,
        default: false
    },
    answers: {
        type: [mongoose.Schema.ObjectId],
        ref: 'HomeworkAnswer',
        default: []
    }
});

const Homework = mongoose.model('Homework', homeworkSchema);

module.exports = Homework;