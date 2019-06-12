import React from "react";
import { Link } from "react-router-dom";
import ErrorImage from "../../assets/404.gif";

const Error = () => {
  return (
    <section style={{ paddingTop: 100 }}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Link to="/">
          <img
            src={ErrorImage}
            alt=""
            style={{
              maxWidth: "1000px",
              margin: "auto",
              width: "100%"
            }}
          />
        </Link>
      </div>
    </section>
  );
};

export default Error;
