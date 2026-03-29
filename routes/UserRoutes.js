const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const auth = require('../middelwares/auth');

// Route to create a new user = Register
router.post('/create', UserController.createUser);

// Route to get a user by their ID
router.get('/getbyid/:id', UserController.getUserById);

// Route to get all users
router.get('/all', UserController.getAllUsers);


// Route for user login
router.post('/login', UserController.login)

// Route to update a user by their ID
// router.put('/:id', UserController.updateUser);


// Route to delete a user by their ID
router.delete('/:id', UserController.deleteUser);


// Route sécurisée : pas besoin de :id dans l'URL car le token sait qui tu es
router.put('/update-profile', auth, UserController.updateWithToken);

module.exports = router;