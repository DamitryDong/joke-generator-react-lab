import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getJokes = async () => {
  try {
    const response = await fetch(`${endpoint}/Jokes.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data ? Object.values(data) : [];
  } catch (error) {
    console.error('Error fetching jokes:', error);
    throw error; // Re-throw the error to handle it in the caller
  }
};

export default getJokes;
