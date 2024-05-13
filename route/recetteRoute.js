const express = require('express');
const router = express.Router();
const recetteController = require('../controllers/recetteController');

// Route pour lister les recettes
router.get('/recettes', recetteController.listerRecettes);

// Route pour lister les recettes d'une catégorie spécifique
router.get('/categories/:categorieId/recettes', recetteController.listerRecettesParCategorie);

// Route pour récupérer une recette par son ID
router.get('/recettes/:recetteId', recetteController.recupererRecetteParId);

// Route pour créer une nouvelle recette
router.post('/recettes', recetteController.creerRecette);

// Route pour mettre à jour une recette
router.put('/recettes/:recetteId', recetteController.mettreAJourRecette);

// Route pour supprimer une recette
router.delete('/recettes/:recetteId', recetteController.supprimerRecette);

module.exports = router;
