import React from "react"
import {   Link, NavLink, Outlet, useParams } from "react-router-dom"





export default function HostVanDetail() {
    const params = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect( () => {
         fetch(`/api/vans/${params.id}`)
         .then(res => res.json())
         .then(data => setCurrentVan(data.vans))
    },[params.id])

    
    return (
    <>
<div id="hostvandetailpage">

    <p className="host-back-to-van-link"><i class="fa-solid fa-arrow-left" id="host-back-to-van-link"></i> <Link id="host-back-to-van-link2"  to=".." relative="path">Back to all vans</Link> </p>

    { currentVan ?

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
}
>
Details
</NavLink>
<NavLink
to={`/host/vans/${currentVan.id}/pricing`}
className={({ isActive }) =>
  isActive ? "hostvandetailroutelink-active" : "hostvandetailroutelinks"
}
>
Pricing
</NavLink>
<NavLink
to={`/host/vans/${currentVan.id}/photos`}
className={({ isActive }) =>
  isActive ? "hostvandetailroutelink-active" : "hostvandetailroutelinks"
}
>
Photos
</NavLink>
</div>

<Outlet context={ {currentVan} }/>
       
</div>
  : <h2> Loading...</h2>
}
</div>
            
</>
    )
}  