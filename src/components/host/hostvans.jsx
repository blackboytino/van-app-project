import React from "react";
import { Link } from "react-router-dom";


export default function Hostvans(){

    const[vanList ,setVanList] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVanList(data.vans))
    }, [])

     const vansData = vanList.map(van => {  return (
            <>

           <div id="vanlistdiv" key={van.id}>

          
                

        <div id="vanlistdivimg">
        <img src = {van.imageUrl} alt=""/>
        </div>


<div id="vanlistmetadata">
<h3>{van.name}</h3> 
<p>${van.price}/day</p>
</div>

<div id="editvanlist">
<Link
            to={van.id}
            key={van.id}
            id="editvanlist"
            >
   <p>View</p>
   </Link>


</div>


           </div>
          
            </>
        )
    })


    return(
    <>
 <div id="dashboardlistedvans">
    <h3>Your listed Vans  </h3>
   
   {vanList.length > 0 ? vansData : 
   
   <>
  
   <h1 id="loadh1"> Loading...</h1>
   </>}
   
   
</div>
    </>
)
}
