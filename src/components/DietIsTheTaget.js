import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

export default function DietIsTheTarget(){

    const showRef = useRef(null);
    const[showFavorite,setShowFavorite] = useState()
    const[imageContainer,setImageContainer] = useState([])
    const navigate = useNavigate();
    
    useEffect(()=>{
        let ignore = false;
        Promise.all([
            fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(response=>response.json()),
            fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(response=>response.json()),
            fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(response=>response.json()),
            fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(response=>response.json()),
            fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(response=>response.json()),
          ]).then(response=>{if(!ignore){
                                setImageContainer(response.map(recipe=>{
                                                   return recipe.meals[0]})
                                                 )
                                        }
                            }
                 )
            return ()=>{
                ignore=true;
            }
    },[])

    const recipeMap = imageContainer.map(recipe=>{
        const ingredients_list = []
        for(let i=1; i<21; i++){
            if(recipe['strIngredient' + i]){
                ingredients_list.push(recipe['strIngredient' + i])
            }
        }
        const toRecipeComp=()=>{
        navigate('/selected-recipe', {state:{id:recipe.strMealThumb,name:recipe.strMeal, tags:recipe.strTags, category:recipe.strCategory, area:recipe.strArea, ingredients:ingredients_list, instructions:recipe.strInstructions}});
            }
            
        return <div className="favorites-div"  key={recipe.strMeal}>
                   <a onClick={()=>{toRecipeComp()}}><img src={recipe.strMealThumb} className="highlight-image"></img></a>
                   <a onClick={()=>{toRecipeComp()}}><p className="favorites-text">{recipe.strMeal}</p></a> 
               </div>      
      })
    
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                return setShowFavorite(entry.isIntersecting)} 
        })
        if (showRef.current) {
            observer.observe(showRef.current);
          }
          return () => {    
            if (showRef.current) {
              observer.unobserve(showRef.current);
            }
          };
    },[])

    return(
        <div className="diet_is_the_target">
            <h1 className="big-headers2">Today's best recipes!</h1>
            <div className={showFavorite ? "imageContainer show-favorites":"imageContainer hide-favorites"} ref={showRef}>
                {recipeMap}
            </div>
        </div>
    )
}