import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader(){
    await requireAuth()
    return getHostVans()
}

export default function Hostvans(){
   // const[vanList ,setVanList] = React.useState([])

    const vanList = useLoaderData()


   /* React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVanList(data.vans))
    }, [])*/

     const vansData = vanList.map(van => {  return (
            <>
<Link
            to={van.id}
            key={van.id}
            id="hostvanslinkdiv"
            >
           <div id="vanlistdiv2" key={van.id}>

          
                

        <div id="vanlistdivimg">
        <img src = {van.imageUrl} alt=""/> 
        </div>


<div id="vanlistmetadata">
<h3>{van.name}</h3> 
<p>${van.price}/day</p>
</div>

<div id="editvanlist">

   <p>Click to View</p>
   


</div>


           </div>
          </Link>
            </>
        )
    })


    return(
    <>
 
 <div id="dashboardlistedvans2">
 <h3>Your listed Vans  </h3>

    <div id="hostvanslistdiv">
   
   {vansData}
   </div>
   
</div>
    </>
)
}
