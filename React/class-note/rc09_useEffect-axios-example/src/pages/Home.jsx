

import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = 'https://axios-example-cw.herokuapp.com/api/tutorials';

  const getTutorials = async () =>{
   const { data } =  await axios.get(url);
   setTutorials(data);
  };

  useEffect(() => {
    getTutorials();
  
  
  }, [])
  console.log(tutorials);

  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log(error);
    }
   
  };



const deleteTutorial = async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.log(error);
  }
  getTutorials();
};




  return (
    <>
      <AddTutorial addTutorial={addTutorial}/>
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
