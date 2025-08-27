import React from "react";
import "./PartnersMarquee.css";

// Example logos (replace with your own or add more)
import logo1 from "../../assets/images2/4.png";
import logo2 from "../../assets/images2/5.png";
import logo3 from "../../assets/images2/6.png";
import logo4 from "../../assets/images2/7.png";

const logos = [logo1, logo2, logo3,logo4];

export default function PartnersMarquee() {
  return (
    <div className="partners-marquee-wrapper">
      <div className="partners-marquee">
        {logos.concat(logos).map((logo, idx) => (
          <div className="partner-logo" key={idx}>
            <img src={logo} alt={`Partner ${idx + 1}`} width={"500px"}  height={"700px"} />
          </div>
        ))}
      </div>
    </div>
  );
}
