import React from "react";
import BannerCss from "./BannerCss.css";

const Banner = () => {
  return (
    <div className="container">
      <img
        src="https://etimg.etb2bimg.com/photo/85652320.cms"
        alt=""
        className="w-full h-full banner-imgHeight"
      />
      <div className="centered text-4xl font-bold wdth">
        <span className="dash">YOU CAN GET BEST CARS BODY PARTS</span>
      </div>
    </div>
  );
};

export default Banner;
