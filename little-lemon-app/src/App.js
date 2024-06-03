import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';




function App() {
  return (
    <>
      <Nav/>
      <Header />
      <Main />
      <Menu/>
      <Testimonial/>
      <AboutUs/>
      <Footer/>
    </>
  );
}
export default App;