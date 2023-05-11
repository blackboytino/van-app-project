import React from "react"
import { Link, Outlet } from "react-router-dom"
import Navbar from "../navbar"

export default function Hostlayout() {
    return (
        <>
        

        <div id="hostpage">


<div id = "hostpagelinks">
<Link to = "/host" className = "hostroutelinks" id = "hostroutelink-dashboard"> Dashboard </Link> 

<Link to = "/host/income" className = "hostroutelinks" > Income </Link>

 <Link to = "/host/vans" className = "hostroutelinks" > Vans </Link>
 
 <Link to = "/host/reviews" className = "hostroutelinks" > Reviews </Link>

</div>
<Outlet/>

</div>   
           </>

        
    )
}