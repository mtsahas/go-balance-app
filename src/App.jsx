import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
