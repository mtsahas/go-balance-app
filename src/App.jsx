import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Services } from "./components/Services.jsx";
import { IsThisYou } from "./components/IsThisYou.jsx";
import { Blog } from "./components/Blog.jsx";
import { Resources } from "./components/Resources.jsx";
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
            <Route path="/services" element={<Services />} />
            <Route path="/isthisyou" element={<IsThisYou />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
