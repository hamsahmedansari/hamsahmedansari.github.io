import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rellax from "rellax";

import Typing from "../typing";

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    new Rellax(".rellax");
  }
  render() {
    return (
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3
                    className="text-uppercase rellax"
                    data-rellax-speed="-1.1"
                  >
                    Hell0
                  </h3>
                  <h1 className="text-uppercase">
                    I am{" "}
                    <span>
                      <Typing text="hams ahmed ansari" speed="1000" delay="0" />
                    </span>
                  </h1>
                  <h5 className="text-uppercase rellax" data-rellax-speed="1.1">
                    full stack mern developer
                  </h5>
                  <div
                    className="d-flex align-items-center rellax"
                    data-rellax-speed="1.1"
                    data-rellax-percentage="0.5"
                  >
                    <a
                      className="primary_btn"
                      href="https://www.upwork.com/o/profiles/users/_~014f12876e410ed5e2/"
                    >
                      <span>Hire Me</span>
                    </a>
                    <Link className="primary_btn tr-bg" to="/CV">
                      <span>Get CV</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img
                    className="rellax "
                    data-rellax-speed="1.5"
                    data-rellax-percentage="0.5"
                    src="img/banner/home-right.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Parallax;
