import React from "react";


export default function Footer(){
    return(
        <footer>
             <h1 className='logo-text3'>Grandma's Kitchen</h1>
             <div className="footer-items">
                <a className="footer-item" href="index.html"><i className="fa-solid fa-utensils"></i> Home</a>
                <a className="footer-item" href="https://www.themealdb.com/" target="blank"><i className="fa-solid fa-utensils"></i> Api</a>
                <a className="footer-item" href="mailto:dusantime@gmail.com"><i className="fa-solid fa-utensils"></i> Contact</a>
             </div>
             <ul className="social-media">
                <li id="fb"><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook-square fa-1x"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                <li><a href="mailto:dusantime@gmail.com" target="_blank"><i className="fa fa-envelope"></i></a></li>
            </ul>
            <p id="policy">Privacy Policy | © 2024 Grandma's kitchen Design by Dusan Mijailovic</p>  
        </footer>
    )
}