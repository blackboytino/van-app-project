import React from "react";
import "../server"
import { Link, useSearchParams } from "react-router-dom";






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
            <Link to={van.id} id="vansdatadivlink">
               
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
        <button  onClick={() => setVanFilter({type: "simple"})} className = "vanscategorybtn" id="vanscategorybtn-simple" style={typeFilter === "simple" ?{ backgroundColor:"#E17654",  color: "white"} : null}> Simple </button>
        <button onClick={() => setVanFilter({type: "luxury" })} className = "vanscategorybtn" id="vanscategorybtn-luxury" style={typeFilter === "luxury" ?{ backgroundColor: "#161616",  color: "white"} : null}> Luxury </button>
        <button onClick={() => setVanFilter({type: "rugged" })} className = "vanscategorybtn" id="vanscategorybtn-rugged" style={typeFilter === "rugged" ?{ backgroundColor:"#115E59",  color: "white"} : null}> Rugged </button> 
       
       
       { typeFilter &&  <button onClick={() => setVanFilter()} className = "vanscategorybtn-clear" id="clearfilterbtn" >Clear filters <i class="fa-solid fa-trash"></i></button> }
        </div>

        
<div id="vanslist">

{vansData}

</div>





        
       
 
        </div>
        </>
    )
}