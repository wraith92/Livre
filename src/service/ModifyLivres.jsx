import axios from 'axios';

export const modifyLivres = async (livreId, livreModifie) => {
    try {
      const response = await axios.put(`http://localhost:3000/livres/${livreId}`, livreModifie);
      return response.data;
    } catch (error) {
      throw new Error('Error modifying livres:', error);
    }
  };
  