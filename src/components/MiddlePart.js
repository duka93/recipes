import React, { useEffect, useState, useRef } from "react";
import background from ".././Images/Screenshot_4.png";
import cook_image from ".././Images/JAMESON_APRON_C_CANVAS_BROWN_01-removebg-preview.png"


export default function MiddlePart(){
   
        const[count, setCount] = useState(0);
        const[count2,setCount2] = useState(50)
        const[count3,setCount3] = useState(50)
        const countRef = useRef(null);
        const targetCount = 450;
        const targetCount2 = 1600; 
        const targetCount3 = 2500;
      
        useEffect(() => {
          const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              let interval = setInterval(() => {
                setCount((prevCount) => {
                  if (prevCount < targetCount) {
                    return prevCount + 15;
                  } else {
                    clearInterval(interval);
                    return prevCount;
                  }
                })
                setCount2((prevCount) => {
                    if (prevCount < targetCount2) {
                      return prevCount + 50;
                    } else {
                      clearInterval(interval);
                      return prevCount;
                    }
                  });
                setCount3((prevCount) => {
                    if (prevCount < targetCount3) {
                      return prevCount + 80;
                    } else {
                      clearInterval(interval);
                      return prevCount;
                    }
                  });
              }, 50); 
            }
          }, { threshold: 1 });
      
          if (countRef.current) {
            observer.observe(countRef.current);
          }
      
          return () => {
            if (countRef.current) {
              observer.unobserve(countRef.current);
            }
          };
        }, []);
      
 
    return(
   
        <div className="middle-upper">
            <img src={background} className='middle-background'></img>
            
            <div className="statistics">

                <section>
                <div className="singular-statistic image-1"> 
                    <i className="fa-solid fa-clipboard-list favicon-styling fa-3x"></i>
                    <h2>VARIETY</h2>
                    <p className="box-paragraph">Explore from hundreds of  recipes tailored to the everyone's tastes. Don't worry, We have it all!</p>
                </div>
                </section>
     
                <section>
                <div className="singular-statistic image-2" >
                    <i className="fa-solid fa-fire-burner favicon-styling fa-3x"></i>
                    <h2>IGNITE</h2>
                    <p className="box-paragraph">Light up your taste buds like never before! Grandma's kitchen flavor is a guarantee. We got your back</p>
                </div>
                </section>
                
                <section>
                <div className="singular-statistic image-3">
                    <i className="fa-solid fa-utensils favicon-styling fa-3x"></i>
                    <h2>CLASS</h2>
                    <p className="box-paragraph">We have the proven solutions, you only need 20 minutes of your time to get the best experience</p>
                </div>
                </section>

                <div className="about-us">
                    <h1 className="big-headers">About us</h1>
                    <h2 className="medium-headers">We started in 2023 with a simple goal: "To take your cooking to the next level"</h2>
                    <p className="about-us-text">We wanted to make our dream your reality and help you with your cooking goals in a most efficient way possible. </p>
                    <div className="about-us-text" style={{display:"flex"}} ref={countRef}>
                        <div className="flex-stats">
                            <p className="stats-number">{count}+</p>
                            <h3 className="stats-text">Recipes published</h3>
                        </div>
                        <div className="flex-stats">
                            <p className="stats-number" >{count2}+</p>
                            <h3 className="stats-text">Satisfied users</h3>
                        </div>
                        <div className="flex-stats">
                            <p className="stats-number" >{count3}+</p>
                            <h3 className="stats-text">Positive reviews</h3>
                        </div>   
                    </div>
                    <p className="about-us-text">Interested to learn more? Click below </p>
                    <button className="about-us-button">Learn more</button>  
                    <img src={cook_image} className="cook-image"></img>
                </div>
            </div>
        </div>
        
        
    )
}
