
const express = require('express');
const mongoose = require('mongoose');
const { connecter } = require('../database/connect');


const membreRoutes = require('../route/membreRoute');
const categorieRoutes = require('../route/categorieRoute');
const commentaireRoutes = require('../route/commentaireRoute');
const recetteRoutes = require('../route/recetteRoute');
const ingredientRoutes = require('../route/ingredientRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(membreRoutes);
app.use(categorieRoutes);
app.use(commentaireRoutes);
app.use(recetteRoutes);
app.use(ingredientRoutes);

// Connexion à la base de données MongoDB
connecter("mongodb://127.0.0.1:27017/",(erreur)=>{
    if(erreur){
        console.log("erreur de connexion a la base de donnee");
        process.exit(-1)
    }else{
        console.log("connexion avec la base de donnee etablie");
        app.listen(3000);
        console.log("Attente de requete");
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Ok')
});