import React from "react";
import {  useOutletContext } from "react-router-dom"

export default function Pricing(){
    const { currentVan } = useOutletContext()
    return(
    <>

 <p>${currentVan.price}/day</p>
    

    </>
    )
}
