const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Grade Must Have a name']
    },
    students: {
        type: [mongoose.Schema.ObjectID],
        ref: 'User',
        required: [true, 'A Class Must Have At Least One Student']
    },
    teachers: {
        type: [mongoose.Schema.ObjectID],
        ref: 'User',
        required: [true, 'A Class Must Have At Least One Teacher']
    }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;