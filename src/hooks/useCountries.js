import { useEffect, useState } from 'react';
import { getCountries } from '../services/countries';

// the useEffect hook takes in 2 parameters, first is a function and second is an empty array
export function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCountries();
      setCountries(data);
    }
    fetchData();
  }, []);
  return { countries };
}