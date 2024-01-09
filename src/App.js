import React from 'react';
import ImageSlider from './components/ImageSlider';
import MiddlePart from "./components/MiddlePart";
import DietIsTheTarget from './components/DietIsTheTaget';
import Footer from './components/Footer';

function App(){
  return (
    <div>
      <ImageSlider/>
      <MiddlePart/>
      <DietIsTheTarget/>
      <Footer></Footer>
    </div>
  );
}

export default App;
