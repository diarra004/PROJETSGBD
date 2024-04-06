const express = require('express');
const mysql = require ('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'INFO_ETUDIANTS'
});

connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données :', err);
      return;
    }
    console.log('Connecté à la base de données MySQL');
  });
  
  // Définir les routes pour l'authentification
  app.post('/login', (req, res) => {
    // Récupérer les informations d'authentification depuis le corps de la requête
    const { email, password } = req.body;
  
    // Vérifier les informations d'authentification dans la base de données
    const query = 'SELECT * FROM INFO WHERE email = ? AND password = ?';
    connection.query(query, [email, password], (err, results) => {
      if (err) {
        console.error('Erreur lors de la vérification des informations d\'authentification :', err);
        res.status(500).send('Erreur lors de la vérification des informations d\'authentification');
        return;
      }
  
      if (results.length === 0) {
        res.status(401).send('Adresse e-mail ou mot de passe incorrect');
        return;
      }
  
      const user = results[0];
      const isTeacher = user.est_respo;
  
      // Rediriger en fonction du statut de responsable
      if (isTeacher) {
        res.redirect('/responsable');
      } else {
        res.redirect('/etudiant');
      }
    });
  });
  
  // Démarrer le serveur
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
  });
  module.exports = connection;