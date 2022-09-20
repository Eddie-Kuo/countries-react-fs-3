import React from 'react';
import { useCountries } from '../../../hooks/useCountries';
import './Main.css';


export default function Main() {
  const { countries } = useCountries();
  console.log(countries);
  return (
    <main>
      Main
    </main>
  );
}
