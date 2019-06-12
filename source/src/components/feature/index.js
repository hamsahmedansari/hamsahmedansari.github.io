import React from "react";

const Feature = () => {
  return (
    <section className="features_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="main_title">
              <h2>service offers </h2>
              <p>
                Is give may shall likeness chile creating Application and add my
                best to that application.
              </p>
            </div>
          </div>
        </div>
        <div className="row feature_inner">
          <div className="col-lg-3 col-md-6">
            <div className="feature_item  wow fadeInUp">
              <img src="img/services/s1.png" alt="" />
              <h4>Wp developing</h4>
              <p>
                WordPress is a free and open-source content management system
                based on PHP & MySQL.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature_item  wow fadeInUp">
              <img src="img/services/s2.png" alt="" />
              <h4>UI/ux design</h4>
              <p>
                UX design refers to user experience design, while UI design
                stands for user interface design.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature_item  wow fadeInUp">
              <img src="img/services/s3.png" alt="" />
              <h4>Web design & Development</h4>
              <p>The importance of a website for sales cannot be overstated.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature_item  wow fadeInUp">
              <img src="img/services/s4.png" alt="" />
              <h4>Android & IOS Application Development</h4>
              <p>A mobile app can be helpful in creating brand awareness.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
