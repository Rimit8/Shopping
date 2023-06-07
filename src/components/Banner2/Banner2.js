import React from "react";
import "./Banner2.css";
import banner2 from "../../assets/banner2.svg";

const Banner2 = () => {
  return (
    <div className="padd">
      <div className="ban2">
        <img src={banner2} alt="baa" className="img-fluid" />
        <div className="textylw px-5 pt-5 mx-5 mt-5 text-start">
          <h1 className="banner-text payday">PAYDAY</h1>
          <h1 className="banner-text">SALE NOW</h1>
          <p className="text-start para-txt pt-5">Spend minimal $100 get 30% off<br/>
voucher code for your next purchase</p>

        <h1 className="date-txt text-start pt-5">
        1 June - 10 June 2021

        </h1>
        <p className="text-start para-txt">
        *Terms & Conditions apply
        </p>
        <button type="button" className="btn btn-dark shp-btn mt-4 shp-btn2">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
