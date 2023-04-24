import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header.js"
import Home from "./Components/Home.js";
import Pizza from "./Components/Pizza.js";
import Help from "./Components/Help.js";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<Pizza />} />
        <Route path="help" element={<Help />} />
      </Routes>
    </div>
  );
};
export default App;
