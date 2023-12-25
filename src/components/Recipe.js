import React from "react";
import {useLocation} from 'react-router-dom';


function Recipe(){
    const location = useLocation();
    return(
        <div>
        <div>{location.state.name}</div>
        <img src={location.state.id}></img>
        </div>
        
    )
}

export default Recipe;