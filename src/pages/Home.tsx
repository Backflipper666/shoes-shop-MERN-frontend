import { useEffect, useState } from 'react';
import ShoesList from '../components/ShoesList/ShoesList';

const Home = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      const response = await fetch('/api/shoes');

      const json = await response.json();

      setShoes(json);
      console.log(json);
    };
    fetchShoes();
  }, []);
  return (
    <div>
      <ShoesList />
    </div>
  );
};

export default Home;
