import React, { useEffect, useState } from 'react';
import "./industry.css";
import Navbar from '../../Components/Navbar/Navbar';
import Nav from '../../Components/Industry/Nav/Nav';
import Banner from '../../Components/Industry/Banner/Banner';
import Title from '../../Components/Industry/Title/Title';
import Services from '../../Components/Services/Services';
import Features from '../../Components/Industry/Features/Features';
import { useLocation } from "react-router-dom";

const Industry = () => {
  const location = useLocation();
  const pathLoc = location.pathname.slice(12, );

  const [activeNav,setActiveNav] = useState();

  useEffect(()=>{
    if(pathLoc === "pharmaceutical"){
      setActiveNav(1)
    }
    if(pathLoc === "biotechnology"){
      setActiveNav(2)
    }
    if(pathLoc === "electronics"){
      setActiveNav(3)
    }
  },[pathLoc])

  const handleNavActive = (num)=>{
    setActiveNav(num)
  }

    
  return (
    <div className="Industry">
        <Navbar ac={1}/>
        <Nav activeN={activeNav} handleNavActive={handleNavActive}/>
        <Banner active = {activeNav}/>
        <Title active = {activeNav}/>
        <Services/>
        <Features active = {activeNav}/>
    </div>
  )
}

export default Industry;