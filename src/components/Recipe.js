import React from "react";
import {useLocation} from 'react-router-dom';


function Recipe(){
    const location = useLocation();
    const ingredients = location.state.ingredients.map(ingredient=>{
        return <li className="ingredient-style" key={ingredient}><span className="ingredient-text">{ingredient}</span></li>
    })
    const directions = location.state.instructions.split(". ").map(direction=>{
        if(direction.length > 3)
        return <li className="ingredient-style" key={direction}><span className="ingredient-text">{direction}</span></li>
    })

    return(
        <div>
            <h1 className='logo-text2'>Grandma's Kitchen</h1>  
        
        <div className="single-recipe"> 

        <div className="upper-div">
            <div>
                <h1 className="upper-div-header">{location.state.name}</h1>
                <p style={{marginTop:"3rem"}}><span style={{fontWeight:"bold", color:"brown"}}>Category:</span> {location.state.category}</p>
                <p style={{marginTop:"1rem"}}><span style={{fontWeight:"bold", color:"brown"}}>Origin:</span> {location.state.area}</p>
                <p style={{marginTop:"1rem"}}><span style={{fontWeight:"bold", color:"brown"}}>Tags:</span> {location.state.tags ? location.state.tags:"None"}</p>
            </div>
            <img src={location.state.id} className="upper-div-image"></img>
        </div>

        <div className="directions-ingredients">
            <h2 className="ingredients-header">Ingredients</h2>
            <ul className="ingredients">{ingredients}</ul>
            <h2 className="ingredients-header">Directions</h2>
            <ul className="directions">{directions}</ul>
        </div>

        </div>
        </div> 
    )
}

export default Recipe;