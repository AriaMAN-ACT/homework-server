const express = require('express');

const homeworkAnswerController = require('../controllers/homeworkAnswerController');
const authController = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(homeworkAnswerController.getHomeworkAnswers)
    .post(authController.protect, authController.restrictTo('admin', 'student'), homeworkAnswerController.createHomeworkAnswer);
router
    .route('/:id')
    .get(homeworkAnswerController.getHomeworkAnswer)
    .patch(authController.protect, authController.restrictTo('admin', 'selfStudent'), homeworkAnswerController.updateHomeworkAnswer)
    .delete(authController.protect, authController.restrictTo('admin', 'selfStudent'), homeworkAnswerController.deleteHomeworkAnswer);

module.exports = router;