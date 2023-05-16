// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld1 from "@/pages/HelloWorld1";
import HelloWorld2 from "@/pages/HelloWorld2";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWorld1 />} />
        <Route exact path="/helloworld1" element={<HelloWorld1 /> } />
        <Route exact path="/helloworld2" element={<HelloWorld2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
