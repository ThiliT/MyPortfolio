import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Project" element={<Project />}/>
    </Routes>
    </>
  );
}

export default App;
