import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Skill = props => {
  const { title, color, percentage } = props;
  return (
    <div class="skill" id="skill">
      <p>{title}</p>
      <div
        class="skill-bar skill1 wow slideInLeft animated"
        style={{ background: color, width: `${percentage}%` }}
      >
        <span class="skill-count1" style={{ borderTop: color }}>
          {percentage}%
        </span>
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
