const express = require('express');

const classController = require('../controllers/classController');
const authController = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(classController.getClasses)
    .post(authController.protect, authController.restrictTo('admin', 'school-manager'), classController.createClass);
router
    .route('/:id')
    .get(classController.getClass)
    .patch(authController.protect, authController.restrictTo('admin', 'classManager'), classController.updateClass)
    .delete(authController.protect, authController.restrictTo('admin', 'classManager'), classController.deleteClass);

module.exports = router;