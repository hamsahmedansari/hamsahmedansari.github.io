import React from "react";
import Increment from "../increment";

const Brand = () => {
  return (
    <section class="brand_area section_gap_bottom">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-brand-item d-table">
                  <div class="d-table-cell text-center">
                    <img src="img/brands/logo1.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-brand-item d-table">
                  <div class="d-table-cell text-center">
                    <img src="img/brands/logo2.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-brand-item d-table">
                  <div class="d-table-cell text-center">
                    <img src="img/brands/logo3.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-brand-item d-table">
                  <div class="d-table-cell text-center">
                    <img src="img/brands/logo4.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-brand-item d-table">
                  <div class="d-table-cell text-center">
                    <img src="img/brands/logo5.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-brand-item d-table">
                  <div class="d-table-cell text-center">
                    <img src="img/brands/logo6.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-brand-item d-table">
                  <div class="d-table-cell text-center">
                    <img src="img/brands/logo7.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-brand-item d-table">
                  <div class="d-table-cell text-center">
                    <img src="img/brands/logo8.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-brand-item d-table">
                  <div class="d-table-cell text-center">
                    <img src="img/brands/logo9.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="offset-lg-2 col-lg-4 col-md-6">
            <div class="client-info">
              <div class="d-flex mb-50">
                <span class="lage">
                  <Increment
                    number={0.5}
                    speed={100}
                    delay={0}
                    isDecimal={true}
                  />
                </span>
                <span class="smll">Years Experience Working</span>
              </div>
              <div class="call-now d-flex">
                <div>
                  <span class="fa fa-phone" />
                </div>
                <div class="ml-15">
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
};

export default Brand;
