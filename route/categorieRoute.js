// routes/categorieRoutes.js
const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieController');

// Route pour lister les catégories
router.get('/categories', categorieController.listerCategories);

// Route pour récupérer une catégorie par son ID
router.get('/categories/:id', categorieController.recupererCategorieParId);

// Route pour créer une nouvelle catégorie
router.post('/categories', categorieController.creerCategorie);

// Route pour mettre à jour une catégorie
router.put('/categories/:id', categorieController.mettreAJourCategorie);

// Route pour supprimer une catégorie
router.delete('/categories/:id', categorieController.supprimerCategorie);

module.exports = router;
