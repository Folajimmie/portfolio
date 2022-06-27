import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/Header';
// import Navbar from './component/Header/Navbar/index';
import About from './component/About/index';
// import Experience from './component/Experience/index';
import Skills from './component/Skills/index';
import Portfolio from './component/Portfolio/index';
// import Testimonials from './component/Testimonials/index';
import Footer from './component/Footer/index';
import Contact from './component/Contact/index';
import Sidebar from './component/Sidebar/index';
// import Navbar from './component/Header/Navbar/index';
const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
    <Header />
    <Sidebar />
    <About />
    <Skills />
    {/* <Experience /> */}
    <Portfolio />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
    </Router>
  );
}

export default App;


