import React from "react";
import PropTypes from "prop-types";
import Banner from "../../../components/banner";
import data from "../../../data/portfolio";

const SinglePortfolio = props => {
  //   const { id } = props;
  const id = 1;
  let temp = {};
  data.find(d =>
    d.collections.find(collection => {
      if (collection._id === id) {
        temp = collection;
        return false;
      }
    })
  );
  const starts = Array.apply(null, new Array(temp.rating));
  console.log("====================================");
  console.log(starts);
  console.log("====================================");
  return (
    <React.Fragment>
      <Banner
        pages={[
          { name: "Portfolio", link: "/portfolio" },
          { name: temp.title, link: `/project/${temp._id}` }
        ]}
        title={temp.title}
      />
      <section class="portfolio_details_area mt-5">
        <div class="container">
          <div class="portfolio_details_inner">
            <div class="row">
              <div class="col-lg-6">
                <div class="left_img">
                  <img class="img-fluid" src={temp.image} alt="" />
                </div>
              </div>
              <div class="offset-lg-1 col-lg-5">
                <div class="portfolio_right_text mt-30">
                  <h4 class="text-uppercase">{temp.title}</h4>
                  <p>{temp.description}</p>
                  <ul class="list">
                    <li>
                      <span>Rating</span>:
                      {starts.map(star => (
                        <i class="fa fa-star" />
                      ))}
                    </li>
                    <li>
                      <span>Type</span>: {temp.type}
                    </li>
                    <li>
                      <span>Technology</span>: {temp.technology.join(" - ")}
                    </li>
                    <li>
                      <span>Completed</span>: {temp.date}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SinglePortfolio;
