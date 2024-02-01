const express = require("express");
const router = express.Router();

// Import du controller
const userController = require("../controllers/user")

// Gestion des Routes et des méthodes appliquées
router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;