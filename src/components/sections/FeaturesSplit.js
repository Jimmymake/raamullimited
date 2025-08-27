import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

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
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'What we do',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                   Mining & Trading of Industrial Minerals
                  </h3>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                 We specialize in surface/stripping mining and trading of high-quality gypsum rock lumps, limestone ore, iron ore, and bauxite for both local and export markets.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images2/img2.jpg')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                   Processing & Value Addition
                  </h3>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                   We are investing in modern technology to establish gypsum powder and wallboard production lines, ensuring consistent, sustainable, and high-standard industrial mineral products.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images2/img3.jpg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
               Sustainable Growth & Customer Commitment
                  </h3>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                   We focus on safety, environmental responsibility, and innovation—delivering reliable mineral solutions that support the housing, cement, and construction industries across East Africa and beyond.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images2/img11.jpg')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;