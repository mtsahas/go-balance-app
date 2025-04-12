import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/subcomponents/Contact.jsx";
import { Services } from "./components/Services.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { Blog } from "./components/subcomponents/Blog.jsx";
import { Resources } from "./components/Resources.jsx";
import { SpecialPrograms } from "./components/SpecialPrograms.jsx";
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
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/specialprograms" element={<SpecialPrograms />} />
          </Routes>
          {/* <Navbar /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
