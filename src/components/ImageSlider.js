import React from 'react'
import "react-slideshow-image/dist/styles.css"
import {Fade, Zoom, Slide} from "react-slideshow-image";
import img from ".././Images/flat-lay-brazilian-food-meal-with-copy-space.jpg"
import img2 from ".././Images/top-view-chocolate-stuff_23-2148019483.jpg"
import img3 from ".././Images/concentrated-man-baker-standing-bakery-near-bread_171337-16129.jpg";
import FadeIn from "react-fade-in";
import {useState, useEffect} from "react";
import x from ".././Images/1544641784.png"
import { useNavigate } from 'react-router-dom';

const slideImages = [
    {
        url:img,
        caption:"Best tastes are found here",
        text_position:"text-position1"
    },
    {
        url:img2,
        caption:"Enjoy the moment",
        text_position:"text-position2"
    },
    {
        url:img3,
        caption:"Suited for you",
        text_position:"text-position3",
    }
]

const divStyle = {
    height:"1050px",
    backgroundSize:"cover",
}

const spanStyle = {
     fontSize:"20px",
     background:"#efefef",
     color:"#000000",
}

export default function ImageSlider(props) {
    const[recipeList,setRecipeList] = useState([])
    const[query,setQuery] = useState("")
    const[toggleInput,setToggleInput] = useState(true)
    const[showX,setX] = useState("none")
    const navigate = useNavigate();
  
    useEffect(()=>{
        let ignore = false;
        let sortedRecepies=[]
        fetch(query==="" ? "https://www.themealdb.com/api/json/v1/1/random.php":"https://www.themealdb.com/api/json/v1/1/search.php?f="+query[0]).then(response=>response.json()).then(response=>{
        
          if(response.meals && query){
            for(let i=0; i<response.meals.length; i++){
                if(response.meals[i].strMeal.toLowerCase().includes(query)){
                  sortedRecepies.push(response.meals[i])
                }
            }
            if(!ignore){
              setRecipeList(sortedRecepies)
            }
          }
          else{
            setRecipeList([])
          }
          
          })
          return ()=>{
            ignore = true;
          }
        },[query])
  
    const recipeMap = recipeList.map(recipe=>{
      const ingredients_list = []
        for(let i=1;i<21;i++){
            if(recipe['strIngredient'+i]){
                ingredients_list.push(recipe['strIngredient'+i])
            }
        }
      const toRecipeComp=()=>{
        document.body.style.overflow = "visible"  
        navigate('/selected-recipe',{state:{id:recipe.strMealThumb,name:recipe.strMeal,tags:recipe.strTags, category:recipe.strCategory, area:recipe.strArea, ingredients:ingredients_list, instructions:recipe.strInstructions}});
          }
      return <li key={recipe.idMeal} className='search-list'><a onClick={()=>{toRecipeComp()}} key={recipe.idMeal}>{recipe.strMeal}</a></li>
            
    })

  function inputEnlarge(){
        setToggleInput(false)
        setX("block")
        document.body.style.overflow = "hidden"
        window.scrollTo(0, 0)   
  }

  return (
    <div>
        <FadeIn delay={80} transitionDuration={1000}>  
        <Zoom autoplay={toggleInput && true} scale={0.7}> 
            {slideImages.map((image, index)=>(
                <div key={index}>

                      <div style={toggleInput ? {...divStyle, backgroundImage:`url(${image.url})`} : {...divStyle, backgroundColor:"#ccc"}}>
                         <h1 className='logo-text' id='home-page'>Grandma's Kitchen</h1>

                         <span className={`${image.text_position} welcome_page_text`}> {toggleInput && image.caption}
                         <div className={!toggleInput ? 'searchdiv' : ""}>
                            <i className="fa-solid fa-magnifying-glass mglass fa" style={{display:showX}}></i>
                            <input  className={toggleInput ? `input`: `overlay`}  name={props.name} value={props.query} onChange={(e)=>setQuery(e.target.value)} placeholder='Find your favorite recipe' onClick={inputEnlarge}></input>
                            <ul className='food-list'>{recipeMap}</ul>
                         </div>
                         </span>

                      </div>
                                                                                                                                                                                                                                                                                                                              
                      <a href=''><img className='x-button' style={{display:showX}} src={x} onClick={()=>setX("none")}></img></a>   {/*part which gets rid of x when the input is clicked*/}      
                     
                </div>
                
            ))}
        </Zoom>
        </FadeIn>
    </div>
  )
}





