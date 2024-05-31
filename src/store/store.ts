import axios from 'axios';

import { ACCESS_TOKEN, API_KEY, API_URL } from 'config';


const api = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  params: {
    api_key: API_KEY,
  },
});

export const handleApiError = (error: any) => {
  if (error.response) {
    console.error(`Server responded with status ${error.response.status}: ${error.response.data}`);
    throw new Error(`Server Error: ${error.response.status} - ${error.response.data.status_message}`);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('No response received:', error.request);
    throw new Error('Network Error: No response received from the server');
  } else {
    console.error('Error setting up request:', error.message);
    throw new Error(`Client Error: ${error.message}`);
  }
};
export default api;
