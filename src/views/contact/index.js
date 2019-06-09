import React from "react";
import Banner from "../../components/banner";

const Contact = props => {
  return (
    <Banner pages={[{ name: "Contact", link: "/contact" }]} title="Contact" />
  );
};

export default Contact;
