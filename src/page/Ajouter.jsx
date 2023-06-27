import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ajouterLivre } from '../service/AddLivres';
import FormLivres from '../component/FormLivres';
import { Card, Container } from 'react-bootstrap';

const Ajouter = () => {
  const [titre, setTitre] = useState('');
  const [auteur, setAuteur] = useState('');
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'titre':
        setTitre(value);
        break;
      case 'auteur':
        setAuteur(value);
        break;
      case 'prix':
        setPrix(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nouveauLivre = {
      title: titre,
      author: auteur,
      price: parseFloat(prix),
      description: description,
    };

    ajouterLivre(nouveauLivre);

    setTitre('');
    setAuteur('');
    setPrix('');
    setDescription('');

    navigate('/'); // Redirection vers la page principale
  };

  return (
    <div>
      <Container>
        <Card className="text-center" style={{ marginTop: '20px' }}>
          <Card.Body>
            <Card.Title>Ajouter un livre</Card.Title>
            <FormLivres
              titre={titre}
              auteur={auteur}
              prix={prix}
              description={description}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Ajouter;
