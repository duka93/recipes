import React from 'react'
import "react-slideshow-image/dist/styles.css"
import {Fade, Zoom, Slide} from "react-slideshow-image";
import img from "./Images/flat-lay-brazilian-food-meal-with-copy-space.jpg"
import img2 from "./Images/top-view-chocolate-stuff_23-2148019483.jpg"
import img3 from "./Images/concentrated-man-baker-standing-bakery-near-bread_171337-16129.jpg";
import FadeIn from "react-fade-in";
import {useState} from "react";
import x from "./Images/1544641784.png"


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

const divStyle={
    height:"1000px",
    backgroundSize:"cover",
    position:"relative"
}

const spanStyle={
     fontSize:"20px",
     background:"#efefef",
     color:"#000000",
}


export default function ImageSlider(props) {

  const[toggleInput,setToggleInput] = useState(true)
  const[showX,setX] = useState("none")

  function inputEnlarge(){
        setToggleInput(false)
        setX("block")
        document.body.style.overflow = "hidden"   
  }
  

  return (
    <div>
        <FadeIn delay={80} transitionDuration={1000}>
        <Zoom autoplay={toggleInput} scale={0.7}>
            {slideImages.map((image,index)=>(
                <div key={index}>
                      <div style={{...divStyle,backgroundImage:`url(${image.url})`}}>
                         <span className={`${image.text_position} welcome_page_text`}>{image.caption}</span>
                         <h1 className='logo-text'>Grandma's Kitchen</h1>
                         <i class="fa-solid fa-magnifying-glass mglass fa-2xl" style={{display:showX}}></i>
                         <input  className={toggleInput ? `input ${image.text_position}`: `overlay input ${image.text_position} `}  name={props.name} value={props.query} onChange={(e)=>props.setQuery(e.target.value)} placeholder='Find your favorite recipe' onClick={inputEnlarge}></input>
                      </div>                                                                                                                                                                                                                                                                                                        
                      <a href=''><img className='x-button' style={{display:showX}} src={x} onClick={()=>setX("none")}></img></a>   {/*part which gets rid of x when the input is clicked*/}      
                </div>
                
            ))}
        </Zoom>
        </FadeIn>
    </div>
  )
}
