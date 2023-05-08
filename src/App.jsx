import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Vans from "./components/vans";
import VanDetail from "./components/vandetail";
import Layout from "./components/Layout";

import Dashboard from "./components/host/hostdashboard";
import Income from "./components/host/income";
import Reviews from "./components/host/reviews";



export default function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />


          <Route path="/host" element={<Dashboard />}>
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews/>} />

          </Route>

        
      

        </Route>
      </Routes>
     </BrowserRouter>
    )
  }
  