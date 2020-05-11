const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A School Must Have a name'],
        unique: true
    },
    grades: {
        type: [mongoose.Schema.ObjectID],
        ref: 'Grade',
        required: [true, 'A School Must Have At Least One Grade']
    }
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;