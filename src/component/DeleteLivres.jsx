import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SupprimerLivre = ({ livreId, handleDelete }) => {
  
  const handleSupprimerClick = () => {
    axios.delete(`http://localhost:3000/livres/${livreId}`)
      .then(response => {
        console.log('Livre supprimé avec succès');
        handleDelete(livreId);
      })
      .catch(error => {
        console.error('Erreur lors de la suppression du livre', error);
      });
  };

  return (
    <Button variant="danger" onClick={handleSupprimerClick}><FontAwesomeIcon icon={faTrashAlt} /></Button>
  );
};

export default SupprimerLivre;
