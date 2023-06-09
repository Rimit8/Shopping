import React from "react";
import banner1 from "../../assets/banner1.svg";
import leaf from "../../assets/leaf.svg"
import "./Banner1.css";
import { useMediaQuery } from 'react-responsive'


const Banner1 = () => {

  return (

    
    <div>
      <div className="container mt-4">
        <img src={banner1} alt="banner1" className="img-fluid girl1banner"/>
      
        <div className="banner2 ">
        <div className="big-txt">
          <h1 className="banner-text text-start lets-txt">LET'S </h1>

          <h1 className="banner-text text-start">
            EXPLORE
          </h1>
          <h1 className="banner-text text-start unique-txt">
            UNIQUE
          </h1>
          <h1 className="banner-text text-start">
          CLOTHES.
          </h1>
          </div>
          <div className="small-txt">
          <div className="row">
            <h4 className="text-start pt-3 live-txt">Live for Influential and Innovative fashion!</h4>
            </div>
          </div>
        <div className="row d-flex align-items-center">

          <div className="ylw-leaf d-flex ">
          <div className="col-lg-12 d-flex align-items-center ylwbtn">
          <div className="col-lg-6">
            <img src={leaf} alt="leaf" className="img-fluid leaff"/>
            </div>
            <div className="col-lg-6">
            <button type="button" className="btn btn-dark shp-btn">Shop Now</button>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
