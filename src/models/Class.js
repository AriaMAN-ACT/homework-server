const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Class Must Have a name']
    },
    students: {
        type: [mongoose.Schema.ObjectId],
        ref: 'User'
    },
    lessons: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Lesson'
    },
    manager: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'A School Must Have a manager']
    }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;