import React from 'react';
import { useCountries } from '../../../hooks/useCountries';
import Country from '../../countries/Country';
import './Main.css';


export default function Main() {
  const { error, continent, setContinent, filterCountries, loading } = useCountries();

  return (
    <>
      <p className='error'>{error}</p>
      <label></label>
      <select value={continent}
        onChange={(e) => {
          setContinent(e.target.value);
        }} >
        <option value='all' >All</option>
        <option value='Oceania' >Oceania</option>
        <option value='Europe' >Europe</option>
        <option value='Africa' >Africa</option>
        <option value='North America' >North America</option>
        <option value='Antarctica' >Antarctica</option>
        <option value='South America' >South America</option>
        <option value='Asia' >Asia</option>
      </select>
      { loading ? <h1 className='loading'>Loading...</h1> : 
        <main>
          {filterCountries().map(country => (
            <Country key={country.id} {...country} />
          ))}
        </main>
      }
    </>
  );
}

//create a dropdown with the value set to continent with onChange hook adding in the setter function
// in useCountries, setCountries original state is set to 'all' so that it will show countries from all continents
// each option will be a different continent with the matching value
// main will render the appropriate countries that fit the category of the continent that was selected