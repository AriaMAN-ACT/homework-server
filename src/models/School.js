const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A School Must Have a name'],
        unique: true
    },
    grades: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Grade'
    },
    manager: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'A School Must Have a manager']
    }
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;