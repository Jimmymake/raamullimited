import React from "react";
import logo from "../../../assets/images2/logo.png";

import bgimg from "../../../assets/images2/img10.jpg";

import FeaturesSplit from "../../sections/FeaturesSplit";
import Clients from "../../../components/sections/Clients";
import Team from "../../../components/sections/Team";
import classNames from "classnames";
import ButtonGroup from "../../elements/ButtonGroup";
import Button from "../../elements/Button";
import Image from "../../elements/Image";
import Modal from "../../elements/Modal";
import { useState } from "react";
import SectionHeader from "../../sections/partials/SectionHeader";

export default function AboutUs() {
  const [videoModalActive, setVideoModalActive] = useState(false);
  const outerClasses = classNames("hero section");
  const innerClasses = classNames("hero-inner section-inner");
  const splitClasses = classNames("split-wrap");
  const openVideoModal = (e) => {
    e.preventDefault();
    setVideoModalActive(true);
  };
  const closeVideoModal = (e) => {
    e && e.preventDefault();
    setVideoModalActive(false);
  };

  const sectionStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    zIndex: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
  };

  return (
    <div>
      <section
        className="about-us-section section center-content"
        style={sectionStyle}
      >
        <div className="container-sm">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item">
                 
                <div className="hero-content  center-content-mobile reveal-from-top">
                  <h1 className="mt-0 mb-16" style={{color:"white"}}>
                    What we do
                  </h1>
                  {/* <p className="mt-0 mb-32 " style={{color:"lightblue"}}>
                    We are a leading mining and trading company in Kenya
                    specializing in gypsum, limestone, iron ore, and other
                    industrial minerals. With over 7000 acres of proven
                    reserves, we are committed to delivering high-quality
                    mineral products to both local and international markets.
                  </p> */}
                </div>

                <Modal
                  id="video-modal"
                  show={videoModalActive}
                  handleClose={closeVideoModal}
                  video="https://player.vimeo.com/video/174002812"
                  videoTag="iframe"
                />
              </div>
            </div>
          </div>

          {/* <Team /> */}
          {/* <div className="about-us-header">
            <h1 className="mt-0 mb-16">About Us</h1>
            <p className="m-0 mb-32">
              We are Raamul Limited, a passionate team dedicated to delivering
              innovative solutions and exceptional service. Our mission is to
              empower businesses and individuals through technology, creativity,
              and commitment to excellence.
            </p>
          </div> */}
          {/* <div className="about-us-content">
            <h2 className="mb-16">Our Story</h2>
            <p className="mb-32">
              Founded in 2020, Raamul Limited has grown from a small startup into
              a trusted partner for clients worldwide. Our journey is driven by a
              relentless pursuit of quality and a desire to make a positive impact
              in every project we undertake.
            </p>
            <h2 className="mb-16">Meet the Team</h2>
        
          </div> */}
        </div>
      </section>
      <FeaturesSplit invertMobile imageFill topDivider />
    </div>
  );
}
//       .team-member { max-width: 180px; text-align: center; }
//       .team-member img { width: 100%; border-radius: 50%; margin-bottom: 12px; }
//       @media (max-width: 600px) {
//         .team-grid { flex-direction: column; align-items: center; }
// /* About Us section styles */
// .about-us-section {
//   position: relative;
//   padding: 60px 0;
//   overflow: hidden;
//   z-index: 1;
// }
// .about-us-section::before {
//   content: '';
//   position: absolute;
//   top: 0;    .team-member { max-width: 180px; text-align: center; }
//       .team-member img { width: 100%; border-radius: 50%; margin-bottom: 12px; }
//       @media (max-width: 600px) {
//         .team-grid { flex-direction: column; align-items: center; }
// /* About Us section styles */
// .about-us-section {
//   position: relative;
//   padding: 60px 0;
//   overflow: hidden;
//   z-index: 1;
// }
// .about-us-section::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: url('../../../assets/images2/img1.jpg') center/cover no-repeat;
//   z-index: -1;
//   opacity: 0.25;
//   clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
// }
// .about-us-header { text-align: center; }
// .about-us-content { margin-top: 40px; }
// .team-grid { display: flex; flex-wrap: wrap; gap: 32px; justify-content: center; }
// .team-member { max-width: 180px; text-align: center; }
// .team-member img { width: 100%; border-radius: 50%; margin-bottom: 12px; }
// @media (max-width: 600px) {
//   .team-grid { flex-direction: column; align-items: center; }
// }
//       @media (max-width: 600px) {
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: url('../../../assets/images2/img1.jpg') center/cover no-repeat;
//   z-index: -1;
//   opacity: 0.25;
//   clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
// }
// .about-us-header { text-align: center; }
// .about-us-content { margin-top: 40px; }
// .team-grid { display: flex; flex-wrap: wrap; gap: 32px; justify-content: center; }
// .team-member { max-width: 180px; text-align: center; }
// .team-member img { width: 100%; border-radius: 50%; margin-bottom: 12px; }
// @media (max-width: 600px) {
//   .team-grid { flex-direction: column; align-items: center; }
// }
//       @media (max-width: 600px) {
