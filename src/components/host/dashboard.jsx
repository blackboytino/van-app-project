import React from "react";



export default function Dashboard() {

    const[vanList ,setVanList] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
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


    return (
         <>

       


       

        
        <div id="dashboardfirstdiv">
    <h2>Welcome!</h2>

    <div class="income-details">
  <span class="income-label">Income last 30 days</span>
  <span class="details-label">Details</span>
</div>


    <h1>$2260</h1>
</div>




<div id="dashboardscoreddiv">
<span class="reviewscore-details">
    Review score
    <i class="fa-solid fa-star"></i> 
    5.0/5
</span>
<span class="details-label">Details</span>
       
         </div>


<div id="dashboardlistedvans">
    <h3>Your listed Vans <a href="j">View all</a> </h3>
   
   {vansData}
   
   
</div>



        
        
        </>
    )
}