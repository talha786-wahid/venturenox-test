import { useState, useEffect } from 'react';
import axios from 'axios';

const REACT_APP_API_KEY = 'https://61791a83aa7f3400174047a6.mockapi.io/v1';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${REACT_APP_API_KEY}/${url}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetchData;
