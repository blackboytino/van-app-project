import React from "react";
import {Link } from "react-router-dom"

export default function Navbar(){
    return(
        <>
          <nav id="navbar">

        <Link to="/" className="routelinks" id="homelink">#VANLIFE</Link>
        
       <div id="link-right">
       <Link to="/host" className="routelinks" >Host</Link>
        <Link to="/about" className="routelinks" >About</Link>
        <Link to="/vans" className="routelinks" >Vans</Link>
        </div>
        
        </nav>
        
         </>
    )
}
