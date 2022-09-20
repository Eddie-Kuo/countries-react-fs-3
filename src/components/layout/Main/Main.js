import React from 'react';
import { useCountries } from '../../../hooks/useCountries';
import Country from '../../countries/Country';
import './Main.css';


export default function Main() {
  const { countries, error } = useCountries();

  return (
    <>
      <p className='error'>{error}</p>
      <main>
        {countries.map(country => (
          <Country key={country.id} {...country} />
        ))}
      </main>
    </>

  );
}
