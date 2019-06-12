import React from "react";
import Banner from "../../../components/banner";
import data from "../../../data/portfolio";
import { Redirect } from "react-router-dom";

const SinglePortfolio = props => {
  const { id } = props.match.params;
  let temp = {};
  data.find(d =>
    d.collections.find(collection => {
      if (collection._id === Number(id)) {
        temp = collection;
        return true;
      }
      return false;
    })
  );
  if (Object.entries(temp).length === 0) {
    return <Redirect to="/404" />;
  }
  const starts = Array.apply(null, new Array(temp.rating));
  return (
    <React.Fragment>
      <Banner
        pages={[
          { name: "Portfolio", link: "/portfolio" },
          { name: temp.title, link: `/project/${temp._id}` }
        ]}
        title={temp.title}
      />
      <section className="portfolio_details_area mt-5">
        <div className="container">
          <div className="portfolio_details_inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="left_img">
                  <img className="img-fluid" src={temp.image} alt="" />
                </div>
              </div>
              <div className="offset-lg-1 col-lg-5">
                <div className="portfolio_right_text mt-30">
                  <h4 className="text-uppercase">{temp.title}</h4>
                  <p>{temp.description}</p>
                  <ul className="list">
                    <li>
                      <span>Rating</span>:
                      {starts.map((star, i) => (
                        <i className="fa fa-star" key={i} />
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
