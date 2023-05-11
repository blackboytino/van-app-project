import React from "react"
import { NavLink, Outlet } from "react-router-dom"


export default function Hostlayout() {
  
    return (
        <>
        

        <div id="hostpage">


<div id = "hostpagelinks">
<NavLink to = "/host" end className = {({isActive}) => isActive ? "hostroutelink-active" : "hostroutelinks"} > Dashboard </NavLink> 

<NavLink to = "/host/income" className =  {({isActive}) => isActive ? "hostroutelink-active" : "hostroutelinks"} > Income </NavLink>

 <NavLink to = "/host/vans"  className =  {({isActive}) => isActive ? "hostroutelink-active" : "hostroutelinks"}  > Vans </NavLink>
 
 <NavLink to = "/host/reviews" className =  {({isActive}) => isActive ? "hostroutelink-active" : "hostroutelinks"} > Reviews </NavLink>

</div>
<Outlet/>

</div>   
           </>

        
    )
}