import React from "react";
import Banner from "../../components/banner";

const Cv = () => {
  return (
    <React.Fragment>
      <Banner pages={[{ name: "CV", link: "/Cv" }]} title="CV" />
      <section className="contact_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center contact_info">
                <div className="info_item">
                  {/* <i className="lnr lnr-home" /> */}
                  <h6>
                    Sorry For Delay but Cv will be updated withIn few hours
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Cv;
