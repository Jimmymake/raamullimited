import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import bgimg from "../../assets/images2/img6.jpg";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class Testimonial extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;



    const innerClasses = classNames(
      "testimonial-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
      title: "Engage Your Visitors with a beautiful template",
      paragraph: "",
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
      <section {...props}  style={sectionStyle}>
        <div className="container">
          <div className={innerClasses}>

          <div style={{height:"200px"}}></div>
              <div className="hero-content  center-content-mobile reveal-from-top">
                  <h1 className="mt-0 mb-16" style={{color:"white"}}>
                    Transforming Resources Into Opportunities
                  </h1>
              
                </div>
        
             <div style={{height:"100px"}}></div>
            <div className={tilesClasses}>dedefrefrefwrefred</div>
          </div>
        </div>
      </section>
    );
  }
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
