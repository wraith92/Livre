import { useState } from 'react';
import { modifyLivres } from '../service/ModifyLivres';
import { Form, Button } from 'react-bootstrap';
const FormulaireModification = ({ livreId }) => {
  const [nouveauTitre, setNouveauTitre] = useState('');
  const [nouvelAuteur, setNouvelAuteur] = useState('');
  const [nouveauPrix, setNouveauPrix] = useState('');
  const [nouvelleDescription, setNouvelleDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construire l'objet de mise à jour avec les nouvelles valeurs des champs de saisie
    const livreModifie = {
      title: nouveauTitre,
      author: nouvelAuteur,
      price: parseFloat(nouveauPrix),
      description: nouvelleDescription,
    };

     // Envoyer la requête PUT à l'API Node.js pour mettre à jour le livre
     modifyLivres(livreId, livreModifie)
     .then(response => {
       // Effectuer les actions nécessaires après la mise à jour réussie du livre
       console.log('Livre modifié avec succès');
       // Réinitialiser les champs de saisie du formulaire de modification
       setNouveauTitre('');
       setNouvelAuteur('');
       setNouveauPrix('');
       setNouvelleDescription('');
     })
     .catch(error => {
       // Gérer les erreurs en cas d'échec de la mise à jour du livre
       console.error('Erreur lors de la modification du livre', error);
     });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Champs de saisie pour les propriétés du livre */}
      <Form.Group controlId="titre">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" value={nouveauTitre} onChange={e => setNouveauTitre(e.target.value)} placeholder="Titre" />
      </Form.Group>

      <Form.Group controlId="auteur">
        <Form.Label>Auteur</Form.Label>
        <Form.Control type="text" value={nouvelAuteur} onChange={e => setNouvelAuteur(e.target.value)} placeholder="Auteur" />
      </Form.Group>

      <Form.Group controlId="prix">
        <Form.Label>Prix</Form.Label>
        <Form.Control type="number" value={nouveauPrix} onChange={e => setNouveauPrix(e.target.value)} placeholder="Prix" />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={nouvelleDescription}
          onChange={e => setNouvelleDescription(e.target.value)}
          placeholder="Description"
        />
      </Form.Group>

      {/* Bouton "Enregistrer" pour soumettre les modifications */}
      <Button variant="primary" type="submit">
        Enregistrer
      </Button>
    </Form>
  );
};

export default FormulaireModification;
