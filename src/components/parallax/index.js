import React from "react";
import { Link } from "react-router-dom";

const Parallax = () => {
  return (
    <section className="home_banner_area">
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner_content">
                <h3 className="text-uppercase">Hell0</h3>
                <h1 className="text-uppercase">I am rahi satner</h1>
                <h5 className="text-uppercase">senior wordpress developer</h5>
                <div className="d-flex align-items-center">
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
                <img className="" src="img/banner/home-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
