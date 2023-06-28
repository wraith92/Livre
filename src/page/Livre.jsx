import React, { useEffect, useState } from 'react';
import { fetchLivres } from '../service/FetchLivres';
import ListeLivre from '../component/ListeLivres';
import FormulaireModification from '../component/ModifyLivres';
import { Modal, Button, Spinner, Container } from 'react-bootstrap';
import Searchbar from '../component/searchbar';

const Livres = () => {
  const [livres, setLivres] = useState([]);
  const [livreIdSelectionne, setLivreIdSelectionne] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLivres();
        setLivres(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching livres:', error);
      }
    };

    const timeout = setTimeout(() => {
      fetchData();
    }, 1500);

    return () => clearTimeout(timeout);
  }, [livreIdSelectionne]); // Add livreIdSelectionne as a dependency

  const handleModifierClick = (livreId) => {
    setLivreIdSelectionne(livreId);
  };

  const handleCloseModal = () => {
    setLivreIdSelectionne(null);
    // Refresh data by setting isLoading to true
    setIsLoading(true);
  };

  const handleDelete = () => {
    window.location.reload(); 
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredLivres = livres.filter((livre) =>
    livre.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Container>
        <h1 className="text-center">Liste des livres</h1>

        <Searchbar handleSearchChange={handleSearchChange} searchTerm={searchTerm} />
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <ListeLivre
            livres={filteredLivres}
            handleModifierClick={handleModifierClick}
            handleDelete={handleDelete}
          />
        )}
        <Modal show={livreIdSelectionne !== null} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Modifier le livre</Modal.Title>
          </Modal.Header>
          <Modal.Body>{livreIdSelectionne && <FormulaireModification livreId={livreIdSelectionne} />}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Livres;
