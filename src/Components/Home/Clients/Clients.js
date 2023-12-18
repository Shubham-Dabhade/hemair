import React from "react";
import "./clients.css";
import Marquee from "react-fast-marquee";

const Clients = () => {
    
  return (
    <div className="Clients">
      <div className="inside-clients-container">
      <div className="clients-container-heading">
        Our Clients
      </div>
        <div className="logos">
          <Marquee pauseOnHover={true} speed={100}  className="logos-slide">
            <img src={require("../../../images/Home/Clients/clients-1.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-2.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-3.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-4.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-5.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-6.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-7.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-8.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-9.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-10.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-11.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-12.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-13.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-14.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-15.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-16.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-17.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-18.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-19.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-20.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-21.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-22.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-23.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-24.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-25.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-26.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-27.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-28.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-29.jpg")} alt="" className="client-logo-img" />
            <img src={require("../../../images/Home/Clients/clients-30.jpg")} alt="" className="client-logo-img" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Clients;
