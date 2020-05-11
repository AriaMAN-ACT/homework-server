const express = require('express');

const lessonController = require('../controllers/LessonController');
const authController = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(lessonController.getLessons)
    .post(authController.protect, authController.restrictTo('admin', 'manager'), lessonController.createLesson);
router
    .route('/:id')
    .get(lessonController.getLesson)
    .patch(authController.protect, authController.restrictTo('admin', 'manager'), lessonController.updateLesson)
    .delete(authController.protect, authController.restrictTo('admin', 'manager'), lessonController.deleteLesson);

module.exports = router;