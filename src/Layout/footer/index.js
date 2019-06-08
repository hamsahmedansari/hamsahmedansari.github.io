import React from "react";

const Footer = () => {
  return (
    <footer class="footer_area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="footer_top flex-column">
              <div class="footer_logo">
                <a href="#">
                  <img src="img/logo.png" alt="" />
                </a>
                <h4>Follow Me</h4>
              </div>
              <div class="footer_social">
                <a href="#">
                  <i class="fa fa-facebook" />
                </a>
                <a href="#">
                  <i class="fa fa-twitter" />
                </a>
                <a href="#">
                  <i class="fa fa-dribbble" />
                </a>
                <a href="#">
                  <i class="fa fa-behance" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row footer_bottom justify-content-center">
          <p class="col-lg-8 col-sm-12 footer-text">
            Copyright &copy;{new Date().getFullYear()} All rights reserved |
            This template is made with
            <i class="fa fa-heart-o" aria-hidden="true" /> by
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
