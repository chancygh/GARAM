// models/commentaire.js
const mongoose = require('mongoose');

const ingredientRecette = new mongoose.Schema({
  unit: { type: Int16Array, required: true },
  quantite: { type: Int16Array, required: true },
  recetteId: { type: mongoose.Schema.Types.ObjectId, ref: 'recette', required: true },
  ingredientId: { type: mongoose.Schema.Types.ObjectId, ref: 'ingredient', required: true }
});

module.exports = mongoose.model('ingredientRecette', ingredientRecette);
