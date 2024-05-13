// routes/ingredientRoutes.js
const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');

// Route pour lister les ingrédients
router.get('/ingredients', ingredientController.listerIngredients);

// Route pour récupérer un ingrédient par son ID
router.get('/ingredients/:ingredientId', ingredientController.recupererIngredientParId);

// Route pour créer un nouvel ingrédient
router.post('/ingredients', ingredientController.creerIngredient);

// Route pour ajouter un ingrédient à une recette
router.post('/recettes/:recetteId/ingredients', ingredientController.ajouterIngredientARecette);

// Route pour mettre à jour un ingrédient
router.put('/ingredients/:ingredientId', ingredientController.mettreAJourIngredient);

// Route pour supprimer un ingrédient
router.delete('/ingredients/:ingredientId', ingredientController.supprimerIngredient);

module.exports = router;
