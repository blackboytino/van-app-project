import React from "react";
import "../server"
import { Link, NavLink, useSearchParams } from "react-router-dom";






export default function Vans(){
    
    const[vanFilter, setVanFilter] = useSearchParams()
    const typeFilter = vanFilter.get("type")

    


    const[vans ,setVans] = React.useState([])


    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])


    const vanArray = typeFilter ? vans.filter( van => van.type.toLowerCase() === typeFilter)  : vans



   

    const vansData = vanArray.map(van => {
        return (
            <Link to={`/vans/${van.id}`} id="vansdatadivlink">
               
            <div id="vansdatadiv">
                <img src={van.imageUrl} alt="" id="vansimage"/>
            <div>

            <div id="vandata-nameprice">
            <h2>{van.name}</h2>
            <p>${van.price}<span>/day</span></p>
            </div>

            </div>
            <div id = {van.type=== "Luxury" ? "luxurydiv" :  van.type === "Simple" ? "simplediv" : "ruggeddiv"} >
                {van.type}
                </div>
   
        </div>
     
        </Link>

        )
    })

   
    return(
        <>
        <div id="vanspage">
        <h1 id="vanspagehead">Explore our van options</h1>

        <div id="vanscategorydiv">
        <NavLink to="?type=simple" className = "vanscategorybtn" id="vanscategorybtn-simple"> Simple </NavLink>
        <NavLink to="?type=luxury" className = "vanscategorybtn" id="vanscategorybtn-luxury"> Luxury </NavLink>
        <NavLink to="?type=rugged" className = "vanscategorybtn" id="vanscategorybtn-rugged"> Rugged </NavLink> 
        <NavLink to="/vans" className="vanscategorybtn" id="clearfilterbtn">Clear filters </NavLink>
        </div>

        
<div id="vanslist">

{vansData}

</div>





        
       
 
        </div>
        </>
    )
}