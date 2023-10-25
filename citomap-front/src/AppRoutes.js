import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/Home/HomePage";
import Portafolio from "./pages/Portafolio/Portafolio";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/whoweare" element={<WhoWeAre />}></Route>
      <Route path="/portafolio" element={<Portafolio />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
