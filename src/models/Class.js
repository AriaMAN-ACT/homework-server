const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Grade Must Have a name']
    },
    students: {
        type: [mongoose.Schema.ObjectID],
        ref: 'User'
    },
    teachers: {
        type: [mongoose.Schema.ObjectID],
        ref: 'User'
    }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;