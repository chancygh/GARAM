const Recette = require('../models/recettes');

module.exports = {
  async listerRecettes() {
    try {
      const recettes = await Recette.find();
      return recettes;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de la liste des recettes');
    }
  },

  async listerRecettesParCategorie(categorieId) {
    try {
      const recettes = await Recette.find({ categorie: categorieId });
      return recettes;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de la liste des recettes pour cette catégorie');
    }
  },

  async recupererRecetteParId(recetteId) {
    try {
      const recette = await Recette.findById(recetteId);
      return recette;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de la recette');
    }
  },

  async creerRecette(nom, description, categorieId) {
    try {
      const nouvelleRecette = new Recette({ nom, description, categorie: categorieId });
      const recetteCree = await nouvelleRecette.save();
      return recetteCree;
    } catch (error) {
      throw new Error('Erreur lors de la création de la recette');
    }
  },

  async mettreAJourRecette(recetteId, nouveauNom, nouvelleDescription) {
    try {
      const recette = await Recette.findById(recetteId);
      if (!recette) {
        throw new Error('Recette non trouvée');
      }
      recette.nom = nouveauNom;
      recette.description = nouvelleDescription;
      const recetteMiseAJour = await recette.save();
      return recetteMiseAJour;
    } catch (error) {
      throw new Error('Erreur lors de la mise à jour de la recette');
    }
  },

  async supprimerRecette(recetteId) {
    try {
      const recette = await Recette.findByIdAndDelete(recetteId);
      if (!recette) {
        throw new Error('Recette non trouvée');
      }
      return recette;
    } catch (error) {
      throw new Error('Erreur lors de la suppression de la recette');
    }
  }
};
