import axios from 'axios';

export const InfoLivres = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/livres/livre/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching livre:', error);
    throw error;
  }
};