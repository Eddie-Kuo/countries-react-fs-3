import React from 'react';
import './Country.css';

export default function Country({ id, name, iso2, iso3, localName, continent }) {
  return (
    <div className='country'>
      <h3>{name}</h3>
      <img src={`https://flagcdn.com/16x12/${iso2}.png`} width="16" height="12" />
    </div>
  );
}

// alt={`${name}`}
// this is where we set up each countries component that will then be passed in main
// in main, each country component needs a unique key as well as the spread operator to fill in all values

// Country.js is where we create the country component
// In main we call useCountries where we first fetch the data from supabase then returns the data of each country as an object in an array of all the countries 
// In main we call the useCountries function and assign it to a variable
// since useCountries is an array, we can map through it and for each object in that array, we create a country component for it that is then displayed inside the main component 