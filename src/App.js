import React from 'react';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import background from "./Images/result.png"


function App(){

  const[recipeList,setRecipeList] = useState([])
  const[query,setQuery] = useState("")
  const navigate = useNavigate();

 
  useEffect(()=>{
      let sortedRecepies=[]
      fetch(query==="" ? "https://www.themealdb.com/api/json/v1/1/random.php":"https://www.themealdb.com/api/json/v1/1/search.php?f="+query[0]).then(response=>response.json()).then(response=>{
        
        if(response.meals && query){
          for(let i=0; i<response.meals.length; i++){
              if(response.meals[i].strMeal.toLowerCase().includes(query)){
                sortedRecepies.push(response.meals[i])
              }
          }
          setRecipeList(sortedRecepies)
        }
        else{
          setRecipeList([])
        }
      
        })},[query])

  const recipeMap = recipeList.map(recipe=>{
    const toRecipeComp=()=>{
      document.body.style.overflow = "visible"  
      navigate('/selected-recipe',{state:{id:recipe.strMealThumb,name:recipe.strMeal}});
        }
    return <li><a onClick={()=>{toRecipeComp()}} key={recipe.idMeal}>{recipe.strMeal}</a></li>
          
  })
  return (
    <div>
      {<ImageSlider name="query" value={query} setQuery={setQuery}></ImageSlider>}
      <ul className='food-list'>{recipeMap}</ul>
      <img src={background} className='background'></img>
    </div>
  );
}


export default App;
