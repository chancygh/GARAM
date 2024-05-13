// models/recette.js
const mongoose = require('mongoose');

const recette = new mongoose.Schema({
    titre: { type: String, required: true },
    description:{type: String, required: true},
    photo: {type: String, required: true},
    categorieId: { type: mongoose.Schema.Types.ObjectId, ref: 'categorie', required: true },
    membreId: { type: mongoose.Schema.Types.ObjectId, ref: 'membre', required: true },

});

module.exports = mongoose.model('recette', recette);
