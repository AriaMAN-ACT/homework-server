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
    manager: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'A School Must Have a manager']
    }
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;