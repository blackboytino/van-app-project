import React from "react"
import {   Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils";

export async function loader({params}){
  await requireAuth()
return getHostVans(params.id)
}



export default function HostVanDetail() {
   
    const currentVan = useLoaderData()
  
    return (
    <>
<div id="hostvandetailpage">
 
    <p className="host-back-to-van-link"><i class="fa-solid fa-arrow-left" id="host-back-to-van-link"></i> <Link id="host-back-to-van-link2"  to=".." relative="path">Back to all vans</Link> </p>

           <div id="hostvandetaildiv">

            <div id="hostvandetailfirstrow">

           <img id="hostvandetailimage" alt="" src={currentVan.imageUrl}/>

<div >
           <div id= {currentVan.type=== "Luxury" ? "hostvandetailluxury" :  currentVan.type === "Simple" ? "hostvandetailsimple" : "hostvandetailrugged"}>{currentVan.type}</div>
          
           <h1>{currentVan.name}</h1>
           <h2><b></b>${currentVan.price}/day</h2>
           </div>

           </div>
         
           <div id="hostvandetails-link-right">


<NavLink
to={`/host/vans/${currentVan.id}`}
end
className={({ isActive }) =>
  isActive ? "hostvandetailroutelink-active" : "hostvandetailroutelinks"
} style={({isActive}) => isActive ? {textDecoration: "underline" } : null}
> 
Details
</NavLink>
<NavLink
to="pricing"
className={({ isActive }) =>
  isActive ? "hostvandetailroutelink-active" : "hostvandetailroutelinks"
} style={({isActive}) => isActive ? {textDecoration: "underline" } : null}
>
Pricing
</NavLink>
<NavLink
to="photos"
className={({ isActive }) =>
  isActive ? "hostvandetailroutelink-active" : "hostvandetailroutelinks"
} style={({isActive}) => isActive ? {textDecoration: "underline" } : null}
>
Photos
</NavLink>
</div>

<Outlet context={ {currentVan} }/>
       
</div>

</div>
            
</>
    )
}  