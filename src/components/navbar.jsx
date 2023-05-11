import React from "react";
import { Link, NavLink } from "react-router-dom"

export default function Navbar(){
    return(
        <>
          <nav id="navbar">

        <Link to="/" className="routelinks" id="homelink" >#VANLIFE</Link>
        
       <div id="link-right">
       <NavLink to="/host" className = {({isActive}) => isActive  ? "routelink-active" : "routelinks"} >Host</NavLink>
        <NavLink to="/about" className = {({isActive}) => isActive  ? "routelink-active" : "routelinks"} >About</NavLink>
        <NavLink to="/vans" className = {({isActive}) => isActive  ? "routelink-active" : "routelinks"}>Vans</NavLink>
        </div>
        
        </nav>
        
         </>
    )
}
