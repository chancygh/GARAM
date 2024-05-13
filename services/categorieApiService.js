// services/categorieService.js
const Categorie = require('../models/categories');

module.exports = {
  async listerCategories() {
    try {
      const categories = await Categorie.find();
      return categories;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de la liste des catégories');
    }
  },

  async recupererCategorieParId(id) {
    try {
      const categorie = await Categorie.findById(id);
      return categorie;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de la catégorie');
    }
  },

  async creerCategorie(nom) {
    try {
      const nouvelleCategorie = new Categorie({ nom });
      const categorieCree = await nouvelleCategorie.save();
      return categorieCree;
    } catch (error) {
      throw new Error('Erreur lors de la création de la catégorie');
    }
  },

  async mettreAJourCategorie(id, nouveauNom) {
    try {
      const categorie = await Categorie.findById(id);
      if (!categorie) {
        throw new Error('Catégorie non trouvée');
      }
      categorie.nom = nouveauNom;
      const categorieMiseAJour = await categorie.save();
      return categorieMiseAJour;
    } catch (error) {
      throw new Error('Erreur lors de la mise à jour de la catégorie');
    }
  },

  async supprimerCategorie(id) {
    try {
      const categorie = await Categorie.findByIdAndDelete(id);
      if (!categorie) {
        throw new Error('Catégorie non trouvée');
      }
      return categorie;
    } catch (error) {
      throw new Error('Erreur lors de la suppression de la catégorie');
    }
  }
};
