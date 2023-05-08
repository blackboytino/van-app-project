import React from "react";

import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <>
   
        <div id="hostpage">


        <div id="hostpagelinks" >
        <Link to="/host" className="hostroutelinks" id="hostroutelink-dashboard">Dashboard</Link>
        <Link to="/host/income" className="hostroutelinks" >Income</Link>
        <Link to="/vans" className="hostroutelinks" >Vans</Link>
        <Link to="/host/reviews" className="hostroutelinks" >Reviews</Link>
        </div>

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
   
   
   
</div>




        </div>
        </>
    )
}