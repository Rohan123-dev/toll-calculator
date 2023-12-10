// src/utils/api.js
import axios from 'axios';

const API_KEY = 'YOUR_TOLLGURU_API_KEY';

export const calculateToll = async (waypoints) => {
  try {
    const response = await axios.post(
      'https://api.tollguru.com/v1/calc/route',
      {
        locations: waypoints,
        api_key: API_KEY,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error calculating toll:', error);
    throw error;
  }
};
