import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBill, faBook } from '@fortawesome/free-solid-svg-icons';
import { InfoLivres } from '../service/InfoLivres';

const InfoLivre = () => {
  const { id } = useParams();
  const [livre, setLivre] = useState(null);

  useEffect(() => {
    const fetchLivre = async () => {
      try {
        const livreData = await InfoLivres(id);
        setLivre(livreData);
      } catch (error) {
        console.error('Error fetching livre:', error);
      }
    };

    fetchLivre();
  }, [id]);

  if (!livre) {
    return <div>Loading...</div>;
  }

  return (
    <Container style={{ marginTop: '50px' }}>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">{livre.title}</Card.Title>
          <Card.Text>
            <FontAwesomeIcon icon={faUser} /> Auteur: {livre.author}
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faMoneyBill} /> Prix: {livre.price}
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faBook} /> Description: {livre.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default InfoLivre;
