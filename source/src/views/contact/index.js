import React from "react";
import Banner from "../../components/banner";

const Contact = props => {
  return (
    <React.Fragment>
      <Banner pages={[{ name: "Contact", link: "/contact" }]} title="Contact" />
      <section className="contact_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between contact_info">
                <div className="info_item">
                  <i className="lnr lnr-home" />
                  <h6>Karachi, Pakistan</h6>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-phone-handset" />
                  <h6>
                    <a href="tel:+923402049917">+92 (340) 2049 917</a>
                  </h6>
                  <p>24/7 Available</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-envelope" />
                  <h6>
                    <a href="mailto:hams.ahmed.ansari95@gmail.com">
                      hams.ahmed.ansari95@gmail.com
                    </a>
                  </h6>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
