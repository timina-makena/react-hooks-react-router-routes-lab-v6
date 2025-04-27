import React from 'react';
import NavBar from './NavBar';

function Directors({ directors = [] }) {
  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Directors;