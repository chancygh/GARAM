
// controllers/membreController.js
const Membre = require('../Models/membres');

module.exports = {
  // Récupérer la liste des membres
  async listerMembres(req, res) {
    try {
      const membres = await Membre.find();
      res.status(200).json(membres); // Ajout de res.status(200)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Récupérer un membre par son ID
  async recupererMembreParId(req, res) {
    try {
      const membre = await Membre.findById(req.params.id);
      if (membre) {
        res.status(200).json(membre); // Ajout de res.status(200)
      } else {
        res.status(404).json({ message: "Membre introuvable" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Créer un nouveau membre
  async creerMembre(req, res) {
    const nouveauMembre = new Membre({
      nom: req.body.nom,
      email: req.body.email,
      motDePasse: req.body.motDePasse
    });

    try {
      const membreCree = await nouveauMembre.save();
      res.status(201).json(membreCree);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Mettre à jour un membre
  async mettreAJourMembre(req, res) {
    try {
      const membre = await Membre.findById(req.params.id);
      if (membre) {
        if (req.body.nom != null) {
          membre.nom = req.body.nom;
        }
        if (req.body.email != null) {
          membre.email = req.body.email;
        }
        if (req.body.motDePasse != null) {
          membre.motDePasse = req.body.motDePasse;
        }

        const membreMisAJour = await membre.save();
        res.status(200).json(membreMisAJour); // Ajout de res.status(200)
      } else {
        res.status(404).json({ message: "Membre introuvable" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Supprimer un membre
  async supprimerMembre(req, res) {
    try {
      const membre = await Membre.findById(req.params.id);
      if (membre) {
        await membre.remove();
        res.status(200).json({ message: "Membre supprimé" }); // Ajout de res.status(200)
      } else {
        res.status(404).json({ message: "Membre introuvable" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
