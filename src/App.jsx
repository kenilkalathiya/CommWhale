import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Event from "./Event/Event";



export default function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}
