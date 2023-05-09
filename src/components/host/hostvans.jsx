import React from "react";


export default function Hostvans(){

    const[vanList ,setVanList] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVanList(data.vans))
    }, [])

     const vansData = vanList.map(van => {  return (
            <>
           <div id="vanlistdiv">

<div id="vanlistdivimg">
   <img src = {van.imageUrl} alt=""/>
</div>


<div id="vanlistmetadata">
<h3>{van.name}</h3> 
<p>${van.price}/day</p>
</div>

<div id="editvanlist">
   <p>Edit</p>
</div>
           </div>
            </>
        )
    })


    return(
    <>
 <div id="dashboardlistedvans">
    <h3>Your listed Vans  </h3>
   
   {vansData}
   
   
</div>
    </>
)
}
