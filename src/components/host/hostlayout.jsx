import React from "react"
import { NavLink, Outlet } from "react-router-dom"


export default function Hostlayout() {
  
    return (
        <>
        

        <div id="hostpage">

<div id = "hostpagelinks">
<NavLink to = "/host" end className = {({isActive}) => isActive ? "hostroutelink-active" : "hostroutelinks"} style={({isActive}) => isActive ? {textDecoration: "underline" } : null}> Dashboard </NavLink> 

<NavLink to = "/host/income" className =  {({isActive}) => isActive ? "hostroutelink-active" : "hostroutelinks"} style={({isActive}) => isActive ? {textDecoration: "underline" } : null}> Income </NavLink>

 <NavLink to = "/host/vans"  className =  {({isActive}) => isActive ? "hostroutelink-active" : "hostroutelinks"} style={({isActive}) => isActive ? {textDecoration: "underline" } : null} > Vans </NavLink>
 
 <NavLink to = "/host/reviews" className =  {({isActive}) => isActive ? "hostroutelink-active" : "hostroutelinks"} style={({isActive}) => isActive ? {textDecoration: "underline" } : null}> Reviews </NavLink>

</div>
<Outlet/>

</div>   
           </>

        
    )
}