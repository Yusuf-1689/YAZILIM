import HomeStyle from './Home.style';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
const Home = () => {
  const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const [query, setQuery] = useState('egg');
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState('');

  const APP_ID = '4e9f05eb';
  const APP_KEY = '9b904d703fa0d46a88ce1ac63f29f498';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(recipes);
  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
    </div>
  );
};

export default Home;