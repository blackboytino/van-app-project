import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "./components/about";
import Home from "./components/home";

import Vans from "./components/vans";
import VanDetail from "./components/vandetail";
import Layout from "./components/Layout";

import Dashboard from "./components/host/dashboard";
import Income from "./components/host/income";
import Reviews from "./components/host/reviews";

import Hostlayout from "./components/host/hostlayout";
import Hostvans from "./components/host/hostvans";



export default function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />


       <Route path="host" element={<Hostlayout />}>
          <Route index element={<Dashboard />}/>
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<Hostvans />} />
          <Route path="reviews" element={<Reviews/>} />
      </Route>

      </Route>

      
      </Routes>
     </BrowserRouter>
    )
  }
  