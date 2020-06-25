import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        setCountries(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
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
