import React from "react";
import { Link,  useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../api"



export function loader({params}) {
    return getVans(params.id)
}



export default function VanDetail(){
   
    //const params = useParams()
    //const [van, setVan] = React.useState(null)
    const location = useLocation()
    const van = useLoaderData()
   
const search = location.state?.search || ""
const type =  location.state?.type || "all"

const vanType = type.charAt(0).toUpperCase() + type.slice(1)



   /* React.useEffect( () => {
         fetch(`/api/vans/${params.id}`)
         .then(res => res.json())
         .then(data => setVan(data.vans))
    },[params.id])*/


    
    return(
        <>
        <div id="vandetailpage">
            <p className="back-to-van-link"> <Link id="back-to-van-link" to= {`../${search}`} relative="path"><i class="fa-solid fa-arrow-left"></i>Back to {vanType} vans</Link> </p>



           <div id="vandetaildiv">
           <img id="vandetailimage" alt="" src={van.imageUrl}/>
           <div id= {van.type=== "Luxury" ? "vandetailluxury" :  van.type === "Simple" ? "vandetailsimple" : "vandetailrugged"}>{van.type}</div>
           <h1>{van.name}</h1>
           <h2><b></b>${van.price}/day</h2>
           <p>{van.description}</p>
           <div id="vandetailbuttondiv">
           <button type="submit" id="vandetailbutton">Rent this van </button></div>
           </div> 
           

            


          
       
            </div>
        </>
    )
} 