const express = require("express");
const mongoose = require('mongoose');

// Import du Router
const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");

// Connexion à MongoDB restreinte
mongoose.connect("mongodb+srv://<user>:<mdp>@cluster0.gmbrfzo.mongodb.net/?retryWrites=true&w=majority")
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

// Enregistrement du Router pour les requêtes
app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;