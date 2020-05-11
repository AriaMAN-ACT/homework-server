const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Class Must Have a name']
    },
    students: {
        type: [mongoose.Schema.ObjectId],
        ref: 'User'
    }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;