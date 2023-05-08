import React from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";


export default function VanDetail(){
   
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect( () => {
         fetch(`/api/vans/${params.id}`)
         .then(res => res.json())
         .then(data => setVan(data.vans))
    },[params.id])

    
    return(
        <>
        <div id="vandetailpage">
            <p className="back-to-van-link"><i class="fa-solid fa-arrow-left"></i> <Link id="back-to-van-link" to="/vans">Back to all vans</Link> </p>


{ van ?
           <div id="vandetaildiv">
           <img id="vandetailimage" alt="" src={van.imageUrl}/>
           <div id= {van.type=== "Luxury" ? "vandetailluxury" :  van.type === "Simple" ? "vandetailsimple" : "vandetailrugged"}>{van.type}</div>
           <h1>{van.name}</h1>
           <h2><b></b>${van.price}/day</h2>
           <p>{van.description}</p>
           <div id="vandetailbuttondiv">
           <button type="submit" id="vandetailbutton">Rent this van </button></div>
           </div> 
           : <h2> Loading...</h2>
}
            


           <div id="vandetailsfooter"> 
         Ⓒ 2022 #VANLIFE
          </div>

          
       
            </div>
        </>
    )
}