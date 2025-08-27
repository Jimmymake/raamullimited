import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/LogoInvert";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";
import { Link } from 'react-router-dom';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

class Footer extends React.Component {
  render() {
    const { className, topOuterDivider, topDivider, ...props } = this.props;

    const classes = classNames(
      "site-footer invert-color",
      topOuterDivider && "has-top-divider",
      className
    );

    return (
      <footer {...props} className={classes}>
        <div className="container">
          <div
            className={classNames(
              "site-footer-inner",
              topDivider && "has-top-divider"
            )}
          >
            <div className="footer-top text-xxs">
              <div className="footer-blocks">
                <div className="footer-block">
                  <Logo className="mb-16" />
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">Company</div>
                  <ul className="list-reset mb-0">
                    <li>
                      <p>Support</p>
                    </li>
                    <li>
                      <p>FAG'S</p>
                    </li>
                  </ul>
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">quick links</div>
                  <ul className="list-reset mb-0">
                    <li>
                        <Link to="/">Home</Link>
                      {/* <a href="">Home</a> */}
                    </li>
                    <li>
                        <Link to="/about/">About us</Link>
                      {/* <a href="">About Us</a> */}
                    </li>
                    <li>
                        <Link to="/conductus/">Contact us</Link>
                      {/* <a href="">Contact Us</a> */}
                    </li>
                    <li>
                        <Link to="/signup/">Sign Up</Link>
                      {/* <a href="">Sign Up</a> */}
                    </li>
                  </ul>
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">Adress</div>
                  <ul className="list-reset mb-0">
                    <li>
                      <p>
                        Wuyi Plaza, Block A, Suite A6, Galana Road, Kilimani,
                        Nairobi
                      </p>
                    </li>
                    <li>
                      <p>P O Box 10971 – 00100, Nairobi, Kenya.</p>
                    </li>
                    <li>
                      <p>+254739567904</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom space-between center-content-mobile text-xxs">
              {/* <FooterNav /> */}
              <div className="footer-copyright">
                &copy; 2025 Raamul Limited Company, all rights reserved
              </div>
              <FooterSocial />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
