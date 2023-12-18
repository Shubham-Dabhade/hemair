import React, { useEffect, useState } from "react";
import "./features.css";
import industryData from "../../../industry";

const Features = ({ active }) => {
  const [industry, setIndustry] = useState("pharmaceutical");
  const [features, setFeatures] = useState([
    "Constructing cleanrooms adhering to rigorous pharmaceutical regulatory standards like cGMP for safe drug production.",
    "Ongoing compliance checks and stringent monitoring to sustain adherence to pharmaceutical regulations.",
    "Continuous validation and testing to ensure cleanroom systems operate within required parameters.",
    "Providing tailored guidance to clients, ensuring alignment with evolving pharmaceutical regulations and standards.",
    "Implementing strict protocols for contamination prevention, ensuring sterile environments for pharmaceutical operations.",
    "Thorough documentation of validation processes, providing comprehensive records for regulatory compliance purposes.",
  ]);


  useEffect(()=>{
    industryData.forEach((data)=>{
        if(data.id === active){
            setIndustry(data.industry);
            setFeatures(data.features);
        }
    })
  },[active]);


  return (
    <div className="Features">
      <div className="inside-features">
        <div className="feature-title">Hemair {industry} cleanrooms features</div>
        <ul className="feature-unordered-list-container">
            {features.map((feature)=>{
                return(
                    <li key={feature} className="feature-name"><span>{feature}</span></li>
                )
            })}
        </ul>
      </div>
    </div>
  );
};

export default Features;
