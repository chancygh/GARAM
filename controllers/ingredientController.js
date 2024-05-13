// controllers/ingredientController.js
const ingredientService = require('../services/ingredientApiService');

module.exports = {
  async listerIngredients(req, res) {
    try {
      const ingredients = await ingredientService.listerIngredients();
      res.json(ingredients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async recupererIngredientParId(req, res) {
    const { ingredientId } = req.params;
    try {
      const ingredient = await ingredientService.recupererIngredientParId(ingredientId);
      if (!ingredient) {
        res.status(404).json({ message: 'Ingrédient non trouvé' });
      } else {
        res.json(ingredient);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async creerIngredient(req, res) {
    const { nom } = req.body;
    try {
      const ingredientCree = await ingredientService.creerIngredient(nom);
      res.status(201).json(ingredientCree);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async ajouterIngredientARecette(req, res) {
    const { recetteId, ingredientId, unite, quantite } = req.body;
    try {
      const recetteAvecIngredient = await ingredientService.ajouterIngredientARecette(recetteId, ingredientId, unite, quantite);
      res.json(recetteAvecIngredient);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async mettreAJourIngredient(req, res) {
    const { ingredientId } = req.params;
    const { nom } = req.body;
    try {
      const ingredientMiseAJour = await ingredientService.mettreAJourIngredient(ingredientId, nom);
      res.json(ingredientMiseAJour);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async supprimerIngredient(req, res) {
    const { ingredientId } = req.params;
    try {
      const ingredientSupprime = await ingredientService.supprimerIngredient(ingredientId);
      res.json({ message: 'Ingrédient supprimé' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
