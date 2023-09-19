import React from "react";
import Support from "./Support";
import Digital_conversion from "./Digital_conversion";
import Story from "./Story";
import Problem from "./Problem";
import Arrays from "./Arrays";
import Welcome_wrapper from "./Welcome_wrapper";

const Home_page = () => {
  return (
    <>
      <div className="page-wraper">
        <div className="page-content">
          <Welcome_wrapper />
          <Support />
          <Digital_conversion />

          <Story />

          <Problem />

          <Arrays />
        </div>
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate" />
        </button>
      </div>
    </>
  );
};

export default Home_page;
