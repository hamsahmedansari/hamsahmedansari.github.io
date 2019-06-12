import React from "react";
import Increment from "../increment";
import Rellax from "rellax";

class Brand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    new Rellax(".rellax-brand");
  }
  render() {
    return (
      <section className="brand_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6  wow slideInUp">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/brands/logo1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6  wow slideInUp">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/brands/logo2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6  wow slideInUp">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/brands/logo3.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6  wow slideInUp">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/brands/logo4.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6  wow slideInUp">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/brands/logo5.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6  wow slideInUp">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/brands/logo6.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6  wow slideInUp">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/brands/logo7.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6  wow slideInUp">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/brands/logo8.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6  wow slideInUp">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/brands/logo9.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-4 col-md-6">
              <div className="client-info">
                <div className="d-flex mb-50">
                  <span
                    className="lage rellax-brand"
                    data-rellax-speed="0.5"
                    data-rellax-percentage="1"
                  >
                    <Increment
                      number={0.5}
                      speed={100}
                      delay={0}
                      isDecimal={true}
                    />
                  </span>
                  <span className="smll">Years Experience Working</span>
                </div>
                <div className="call-now d-flex">
                  <div>
                    <span className="fa fa-phone" />
                  </div>
                  <div className="ml-15">
                    <p>call us now</p>
                    <h3>(+92)-340-204-9917</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Brand;
