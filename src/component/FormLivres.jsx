import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FormLivres = ({ titre, auteur, prix, description, handleSubmit,handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitre">
        <Form.Label>Titre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrer le titre"
          value={titre}
          onChange={handleChange}
          name="titre"
        />
      </Form.Group>

      <Form.Group controlId="formAuteur">
        <Form.Label>Auteur</Form.Label>
        <Form.Control
          type="text"
          placeholder="Entrer l'auteur"
          value={auteur}
          onChange={handleChange}
          name="auteur"
        />
      </Form.Group>

      <Form.Group controlId="formPrix">
        <Form.Label>Prix</Form.Label>
        <Form.Control
          type="number"
          step="0.01"
          placeholder="Entrer le prix"
          value={prix}
          onChange={handleChange}
          name="prix"
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Entrer la description"
          value={description}
          onChange={handleChange}
          name="description"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Ajouter
      </Button>
    </Form>
  );
};

export default FormLivres;
