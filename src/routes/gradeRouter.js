const express = require('express');

const GradeController = require('../controllers/GradeController');

const router = express.Router();

router
    .route('/')
    .get(GradeController.getGrades)
    .post(GradeController.createGrade);
router
    .route('/:id')
    .get(GradeController.getGrade)
    .patch(GradeController.updateGrade)
    .delete(GradeController.deleteGrade);

module.exports = router;