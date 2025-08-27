import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class News extends React.Component {
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

    const outerClasses = classNames(
      "news section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "news-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
      title: "Our Core Servises",
      // paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consequat.'
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader
              data={sectionHeader}
              className="center-content reveal-from-bottom"
            />
            <div className={tilesClasses}>
              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require("./../../assets/images2/img1.jpg")}
                      alt="News 01"
                      width={344}
                      height={194}
                    />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="">Surface Mining</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        We use advanced mining methods to extract gypsum and
                        other minerals safely and efficiently.
                      </p>
                    </div>
                    <div className="news-item-more text-xs mb-8">
                      <a href="">Read more</a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require("./../../assets/images2/img4.jpg")}
                      alt="News 02"
                      width={344}
                      height={194}
                    />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="">Mineral Trading</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Supplying gypsum rock lumps, limestone, and iron ore to
                        both local industries and global markets.
                      </p>
                    </div>
                    <div className="news-item-more text-xs mb-8">
                      <a href="">Read more</a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="400"
              >
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require("./../../assets/images2/img8.jpg")}
                      alt="News 03"
                      width={344}
                      height={194}
                    />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="">Future Production</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Plans to establish gypsum powder and wallboard
                        production lines for the construction sector
                      </p>
                    </div>
                    <div className="news-item-more text-xs mb-8">
                      <a href="">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

News.propTypes = propTypes;
News.defaultProps = defaultProps;

export default News;
