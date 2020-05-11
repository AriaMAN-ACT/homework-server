const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Lesson Must Have a name']
    }
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;