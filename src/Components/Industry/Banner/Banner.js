import React, { useEffect, useState } from "react";
import "./banner.css";

const Banner = ({ active }) => {
  const [activeImg, setActiveImg] = useState("pharmaceutical");

  useEffect(() => {
    if(active===1){
        setActiveImg("pharmaceutical")
    }
    if(active===2){
        setActiveImg("biotechnology")
    }
    if(active===3){
        setActiveImg("electronics")
    }
  }, [active]);

  return (
    <div className="Banner-Industry">
      <div className="inside-banner-industry">
        <img
          src={require(`../../../images/Industry/${activeImg}.jpg`)}
          alt=""
          className="industry-banner-img"
        />
      </div>
    </div>
  );
};

export default Banner;
