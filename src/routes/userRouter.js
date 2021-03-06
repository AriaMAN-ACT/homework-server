const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signin').post(authController.signIn);

router
    .route('/')
    .get(userController.getUsers)
    .post(authController.protect, authController.restrictTo('admin', 'school-manager'), userController.createUser);
router
    .route('/:id')
    .get(userController.getUser)
    .patch(authController.protect, authController.restrictTo('admin', 'selfManager', 'selfUser'), userController.updateUser)
    .delete(authController.protect, authController.restrictTo('admin', 'selfManager'), userController.deleteUser);

module.exports = router;