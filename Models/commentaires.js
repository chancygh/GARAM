// models/commentaire.js
const mongoose = require('mongoose');

const commentaire = new mongoose.Schema({
  auteur: { type: String, required: true },
  note: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  recetteId: { type: mongoose.Schema.Types.ObjectId, ref: 'recette', required: true },
});

module.exports = mongoose.model('Commentaire', commentaire);
