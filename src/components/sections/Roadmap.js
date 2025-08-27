import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Timeline from "../elements/Timeline";
import TimelineItem from "../elements/TimelineItem";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class Roadmap extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "roadmap section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "roadmap-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const sectionHeader = {
      title: "Product roadmap",
      paragraph:
        "",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>
              <TimelineItem title="November 2018">
                Company founded in Nairobi, Kenya, with a focus on international
                trade and resource development.
              </TimelineItem>
              <TimelineItem title="December 2019">
                Secured partnerships with regional suppliers and expanded into
                gypsum and mineral
              </TimelineItem>
              <TimelineItem title="January 2020">
                Launched export operations to East African countries,
                strengthening cross-border
              </TimelineItem>
              <TimelineItem title="February 2020">
                Signed strategic agreements with local and international
                distributors for wider market reach.
              </TimelineItem>
              <TimelineItem title="February 2020">
                Signed strategic agreements with local and international
                distributors for wider market reach.
              </TimelineItem>
              <TimelineItem title="March 2020">
                Driving growth through innovation, sustainability, and global
                market expansion.
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;
