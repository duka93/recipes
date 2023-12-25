import React from "react";
import background from ".././Images/Screenshot_4.png";



export default function MiddlePart(){


    return(
        <div className="middle-upper">
            <img src={background} className='middle-background'></img>
            
            <div className="statistics">

                <section>
                <div className="singular-statistic image-1"> 
                    <i className="fa-solid fa-clipboard-list favicon-styling fa-3x"></i>
                    <h2>VARIETY</h2>
                    <p className="box-paragraph">Explore from hundreds of  recipes tailored to the everyone's tastes. We have it all!</p>
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
            </div>
        </div>
        
    )
}
