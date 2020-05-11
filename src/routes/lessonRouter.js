const express = require('express');

const LessonController = require('../controllers/LessonController');

const router = express.Router();

router
    .route('/')
    .get(LessonController.getLessons)
    .post(LessonController.createLesson);
router
    .route('/:id')
    .get(LessonController.getLesson)
    .patch(LessonController.updateLesson)
    .delete(LessonController.deleteLesson);

module.exports = router;