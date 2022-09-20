import React from 'react';
import { getCountries } from '../../../services/client';
import './Main.css';

export default function Main() {
  const country = getCountries();
  console.log(country);
  return (
    <main>
      Main
    </main>
  );
}
