// models/membre.js
const mongoose = require('mongoose');

const membre = new mongoose.Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    RegistrationDate: {type: Date, required: true}
});

module.exports = mongoose.model('membre', membre);

