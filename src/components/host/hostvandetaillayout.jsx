import React from "react"
import { Outlet } from "react-router-dom"
import HostVanDetaillayout2 from "./hostvandetaillayout2"




export default function HostVanDetaillayout() {
   

    
    return(
    <>

<div id="hostvandetailpage">
 
       <HostVanDetaillayout2/>


           

           <Outlet/>
        
        



           </div>
        
   

</>
        )
}