// services/commentaireService.js
const Commentaire = require('../Models/commentaires');

module.exports = {
  async listerCommentaires() {
    try {
      const commentaires = await Commentaire.find();
      return commentaires;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de la liste des commentaires');
    }
  },

  async listerCommentairesParRecette(recetteId) {
    try {
      const commentaires = await Commentaire.find({ recette: recetteId });
      return commentaires;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de la liste des commentaires pour cette recette');
    }
  },

  async recupererCommentaireParId(commentaireId) {
    try {
      const commentaire = await Commentaire.findById(commentaireId);
      return commentaire;
    } catch (error) {
      throw new Error('Erreur lors de la récupération du commentaire');
    }
  },

  async creerCommentaire(contenu, auteur, recetteId) {
    try {
      const nouveauCommentaire = new Commentaire({ contenu, auteur, recette: recetteId });
      const commentaireCree = await nouveauCommentaire.save();
      return commentaireCree;
    } catch (error) {
      throw new Error('Erreur lors de la création du commentaire');
    }
  },

  async mettreAJourCommentaire(commentaireId, nouveauContenu) {
    try {
      const commentaire = await Commentaire.findById(commentaireId);
      if (!commentaire) {
        throw new Error('Commentaire non trouvé');
      }
      commentaire.contenu = nouveauContenu;
      const commentaireMiseAJour = await commentaire.save();
      return commentaireMiseAJour;
    } catch (error) {
      throw new Error('Erreur lors de la mise à jour du commentaire');
    }
  },

  async supprimerCommentaire(commentaireId) {
    try {
      const commentaire = await Commentaire.findByIdAndDelete(commentaireId);
      if (!commentaire) {
        throw new Error('Commentaire non trouvé');
      }
      return commentaire;
    } catch (error) {
      throw new Error('Erreur lors de la suppression du commentaire');
    }
  }
};
