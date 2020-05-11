const express = require('express');

const SchoolController = require('../controllers/SchoolController');

const router = express.Router();

router
    .route('/')
    .get(SchoolController.getSchools)
    .post(SchoolController.createSchool);
router
    .route('/:id')
    .get(SchoolController.getSchool)
    .patch(SchoolController.updateSchool)
    .delete(SchoolController.deleteSchool);

module.exports = router;