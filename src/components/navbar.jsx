import React from "react";
import { Link, NavLink } from "react-router-dom"

export default function Navbar(){
    return(
        <>
          <nav id="navbar">

        <Link to="/" className="routelinks" id="homelink" >#VANLIFE</Link>
        
       <div id="link-right">
       <NavLink to="/host" className = {({isActive}) => isActive  ? "routelink-active" : "routelinks"} style={({isActive}) => isActive ? {textDecoration: "underline" } : null}>Host</NavLink>
       <NavLink to="/about" className = {({isActive}) => isActive  ? "routelink-active" : "routelinks"} style={({isActive}) => isActive ? {textDecoration: "underline" } : null}>About</NavLink>
       <NavLink to="/vans" className = {({isActive}) => isActive  ? "routelink-active" : "routelinks"} style={({isActive}) => isActive ? {textDecoration: "underline" } : null}>Vans</NavLink>
       <NavLink to="/login" className = {({isActive}) => isActive  ? "routelink-active" : "routelinks"} style={({isActive}) => isActive ? {color: "#FF8C38" } : null}><i class="fa-solid fa-user "></i></NavLink>
        </div>
        
        </nav>
        
         </>
    )
}
