import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Main from "./components/Main";
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';




function App() {
  return (
    <>
      <Nav/>
      <Main />
      <Menu/>
      <Testimonial/>
      <AboutUs/>
      <Footer/>
    </>
  );
}
export default App;