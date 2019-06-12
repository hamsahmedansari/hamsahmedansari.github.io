import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { pages } = this.props;
    pages.unshift({
      name: "Home",
      link: "/"
    });
    return (
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content text-center">
              <h2>{this.props.title}</h2>
              <div className="page_link">
                {pages.map((page, i) => (
                  <Link to={page.link} key={i}>
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Banner.propTypes = {
  pages: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Banner;
