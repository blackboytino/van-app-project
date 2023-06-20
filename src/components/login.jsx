import React from "react";
import { Link } from "react-router-dom";

export default function Login(){

    const [formData, setFormdata] = React.useState({ email:"", password: ""})

    function handleChange(e){
        const {name, value} = e.target
        setFormdata(prev => ({
        ...prev, [name]: value
        }))
     }
     

     function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
     }
    
    return(
        <>
        <div id="login-page">
            <h1>Sign into your account </h1>

<div id="formdiv">
        <form onSubmit={handleSubmit} id="login-form">
            <input name="email" type="email" className="login-inputs" id="email-input" placeholder="E-mail" onChange={handleChange} value={formData.email} />
          
            <input name="password" type="password" className="login-inputs" id="password-input" placeholder="Password" onChange={handleChange} value={formData.password}/>
  

<br/>
            <button id="sign-in-btn">Sign in</button>
            </form>
            <p>Don't have an account? <Link to=""> Create one now</Link></p>




            </div>

          

            </div>
   
        </>
    )
}