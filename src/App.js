import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import About from './Pages/About';
import Contact from './Pages/Contact';

import Home from './Pages/Home';
import Services from './Pages/Services';

const App = () => {
  return (
    <>
    

      <Router>
      <Nav />

        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/services" element={<Services />} />
          </Routes>

      <Footer />

      </Router>


    </>
  )
}

export default App
