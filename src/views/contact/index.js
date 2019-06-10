import React from "react";
import Banner from "../../components/banner";

const Contact = props => {
  return (
    <React.Fragment>
      <Banner pages={[{ name: "Contact", link: "/contact" }]} title="Contact" />
      <section class="contact_area section_gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="d-flex justify-content-between contact_info">
                <div class="info_item">
                  <i class="lnr lnr-home" />
                  <h6>Karachi, Pakistan</h6>
                </div>
                <div class="info_item">
                  <i class="lnr lnr-phone-handset" />
                  <h6>
                    <a href="tel:+923402049917">+92 (340) 2049 917</a>
                  </h6>
                  <p>24/7 Available</p>
                </div>
                <div class="info_item">
                  <i class="lnr lnr-envelope" />
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
