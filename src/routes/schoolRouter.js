const express = require('express');

const schoolController = require('../controllers/SchoolController');
const authController = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(schoolController.getSchools)
    .post(authController.protect, authController.restrictTo('admin', 'school-manager'), schoolController.createSchool);
router
    .route('/:id')
    .get(schoolController.getSchool)
    .patch(authController.protect, authController.restrictTo('admin', 'schoolManager'), schoolController.updateSchool)
    .delete(authController.protect, authController.restrictTo('admin', 'schoolManager'), schoolController.deleteSchool);

module.exports = router;