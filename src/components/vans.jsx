import React from "react";
import "../server"
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../api"





export function loader() {
  return getVans();
  
  }
  


export default function Vans(){
    
    
    const[vanFilter, setVanFilter] = useSearchParams()   
    

    const vans = useLoaderData() 
   


 

    const typeFilter = vanFilter.get("type")

    

    const vanArray = typeFilter ? vans.filter( van => van.type.toLowerCase() === typeFilter)  : vans





    const vansData = vanArray.map((van, index) => {
        return (
            <Link state={{search: `?${vanFilter.toString()}`}}  to={van.id} id="vansdatadivlink">
               
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

    function handleFilterChange(key, value) {
        setVanFilter(prevFilter => {
            if (value === null) {
                prevFilter.delete(key)
            } else {
                prevFilter.set(key, value)
            }
            return prevFilter
        })
    }

   
    
   


   
    return(
        <>
        <div id="vanspage">
        <h1 id="vanspagehead">Explore our van options</h1>

        <div id="vanscategorydiv">
        <button  onClick={() => handleFilterChange("type", "simple")} className = "vanscategorybtn" id="vanscategorybtn-simple" style={typeFilter === "simple" ?{ backgroundColor:"#E17654",  color: "white"} : null}> Simple </button>
        <button onClick={() => handleFilterChange("type", "luxury")} className = "vanscategorybtn" id="vanscategorybtn-luxury" style={typeFilter === "luxury" ?{ backgroundColor: "#161616",  color: "white"} : null}> Luxury </button>
        <button onClick={() => handleFilterChange("type", "rugged")} className = "vanscategorybtn" id="vanscategorybtn-rugged" style={typeFilter === "rugged" ?{ backgroundColor:"#115E59",  color: "white"} : null}> Rugged </button> 
       
       
       { typeFilter &&  <button onClick={() => setVanFilter()} className = "vanscategorybtn-clear" id="clearfilterbtn" >Clear filters <i class="fa-solid fa-trash"></i></button> }
        </div>

        
<div id="vanslist">

{vansData}

</div>





        
       
 
        </div>
        </>
    )
}