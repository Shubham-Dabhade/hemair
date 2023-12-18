import React, { useEffect, useState } from "react";
import "./title.css";
import industryData from "../../../industry";

const Title = ({ active }) => {
  const [title, setTitle] = useState("Pharma Cleanroom Leaders");
  const [description, setDescription] = useState(
    "Precision for Pharmaceutical Purity. Hemair sets the standard in pharmaceutical cleanrooms, guaranteeing stringent contamination control and sterile environments for top-quality production."
  );

  useEffect(() => {

    industryData.forEach((data)=>{

        if(data.id === active){
            setTitle(data.title);
            setDescription(data.introduction);
        }
    })
    
  }, [active]);

  return (
    <div className="Industry-Title">
      <div className="inside-industry-title">
        <div className="industry-title-name">{title}</div>
        <div className="industry-title-description">
            {description}
        </div>
      </div>
    </div>
  );
};

export default Title;
