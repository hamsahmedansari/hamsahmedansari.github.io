import React from "react";
import Header from "./header";
import Routing from "./routes";
import Footer from "./footer";

const Layout = props => {
  return (
    <div>
      <Header />
      <div id="routing">
        <Routing />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
