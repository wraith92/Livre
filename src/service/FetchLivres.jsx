import axios from 'axios';

export const fetchLivres = async () => {
  try {
    const response = await axios.get('http://localhost:3000/livres');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching livres:', error);
  }
};