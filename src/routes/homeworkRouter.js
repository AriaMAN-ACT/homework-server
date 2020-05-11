const express = require('express');

const homeworkController = require('../controllers/homeworkController');
const authController = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(homeworkController.getHomeworks)
    .post(authController.protect, authController.restrictTo('admin', 'manager'), homeworkController.createHomework);
router
    .route('/:id')
    .get(homeworkController.getHomework)
    .patch(authController.protect, authController.restrictTo('admin', 'manager'), homeworkController.updateHomework)
    .delete(authController.protect, authController.restrictTo('admin', 'manager'), homeworkController.deleteHomework);

module.exports = router;