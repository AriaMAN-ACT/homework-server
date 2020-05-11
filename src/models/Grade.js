const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Grade Must Have a name']
    },
    classes: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Class'
    },
    lessons: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Lesson'
    }
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;