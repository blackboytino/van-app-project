import React from "react";

import aboutImg from "../images/image 54.png"
import { Link } from "react-router-dom";

export default function About(){
    return(
        <>
        <div id="aboutpage">

         <div id="aboutimage"> 
         <img src={aboutImg} alt="" id="aboutimg"></img></div>


        <div id="aboutpagecontent">
         <h1 id="abouthead">Don't squeeze in a sedan when you could relax in a van.</h1>
         <p id="aboutp">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)
        <br/><br/>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
         
            </div>


         <div id="downside-about">
            <h1 id="downside-about-head">Your destination is waiting.
            <br/>
            Your van is ready.
            </h1>

            <Link to="/vans" id="explore-van-link" >
            <button id="explore-van-link-div">
            Explore your vans.
            </button>
            </Link>

         </div>

         <div id="aboutpagefooter"> 
         Ⓒ 2022 #VANLIFE
          </div>

         </div>
       
 
      
         </>

    )
}
