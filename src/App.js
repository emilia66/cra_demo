// import logo from './logo.svg';
import './App.css';
import React from "react";
import BasicLayout from './components/BasicLayout';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HelloWorld1 from "@/pages/HelloWorld1";
// import ParticlesBgAnimation from "@/pages/ParticlesBgAnimation";


function App() {
  return (
    <BasicLayout></BasicLayout>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HelloWorld1 />} />
    //     <Route exact path="/helloworld1" element={<HelloWorld1 /> } />
    //     <Route exact path="/particles" element={<ParticlesBgAnimation />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
