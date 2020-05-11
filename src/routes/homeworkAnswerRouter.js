const express = require('express');

const homeworkAnswerController = require('../controllers/homeworkAnswerController');
const authController = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(homeworkAnswerController.getHomeworkAnswers)
    .post(authController.protect, authController.restrictTo('admin', 'manager'), homeworkAnswerController.createHomeworkAnswer);
router
    .route('/:id')
    .get(homeworkAnswerController.getHomeworkAnswer)
    .patch(authController.protect, authController.restrictTo('admin', 'manager'), homeworkAnswerController.updateHomeworkAnswer)
    .delete(authController.protect, authController.restrictTo('admin', 'manager'), homeworkAnswerController.deleteHomeworkAnswer);

module.exports = router;