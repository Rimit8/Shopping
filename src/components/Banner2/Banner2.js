import React from "react";
import "./Banner2.css";
import banner2 from "../../assets/banner2.svg";

const Banner2 = () => {
  return (
    <div className="padd">
      <div className="ban2">
        <img src={banner2} alt="baa" className="img-fluid" />
        <div className="textylw  text-start">
          <h1 className="banner2-text payday">PAYDAY</h1>
          <h1 className="banner2-text">SALE NOW</h1>
          <p className="text-start para-txt pt-5">Spend minimal $100 get 30% off<br/>
voucher code for your next purchase</p>

        <h1 className="date-txt text-start ">
        1 June - 10 June 2021

        </h1>
        <p className="text-start para-txt">
        *Terms & Conditions apply
        </p>
        <button type="button" className="btn btn-dark shp-btn shp-btn2">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
