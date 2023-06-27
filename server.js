const express = require('express');
const app = express();
const port = 3000;
const livres = require('./livres.json');
const cors = require('cors');
const fs = require('fs');
app.use(express.json()); // Parse JSON request body // Parse JSON request body
app.use(cors()); 
// Route for listing all livres
app.get('/livres', (req, res) => {
  res.json(livres);
});

// Route for getting a livre by its ID
app.get('/livres/livre/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const livre = livres.find((resultat) => resultat.id === id);

  if (livre) {
    res.json(livre);
  } else {
    res.status(404).json({ message: 'Livre not found' });
  }
});

// Route for getting a livre by its title
app.get('/livres/livre/:titre', (req, res) => {
  const titre = req.params.titre;
  const livre = livres.find((resultat) => resultat.title === titre);

  if (livre) {
    res.json(livre);
  } else {
    res.status(404).json({ message: 'Livre not found' });
  }
});

// Route for creating a new livre
let livreIdCounter = livres.length + 1;
app.post('/livres', (req, res) => {
  const nouveauLivre = req.body;
  nouveauLivre.id = livreIdCounter;
  livres.push(nouveauLivre);
  livreIdCounter++;
  res.status(201).json(nouveauLivre);
  saveLivresToFile();
});

// Route for updating a livre by its ID
app.put('/livres/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedlivre = req.body;

  const index = livres.findIndex((q) => q.id === id);

  if (index !== -1) {
    livres[index] = { ...livres[index], ...updatedlivre };
    res.json(livres[index]);
    saveLivresToFile();
  } else {
    res.status(404).json({ message: 'Livre not found' });
  }
});

// Route for deleting a livre by its ID
app.delete('/livres/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = livres.findIndex((q) => q.id === id);

  if (index !== -1) {
    const deletedlivre = livres.splice(index, 1);
    res.json(deletedlivre[0]);
    saveLivresToFile();
  } else {
    res.status(404).json({ message: 'Livre not found' });
  }
});

// Function to save livres to the JSON file
function saveLivresToFile() {
  const livresJSON = JSON.stringify(livres, null, 2);
  fs.writeFile('./livres.json', livresJSON, (err) => {
    if (err) {
      console.error('Error saving livres to file:', err);
    } else {
      console.log('Livres saved to file.');
    }
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
