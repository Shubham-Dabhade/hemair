import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import BiotechIcon from '@mui/icons-material/Biotech';
import CableIcon from '@mui/icons-material/Cable';

const Nav = ({handleNavActive,activeN}) => {

    const indicator = useRef();
    const [activeNav,setActiveNav] = useState(activeN || 1);


    useEffect(()=>{
      setActiveNav(activeN)
      if(window.innerWidth>768){
        indicator.current.style.transform = `translateX(${((activeN-1)*100)}%)`;
    }
    if(window.innerWidth<768 && window.innerWidth>550){
        indicator.current.style.transform = `translateX(${((activeN-1)*35)}%)`;

    }
    if(window.innerWidth<550 && window.innerWidth>500){
        indicator.current.style.transform = `translateX(${((activeN-1)*29)}%)`;
    }
    if(window.innerWidth<500 && window.innerWidth>380){
        indicator.current.style.transform = `translateX(${((activeN-1)*35)}%)`;
    }
    if(window.innerWidth<380 && window.innerWidth>350){
        indicator.current.style.transform = `translateX(${((activeN-1)*27)}%)`;
    }
    if(window.innerWidth<350 && window.innerWidth>335){
        indicator.current.style.transform = `translateX(${((activeN-1)*30)}%)`;
    }
    if(window.innerWidth<335 && window.innerWidth>321){
        indicator.current.style.transform = `translateX(${((activeN-1)*35)}%)`;
    }
    if(window.innerWidth<321 && window.innerWidth>200){
        indicator.current.style.transform = `translateX(${((activeN-1)*33.3)}%)`;
    }
    setActiveNav(activeN)
    handleNavActive(activeN)
    },[activeN])

    const handleNavAnchor=(e,num)=>{
      if(e){
        e.preventDefault();
      }
      console.log('called');
        if(window.innerWidth>768){
            indicator.current.style.transform = `translateX(${((num-1)*100)}%)`;
        }
        if(window.innerWidth<768 && window.innerWidth>550){
            indicator.current.style.transform = `translateX(${((num-1)*35)}%)`;

        }
        if(window.innerWidth<550 && window.innerWidth>500){
            indicator.current.style.transform = `translateX(${((num-1)*29)}%)`;
        }
        if(window.innerWidth<500 && window.innerWidth>380){
            indicator.current.style.transform = `translateX(${((num-1)*35)}%)`;
        }
        if(window.innerWidth<380 && window.innerWidth>350){
            indicator.current.style.transform = `translateX(${((num-1)*27)}%)`;
        }
        if(window.innerWidth<350 && window.innerWidth>335){
            indicator.current.style.transform = `translateX(${((num-1)*30)}%)`;
        }
        if(window.innerWidth<335 && window.innerWidth>321){
            indicator.current.style.transform = `translateX(${((num-1)*35)}%)`;
        }
        if(window.innerWidth<321 && window.innerWidth>200){
            indicator.current.style.transform = `translateX(${((num-1)*33.3)}%)`;
        }
        setActiveNav(num)
        handleNavActive(num)
    }

  return (
    <div className="Nav">
      <div className="inside-nav-container">
      <div className={`nav-indicator ${activeNav===1?"nav-indi-1":""} ${activeNav===3?"nav-indi-3":""}`} ref={indicator}></div>
        <div className={`nav-link-1 ${activeNav===1?"active-nav":""}`}>
          <div className="inside-nav-link-1">
            <a href="#" className="nav-link-anchor" style={{color:activeNav===1?"white":"black"}} onClick={(e)=>{handleNavAnchor(e,1)}}>
              <LocalPharmacyIcon className="nav-link-logo" />
              <div className={`nav-link-text ${activeNav===1?"active-text":""}`}>Pharmaceutical Industry</div>
            </a>
          </div>
        </div>
        <div className={`nav-link-2 ${activeNav===2?"active-nav":""}`}>
          <div className="inside-nav-link-2">
            <a href="#" className="nav-link-anchor" style={{color:activeNav===2?"white":"black"}} onClick={(e)=>{handleNavAnchor(e,2)}}>
              <BiotechIcon className="nav-link-logo" />
              <div className={`nav-link-text ${activeNav===2?"active-text":""}`}>Biotechnology Industry</div>
            </a>
          </div>
        </div>
        <div className={`nav-link-3 ${activeNav===3?"active-nav":""}`}>
          <div className="inside-nav-link-3">
            <a href="#" className="nav-link-anchor" style={{color:activeNav===3?"white":"black"}} onClick={(e)=>{handleNavAnchor(e,3)}}>
              <CableIcon className="nav-link-logo" />
              <div className={`nav-link-text ${activeNav===3?"active-text":""}`}>Electronics Industry</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
