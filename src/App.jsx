import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"

import About from "./components/about";
import Home from "./components/home";

import Vans , {loader as vansLoader} from "./components/vans";
import VanDetail, {loader as vanDetailLoader} from "./components/vandetail";
import Layout from "./components/Layout";

import Dashboard from "./components/host/dashboard";
import Income from "./components/host/income";
import Reviews from "./components/host/reviews";

import Hostlayout from "./components/host/hostlayout";
import Hostvans, {loader as hostvansloader} from "./components/host/hostvans";

import Pricing from "./components/host/pricing";
import Photos from "./components/host/photos";
import HostVanDetail, {loader as hostvandetailloader}from "./components/host/hostvandetail";
import Hostvaninfo from "./components/host/hostvaninfo";
import Error404 from "./Error404";
import Error from "./components/error";
import Login from "./components/login";
import { requireAuth } from "./utils";





const vanRouter = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<Layout />}>
      <Route 
      index 
      element={<Home />} />

      <Route 
      path="login" 
      element={<Login/>}/>

      <Route 
      path="about" 
      element={<About />} />

      <Route 
      path="vans" 
      element={<Vans />} 
      loader={vansLoader} 
      errorElement ={<Error/>}/>

      <Route 
      path="vans/:id" 
      element={<VanDetail />} 
      loader={vanDetailLoader}/>

      <Route 
      path ="*" 
      element={<Error404/>}/>

      <Route 
      path="host"
      element={<Hostlayout />}
     >
        <Route 
        index 
        element={<Dashboard />} 
        loader={async ()=> {
           await requireAuth()
           return null
         }}/>

        <Route 
        path="income" 
        element={<Income />} 
        loader={async ()=> {
          return null
         }} />

        <Route 
        path="reviews" 
        element={<Reviews />} 
        loader={async ()=> {
          return null
         }}/>

        <Route 
        path="vans" 
        element={<Hostvans />} 
        loader={hostvansloader} />

        <Route 
        path="vans/:id" 
        element={<HostVanDetail />} 
        loader={hostvandetailloader} >

          <Route 
          index 
          element={<Hostvaninfo />} 
          lloader={async ()=> {
            return null
           }}/>

          <Route 
          path="pricing" 
          element={< Pricing/>} 
          loader={async ()=> {
            return null
           }}/>

          <Route 
          path="photos" 
          element={< Photos />} 
          loader={async ()=> {
             return null
           }}/>

        </Route>

      </Route>

    </Route> 

))




export default function App() {
    return (
      <RouterProvider router={vanRouter} />
    )
  }
  