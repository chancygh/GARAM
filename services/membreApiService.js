const Membre = require('../Models/membres');

// Recuperer la liste des membres
async function listerMembres() {
  try {
    const membres = await Membre.find();
    return membres;
  } catch (error) {
    throw new Error('Erreur lors de la récupération de la liste des membres');
  }
}

// Recuperer un membre par son id
async function recupererMembreParId(id) {
  try {
    const membre = await Membre.findById(id);
    return membre;
  } catch (error) {
    throw new Error('Erreur lors de la récupération du membre');
  }
}

// Recuperer un membre suivant son adressse email et son mot de passe
async function recupererMembreParEmailEtMotDePasse(email, motDePasse) {
  try {
    const membre = await Membre.findOne({ email, motDePasse });
    return membre;
  } catch (error) {
    throw new Error('Erreur lors de la récupération du membre');
  }
}

// Creer un nouveau membre
async function creerMembre(nom, email, motDePasse) {
  try {
    const nouveauMembre = new Membre({ nom, email, motDePasse });
    const membreCree = await nouveauMembre.save();
    return membreCree;
  } catch (error) {
    throw new Error('Erreur lors de la création du membre');
  }
}

// Mettre a jour un membre
async function mettreAJourMembre(id, nouveauNom, nouvelEmail, nouveauMotDePasse) {
  try {
    const membre = await Membre.findById(id);
    if (!membre) {
      throw new Error('Membre non trouvé');
    }

    if (nouveauNom) {
      membre.nom = nouveauNom;
    }
    if (nouvelEmail) {
      membre.email = nouvelEmail;
    }
    if (nouveauMotDePasse) {
      membre.motDePasse = nouveauMotDePasse;
    }

    const membreMisAJour = await membre.save();
    return membreMisAJour;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour du membre');
  }
}

// Supprimer un membre
async function supprimerMembre(id) {
  try {
    const membre = await Membre.findByIdAndDelete(id);
    if (!membre) {
      throw new Error('Membre non trouvé');
    }
    return membre;
  } catch (error) {
    throw new Error('Erreur lors de la suppression du membre');
  }
}

module.exports = {
  listerMembres,
  recupererMembreParId,
  recupererMembreParEmailEtMotDePasse,
  creerMembre,
  mettreAJourMembre,
  supprimerMembre
};

