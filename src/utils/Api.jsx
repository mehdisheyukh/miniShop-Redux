// api.js
import axios from 'axios';

export const fetchProductsApi = async () => {
  try {
    const result = await axios.get('https://fakestoreapi.com/products');
    return result.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
