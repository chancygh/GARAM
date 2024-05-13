// routes/commentaireRoutes.js
const express = require('express');
const router = express.Router();
const commentaireController = require('../controllers/CommentaireController');

// Route pour lister les commentaires
router.get('/commentaires', commentaireController.listerCommentaires);

// Route pour lister les commentaires d'une recette spécifique
router.get('/recettes/:recetteId/commentaires', commentaireController.listerCommentairesParRecette);

// Route pour récupérer un commentaire par son ID
router.get('/commentaires/:commentaireId', commentaireController.recupererCommentaireParId);

// Route pour créer un nouveau commentaire
router.post('/commentaires', commentaireController.creerCommentaire);

// Route pour mettre à jour un commentaire
router.put('/commentaires/:commentaireId', commentaireController.mettreAJourCommentaire);

// Route pour supprimer un commentaire
router.delete('/commentaires/:commentaireId', commentaireController.supprimerCommentaire);

module.exports = router;
