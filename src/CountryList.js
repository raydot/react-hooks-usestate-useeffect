import React, { useState, useEffect } from 'react';
import { getItem } from './generalMethods';
//import axios from 'axios';

export const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // This has been refactored into generalMethods.js
    getItem('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        setCountries(res);
        setLoad(true);
      })
      .catch((err) => {
        setError(err);
        setLoad(true);
      });
  }, []);

  if (load) {
    return (
      <div>
        <h2>Random Country List:</h2>
        <ul>
          {error ? (
            <li>{error.message}</li>
          ) : (
            countries.map((country, index) => (
              <li key={index}>{country.name}</li>
            ))
          )}
        </ul>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
