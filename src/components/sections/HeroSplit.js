import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class HeroSplit extends React.Component {
  state = {
    videoModalActive: false,
  };

  openVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  };

  closeVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "hero section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      // hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    const backgroundImage = require("./../../assets/images2/img6.jpg");
    const sectionStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      zIndex: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
    };
    return (
      <section {...props} className={outerClasses} style={sectionStyle}>
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item">
                <div className="hero-content split-item-content center-content-mobile reveal-from-top">
                  <h1 className="mt-0 mb-16">
                    Transforming Resources Into Opportunities
                  </h1>
                  <p className="mt-0 mb-32">
                    We are a leading mining and trading company in Kenya
                    specializing in gypsum, limestone, iron ore, and other
                    industrial minerals. With over 7000 acres of proven
                    reserves, we are committed to delivering high-quality
                    mineral products to both local and international markets.
                  </p>
                  <ButtonGroup>
                    <Button tag="a" color="primary" href="" wideMobile>
                      Get Started
                    </Button>
                  </ButtonGroup>
                </div>
                <div className="hero-figure split-item-image split-item-image-fill illustration-element-01 reveal-from-bottom">
                  <a href="#0" aria-controls="video-modal">
                    <Image
                      src={require("./../../assets/images2/LIME.png")}
                      alt="Hero"
                      width={528}
                      height={396}
                    />
                  </a>
                </div>
                <Modal
                  id="video-modal"
                  show={this.state.videoModalActive}
                  handleClose={this.closeVideoModal}
                  video="https://player.vimeo.com/video/174002812"
                  videoTag="iframe"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;
