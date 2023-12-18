import React from "react";
import "./services.css";
import ConstructionIcon from "@mui/icons-material/Construction";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MasksIcon from '@mui/icons-material/Masks';
import FlashOffIcon from '@mui/icons-material/FlashOff';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import EngineeringIcon from '@mui/icons-material/Engineering';

const Services = ({where}) => {
  return (
    <div className="Services">
      <div className="service-header" style={{textAlign: where==="home"?"left":"center"}}>Our Services</div>
      <div className="inside-service-container">
        <div className="service-container-1">
          <div className="inside-service-container-cards">
            <div className="top-service-container">
              <div className="service-heading">
                <ConstructionIcon className="service-icon" />
                <div className="service-title">Custom Installations</div>
              </div>
              <div className="service-description">
                Customized cleanroom solutions for biotechnology, electronics,
                and pharmaceutical sectors.
              </div>
            </div>
            <div className="bottom-service-container">
              <div className="service-heading">
                <PrecisionManufacturingIcon className="service-icon" />
                <div className="service-title">Precision Control</div>
              </div>
              <div className="service-description">
              Precise control of particulate levels and environmental factors crucial for sterile operations.
              </div>
            </div>
          </div>
        </div>
        <div className="service-container-2">
          <div className="inside-service-container-cards">
            <div className="top-service-container">
              <div className="service-heading">
                <MasksIcon className="service-icon" />
                <div className="service-title">Contamination Management</div>
              </div>
              <div className="service-description">
              Addressing challenges in eliminating sub-micron airborne contamination by following strict procedures.
              </div>
            </div>
            <div className="bottom-service-container">
              <div className="service-heading">
                <FlashOffIcon className="service-icon" />
                <div className="service-title">Static-Free Environments</div>
              </div>
              <div className="service-description">
                Customized cleanroom solutions for biotechnology, electronics,
                and pharmaceutical sectors.
              </div>
            </div>
          </div>
        </div>
        <div className="service-container-3">
          <div className="inside-service-container-cards">
            <div className="top-service-container">
              <div className="service-heading">
                <DeviceHubIcon className="service-icon" />
                <div className="service-title">Advanced Technology</div>
              </div>
              <div className="service-description">
              Implementing IoT and smart tech for real-time monitoring and adaptive control, ensuring cutting-edge cleanroom operations.
              </div>
            </div>
            <div className="bottom-service-container">
              <div className="service-heading">
                <EngineeringIcon className="service-icon" />
                <div className="service-title">Smart Integration</div>
              </div>
              <div className="service-description">
              Tailored strategies ensuring seamless adherence to industry standards and regulatory requirements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
