const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Lesson Must Have a name']
    },
    teacher: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    homework: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Homework'
    }
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;