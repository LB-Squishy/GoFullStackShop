const express = require("express");
const mongoose = require('mongoose');

// Import du Router
const stuffRoutes = require("./routes/stuff");

// Connexion à MongoDB restreinte
mongoose.connect("mongodb+srv://<User>:<mdp>@cluster0.gmbrfzo.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
const app = express();

// Traite le Cross Origin Resource Sharing 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

// Enregistrement du Router pour les requêtes vers /api/stuff
app.use("/api/stuff", stuffRoutes);

module.exports = app;