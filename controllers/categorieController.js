// controllers/categorieController.js
const categorieService = require('../services/categorieApiService');

module.exports = {
  async listerCategories(req, res) {
    try {
      const categories = await categorieService.listerCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async recupererCategorieParId(req, res) {
    try {
      const categorie = await categorieService.recupererCategorieParId(req.params.id);
      if (!categorie) {
        res.status(404).json({ message: 'Catégorie non trouvée' });
      } else {
        res.json(categorie);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async creerCategorie(req, res) {
    const { nom } = req.body;
    try {
      const categorieCree = await categorieService.creerCategorie(nom);
      res.status(201).json(categorieCree);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async mettreAJourCategorie(req, res) {
    const { id } = req.params;
    const { nom } = req.body;
    try {
      const categorieMiseAJour = await categorieService.mettreAJourCategorie(id, nom);
      res.json(categorieMiseAJour);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async supprimerCategorie(req, res) {
    const { id } = req.params;
    try {
      const categorieSupprimee = await categorieService.supprimerCategorie(id);
      res.json({ message: 'Catégorie supprimée' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
