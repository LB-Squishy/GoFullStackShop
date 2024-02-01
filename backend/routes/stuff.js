const express = require("express");
const auth = require("auth");
const router = express.Router();

// Import du controller
const stuffController = require("../controllers/stuff")

// Gestion des Routes et des méthodes appliquées
router.post('/', auth, stuffController.createThing);
router.put('/:id', auth, stuffController.modifyThing);
router.delete('/:id', auth, stuffController.deleteThing);
router.get('/:id', auth, stuffController.getOneThing);
router.get('/', auth, stuffController.getAllThings);

module.exports = router;