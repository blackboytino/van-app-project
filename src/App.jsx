import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"

import About from "./components/about";
import Home from "./components/home";

import Vans , {loader as vansLoader} from "./components/vans";
import VanDetail from "./components/vandetail";
import Layout from "./components/Layout";

import Dashboard from "./components/host/dashboard";
import Income from "./components/host/income";
import Reviews from "./components/host/reviews";

import Hostlayout from "./components/host/hostlayout";
import Hostvans from "./components/host/hostvans";

import Pricing from "./components/host/pricing";
import Photos from "./components/host/photos";
import HostVanDetail from "./components/host/hostvandetail";
import Hostvaninfo from "./components/host/hostvaninfo";
import Error404 from "./Error404";



const vanRouter = createBrowserRouter(createRoutesFromElements(
  
    <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="vans" element={<Vans />} />
  <Route path="vans/:id" element={<VanDetail />} />


  <Route path="host" element={<Hostlayout />}>
    <Route index element={<Dashboard />}/>
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
    <Route path="vans" element={<Hostvans />}  />

    <Route path="vans/:id" element={<HostVanDetail />} >
      <Route index  element={<Hostvaninfo />} />
      <Route path="pricing" element={< Pricing/>}/>
      <Route path="photos" element={< Photos />}/>
    </Route>
  </Route>
  <Route path ="*" element={<Error404/>}/>
</Route>

))




export default function App() {
    return (
      <RouterProvider router={vanRouter} />
    )
  }
  