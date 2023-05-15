import React from "react";
import {  useOutletContext } from "react-router-dom"

export default function Photos(){
    const { currentVan } = useOutletContext()
    return(
    <>
    <div id="hostvandetailphoto">
 <img src={currentVan.imageUrl} alt=""/>
 </div>
   
   
    </>
    )
}
