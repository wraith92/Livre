import React, {useEffect} from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBill, faBook, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import SupprimerLivre from './DeleteLivres';

const ListeLivre = ({ livres, handleModifierClick, handleDelete }) => {
  const handlePageLoad = (livreId) => {
    // Perform any necessary actions or API calls to load the page
    console.log('Page loaded for livre:', livreId);
  };
  useEffect(() => {
    // Load the page when component mounts or when handleModifierClick changes
    if (handleModifierClick) {
      handlePageLoad();
    }
  }, [handleModifierClick]);
  return (
    <Row className="justify-content-center">
      {livres.map((livre) => (
        <Col key={livre.id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card style={{ width: '100%', margin: '1rem' }}>
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', fontFamily: 'FontName' }}>{livre.title}</Card.Title>
              <Card.Text>
                <FontAwesomeIcon icon={faUser} /> Auteur: {livre.author}
              </Card.Text>
              <Card.Text>
                <FontAwesomeIcon icon={faMoneyBill} /> Prix: {livre.price}
              </Card.Text>
              <Card.Text>
                <FontAwesomeIcon icon={faBook} /> Description: {livre.description}
              </Card.Text>
              <Button variant="primary" onClick={() => handleModifierClick(livre.id)} className="col-3">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <SupprimerLivre livreId={livre.id} handleDelete={handleDelete} className="col-3" />
              <Link to={`/livres/livre/${livre.id}`} className="col-3">
                <Button variant="success">
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ListeLivre;
