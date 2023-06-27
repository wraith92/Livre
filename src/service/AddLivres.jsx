
import axios from 'axios';

export const ajouterLivre = async (nouveauLivre) => {
    try {
      const response = await axios.post('http://localhost:3000/livres', nouveauLivre);
      console.log(response.data);
    } catch (error) {
      console.error('Error adding livre:', error);
    }
  };