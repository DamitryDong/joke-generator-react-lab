import React from 'react';
import JokeGenerator from '../components/JokeGenerator';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      Welcome to Next JS!
      <JokeGenerator />
    </div>
  );
}

export default Home;
