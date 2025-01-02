'use client';

import { useState, useEffect } from 'react';
import getJokes from '../api/jokeApi';

export default function JokeGenerator() {
  const [joke, setJoke] = useState(null); // State to store the joke

  useEffect(() => {
    getJokes()
      .then((jokes) => {
        if (jokes && jokes.length > 0) {
          setJoke(jokes[0]); // Set the first joke if the array isn't empty
        }
      })
      .catch((error) => console.error('Error fetching jokes:', error));
  }, []); // Run once on component mount

  if (!joke) {
    return <div>Loading...</div>; // Show a loading state while fetching
  }

  return (
    <div className="card">
      <div className="card-header">Joke</div>
      <div className="card-body">
        <h5 className="Jokes-Question">{joke.Joke}</h5>
        <h5 className="Jokes-Answer">{joke.Answer}</h5>
        <button type="button" className="btn btn-primary">
          UseLess Button
        </button>
      </div>
    </div>
  );
}
