// controllers/recetteController.js
const recetteService = require('../services/recetteApiService');

module.exports = {
  async listerRecettes(req, res) {
    try {
      const recettes = await recetteService.listerRecettes();
      res.json(recettes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async listerRecettesParCategorie(req, res) {
    const { categorieId } = req.params;
    try {
      const recettes = await recetteService.listerRecettesParCategorie(categorieId);
      res.json(recettes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async recupererRecetteParId(req, res) {
    const { recetteId } = req.params;
    try {
      const recette = await recetteService.recupererRecetteParId(recetteId);
      if (!recette) {
        res.status(404).json({ message: 'Recette non trouvée' });
      } else {
        res.json(recette);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async creerRecette(req, res) {
    const { nom, description, categorieId } = req.body;
    try {
      const recetteCree = await recetteService.creerRecette(nom, description, categorieId);
      res.status(201).json(recetteCree);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async mettreAJourRecette(req, res) {
    const { recetteId } = req.params;
    const { nom, description } = req.body;
    try {
      const recetteMiseAJour = await recetteService.mettreAJourRecette(recetteId, nom, description);
      res.json(recetteMiseAJour);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async supprimerRecette(req, res) {
    const { recetteId } = req.params;
    try {
      const recetteSupprimee = await recetteService.supprimerRecette(recetteId);
      res.json({ message: 'Recette supprimée' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
