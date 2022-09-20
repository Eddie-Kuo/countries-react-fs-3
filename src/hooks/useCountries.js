import { useEffect, useState } from 'react';
import { getCountries } from '../services/countries';

// the useEffect hook takes in 2 parameters, first is a function and second is an empty array
export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [continent, setContinent] = useState('all');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (e) {
        setError(e.message);
      }
    }
    fetchData();
  }, []);

  const filterCountries = () => {
    if (continent === 'all') return countries;
    return countries.filter((country) => country.continent === continent);
  };

  return { countries, error, setContinent, filterCountries, continent };
}