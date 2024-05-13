const express = require('express');
const router = express.Router();
const membreController = require('../controllers/membreController');

// Route pour lister les membres
router.get('/membres', membreController.listerMembres);

// Route pour récupérer un membre par son ID
router.get('/membres/:id', membreController.recupererMembreParId);

// Route pour créer un nouveau membre
router.post('/membres', membreController.creerMembre);

// Route pour mettre à jour un membre
router.put('/membres/:id', membreController.mettreAJourMembre);

// Route pour supprimer un membre
router.delete('/membres/:id', membreController.supprimerMembre);

module.exports = router;
