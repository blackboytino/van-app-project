import React from "react";
import "../server"
import { Link } from "react-router-dom";






export default function Vans(){
    
    const baseUrl = "https://tino-vanlife-project.netlify.app/api";

    const[vans ,setVans] = React.useState([])


    React.useEffect(() => {
        fetch(`${baseUrl}api/vans`)
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])



  

    


   

    const vansData = vans.map(van => {
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
            <button className="vanscategorybtn">Simple </button>
            <button className="vanscategorybtn" >Luxury</button>
            <button className="vanscategorybtn">Rugged </button>
            <button  className="vanscategorybtn" id="clearfilterbtn">Clear filters </button>
        </div>

        
<div id="vanslist">

{vansData}

</div>





        
       
 
        </div>
        </>
    )
}