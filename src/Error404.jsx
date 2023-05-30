import React from "react";
import { Link } from "react-router-dom";

export default function Error404(){
    return(
       <>
       <div id="errordiv">
<h1>Sorry, the page you were looking for was not found.</h1>

<Link to="/" id="errorlink">
    
        <button id="errorbtn">
Return to home
       </button>
       
                </Link>
        </div>
        </>
    )
}