import React, { useState } from "react";
import { useEffect } from "react";

export default function DietIsTheTarget(){
    const[test,setTest] = useState([])
    useEffect(()=>{
        Promise.all([
            fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(response=>response.json()),
            fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(response=>response.json()),
            fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(response=>response.json()),
          ]).then(response=>setTest(response.map(recipe=>{
            return recipe.meals[0].idMeal
          })))
    },[])

   
    return(
        <div className="diet_is_the_target">
            <h1 className="big-headers2">Today's best recipes</h1>
        </div>
    )
}