// services/ingredientService.js
const Ingredient = require('../models/ingredients');

module.exports = {
  async listerIngredients() {
    try {
      const ingredients = await Ingredient.find();
      return ingredients;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de la liste des ingrédients');
    }
  },

  async recupererIngredientParId(ingredientId) {
    try {
      const ingredient = await Ingredient.findById(ingredientId);
      return ingredient;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de l\'ingrédient');
    }
  },

  async creerIngredient(nom) {
    try {
      const nouvelIngredient = new Ingredient({ nom });
      const ingredientCree = await nouvelIngredient.save();
      return ingredientCree;
    } catch (error) {
      throw new Error('Erreur lors de la création de l\'ingrédient');
    }
  },

  async ajouterIngredientARecette(recetteId, ingredientId, unite, quantite) {
    try {
      const recette = await Recette.findById(recetteId);
      if (!recette) {
        throw new Error('Recette non trouvée');
      }
      recette.ingredients.push({ ingredient: ingredientId, unite, quantite });
      const recetteAvecIngredient = await recette.save();
      return recetteAvecIngredient;
    } catch (error) {
      throw new Error('Erreur lors de l\'ajout de l\'ingrédient à la recette');
    }
  },

  async mettreAJourIngredient(ingredientId, nouveauNom) {
    try {
      const ingredient = await Ingredient.findById(ingredientId);
      if (!ingredient) {
        throw new Error('Ingrédient non trouvé');
      }
      ingredient.nom = nouveauNom;
      const ingredientMiseAJour = await ingredient.save();
      return ingredientMiseAJour;
    } catch (error) {
      throw new Error('Erreur lors de la mise à jour de l\'ingrédient');
    }
  },

  async supprimerIngredient(ingredientId) {
    try {
      const ingredient = await Ingredient.findByIdAndDelete(ingredientId);
      if (!ingredient) {
        throw new Error('Ingrédient non trouvé');
      }
      return ingredient;
    } catch (error) {
      throw new Error('Erreur lors de la suppression de l\'ingrédient');
    }
  }
};
