import React, { useCallback, useEffect, useRef } from "react";
import "./home.css";
// import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Particle1 from "../../Components/Particle1/Particle1";
import Particle2 from "../../Components/Particle2/Particle2";
import Particle3 from "../../Components/Particle3/Particle3";
import Particle4 from "../../Components/Particle4/Particle4";
import Intro from "../../Components/Home/Intro/Intro";
import Navbar from "../../Components/Navbar/Navbar";
import YourComponent from "../../Components/Flip/YourComponent";
import Banner from "../../Components/Home/Banner/Banner";
import Info from "../../Components/Home/Info/Info";
import AboutUs from "../../Components/Home/AboutUs/AboutUs";
import Product from "../../Components/Home/Product/Product";
import Clients from "../../Components/Home/Clients/Clients";
import Services from "../../Components/Services/Services";



const Home = () => {

  

  return (
    // // <Particle1/>
    // // <Particle2/>
    // <Particle3/>
    // <Particle4/>
    <div className="Home">
    <Navbar/>
      <Banner/>
      <Info/>
      <AboutUs/>
      <Product/>
      <Services where="home"/>
      <Clients/>
    </div>
  );
};

export default Home;
