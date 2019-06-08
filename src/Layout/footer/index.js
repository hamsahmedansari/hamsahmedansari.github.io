import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer_top flex-column">
              <div className="footer_logo">
                <Link to="/">
                  <img src="img/logo.png" alt="" />
                </Link>
                <h4>Follow Me</h4>
              </div>
              <div className="footer_social">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/hamsahmedansari"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/hamsahmedansari"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/hamsahmedansari"
                >
                  <i className="fa fa-github" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.behance.net/hamsahmeda1813"
                >
                  <i className="fa fa-behance" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/hamsahmedansari/"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text">
            Copyright &copy;{new Date().getFullYear()} All rights reserved |
            This template is made with{" "}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colorlib
            </a>
          </p>
          <p className="col-lg-8 col-sm-12 footer-text">
            Currently i am working on my own portfolio Hopefully Lunched in few
            weeks... <i className="fa fa-heart" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
