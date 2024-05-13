// controllers/commentaireController.js
const commentaireService = require('../services/commentaireApiService');

module.exports = {
  async listerCommentaires(req, res) {
    try {
      const commentaires = await commentaireService.listerCommentaires();
      res.json(commentaires);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async listerCommentairesParRecette(req, res) {
    const { recetteId } = req.params;
    try {
      const commentaires = await commentaireService.listerCommentairesParRecette(recetteId);
      res.json(commentaires);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async recupererCommentaireParId(req, res) {
    const { commentaireId } = req.params;
    try {
      const commentaire = await commentaireService.recupererCommentaireParId(commentaireId);
      if (!commentaire) {
        res.status(404).json({ message: 'Commentaire non trouvé' });
      } else {
        res.json(commentaire);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async creerCommentaire(req, res) {
    const { contenu, auteur, recetteId } = req.body;
    try {
      const commentaireCree = await commentaireService.creerCommentaire(contenu, auteur, recetteId);
      res.status(201).json(commentaireCree);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async mettreAJourCommentaire(req, res) {
    const { commentaireId } = req.params;
    const { contenu } = req.body;
    try {
      const commentaireMiseAJour = await commentaireService.mettreAJourCommentaire(commentaireId, contenu);
      res.json(commentaireMiseAJour);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async supprimerCommentaire(req, res) {
    const { commentaireId } = req.params;
    try {
      const commentaireSupprime = await commentaireService.supprimerCommentaire(commentaireId);
      res.json({ message: 'Commentaire supprimé' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
