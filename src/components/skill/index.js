import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Skill = props => {
  const { title, color, percentage } = props;
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <div className="skill " id="skill">
        <p>{title}</p>
        <div
          className="skill-bar skill1 wow slideInLeft animated"
          style={{ background: color, width: `${percentage}%` }}
        >
          <span className="skill-count1" style={{ borderTop: color }}>
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

export default Skill;
