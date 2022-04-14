import React from "react";
import About from "./About";
import './App.css';
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Myskills from "./Myskills";

import Education from "./Education";

function App() {
  return (
    <div className="App">
        <Home/>
        <About/>
        <Myskills/>
        <Education/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
