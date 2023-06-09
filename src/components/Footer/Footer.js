import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footers bg-dark text-white pt-3 pb-5">
        <div className="container pt-5">
          <div className="row footer-sec">
            <div className="col-xs-12 col-sm-6 col-md-4 footers-one">
              <div className="footers-logo ">
                <h1 className="footers-logo2 f-head">FASHION</h1>
              </div>
              <div className="footers-info pt-3 f-body">
                <p>Complete your style with awesome<br/> clothes from us.</p>
              </div>
              <div className="social-icons  pt-3">
                <a href="https://www.facebook.com/" className="px-2">
                  <i
                    id="social-fb"
                    className="fa fa-facebook-square fa-2x social  textsym"
                  ></i>
                </a>
                <a href="https://twitter.com/"  className="px-2">
                  <i
                    id="social-tw"
                    className="fa fa-twitter-square fa-2x social textsym"
                  ></i>
                </a>
                <a href="https://plus.google.com/" className="px-2">
                  <i
                    id="social-gp"
                    className="fa fa-linkedin-square fa-2x social textsym"
                  ></i>
                </a>
                <a href="/" className="px-2">
                  <i
                    id="social-em"
                    className="fa fa-instagram fa-2x social textsym"
                  ></i>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 footers-two"></div>
            <div className="col-xs-12 col-sm-6 col-md-2 footers-three ">
              <h5 className="f-body2">Company</h5>
              <ul className="list-unstyled">
                <li className="pt-2">
                  <a href="/" className="f-body">About</a>
                </li>
                <li className="pt-2">
                  <a href="/" className="f-body">Contact us</a>
                </li>
                <li className="pt-2">
                  <a href="/" className="f-body">Support</a>
                </li>
                <li className="pt-2">
                  <a href="/" className="f-body">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 footers-four">
              <h5 className="f-body2">Quick Link</h5>
              <ul className="list-unstyled">
                <li className="pt-2">
                  <a href="/" className="f-body">Share Location</a>
                </li>
                <li className="pt-2">
                  <a href="/" className="f-body">Orders Tracking</a>
                </li>
                <li className="pt-2">
                  <a href="/" className="f-body">Size Guide</a>
                </li>
                <li className="pt-2">
                  <a href="/" className="f-body">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 footers-five">
              <h5 className="f-body2">Legal </h5>
              <ul className="list-unstyled">
                <li className="pt-2">
                  <a href="/" className="f-body">Terms & conditions</a>
                </li>
                <li className="pt-2">
                  <a href="/" className="f-body">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
