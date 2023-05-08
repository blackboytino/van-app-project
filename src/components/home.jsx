import React from "react";
import Footer from "./footer"
import { Link } from "react-router-dom";


export default function Home(){
    return(
        <>
        <div id="homepage">
         
         <div id="homepagecontent">
        <h1 id="homepageh1">You got the travel plans, we got the travel vans.</h1>

        <h3 id="homepageh3">Add adventure to your life by joining the #vanlife movement. Rent the perfect van for your road trip.</h3>
       
        <Link to="/vans" id="#homepagevanslink">
        <button className="homepagebtn">
             Find your vans
        </button>
        </Link>
 </div>

          
          
        <Footer/>
        </div>
         </>
    )
}
