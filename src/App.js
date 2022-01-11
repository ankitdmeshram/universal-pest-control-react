import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import About from './Pages/About';
import BirdsControl from './Pages/BirdsControl';
import Contact from './Pages/Contact';
import FoggingServices from './Pages/FoggingServices';
import GeneralPestControl from './Pages/GeneralPestControl';

import Home from './Pages/Home';
import Sanitization from './Pages/Sanitization';
import Services from './Pages/Services';
import TermiteControl from './Pages/TermiteControl';

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
          <Route  path="/termite-control" element={<TermiteControl />} />
          <Route  path="/general-pest-control" element={<GeneralPestControl />} />
          <Route  path="/fogging-services-mosquitoes" element={<FoggingServices />} />
          <Route  path="/sanitization" element={<Sanitization />} />
          <Route  path="/birds-control" element={<BirdsControl />} />
          
          </Routes>

      <Footer />

      </Router>


    </>
  )
}

export default App
