import React from 'react';
import { useCountries } from '../../../hooks/useCountries';
import './Main.css';


export default function Main() {
  const { countries, error } = useCountries();
  console.log(countries);
  return (
    <>
      <p className='error'>{error}</p>
      <main>
        Main
      </main>
    </>

  );
}
