import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about_area section_gap">
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-lg-5  wow fadeInLeft">
            <div className="about_img">
              <img className="" src="img/about-us.png" alt="" />
            </div>
          </div>

          <div className="offset-lg-1 col-lg-5  wow fadeInRight">
            <div className="main_title text-left">
              <h2>
                let’s <br />
                Introduce about <br />
                myself{" "}
              </h2>
              <p>
                A passionate JavaScript developer and loves to solve algorithmic
                problems. With Excellent knowledge of programming or Developing
              </p>
              <p>
                My name is Hams Ahmed Ansari and I am a{" "}
                <b>Javascript Developer</b> who specializes in creating dynamic
                and beautiful web pages or mobile Application by using
                <b> React & React Native</b>. I have been in the field for
                nearly 2 years, and have been loving every minute of it. I am a
                blogger, entrepreneur, designer, developer,opensource lover, and
                overall thinker. Check out some of the links below to see what
                I’ve been up to lately.
              </p>
              <Link className="primary_btn" to="/CV">
                <span>Download CV</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
