const express = require("express");
const router = express.Router();

// Import du controller
const stuffController = require("../controllers/stuff")

// Gestion des Routes et des méthodes appliquées
router.post('/', stuffController.createThing);
router.put('/:id', stuffController.modifyThing);
router.delete('/:id', stuffController.deleteThing);
router.get('/:id', stuffController.getOneThing);
router.get('/', stuffController.getAllThings);

module.exports = router;