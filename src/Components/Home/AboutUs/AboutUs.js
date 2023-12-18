import React from 'react';
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className="Home-AboutUs">
        <div className="inside-home-aboutus-container">
            <div className="home-aboutus-col1">
                <div className="home-aboutus-col1-heading">About Us</div>
                <div className="home-aboutus-col1-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus a ex perspiciatis culpa ab, aliquam eveniet ut natus unde quasi earum quidem fugiat itaque asperiores voluptatum, nemo soluta enim provident eaque porro velit recusandae. Assumenda harum eos dolores consequuntur minima at labore veritatis ex fugiat perspiciatis? Dolores quibusdam odio illum?</div>
                <div className="home-aboutus-col1-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus, repellendus molestiae excepturi odit sint, optio nostrum maiores a doloremque doloribus modi libero.</div>
            </div>
            <div className="home-aboutus-col2">
                <img src={require("../../../images/Home/AboutUs/H-pattern.png")} alt="" className="home-aboutus-col2-img" />
            </div>
        </div>
    </div>
  )
}

export default AboutUs