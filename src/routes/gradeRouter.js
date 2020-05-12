const express = require('express');

const gradeController = require('../controllers/GradeController');
const authController = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(gradeController.getGrades)
    .post(authController.protect, authController.restrictTo('admin', 'manager'), gradeController.createGrade);
router
    .route('/:id')
    .get(gradeController.getGrade)
    .patch(authController.protect, authController.restrictTo('admin', 'gradeManager'), gradeController.updateGrade)
    .delete(authController.protect, authController.restrictTo('admin', 'gradeManager'), gradeController.deleteGrade);

module.exports = router;