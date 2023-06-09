import React from "react";
import apple from '../../assets/apple.svg'
import play from '../../assets/play.svg'
import mobile from '../../assets/mobile.svg'
import './Mobile.css'

const Mobile = () => {
  return (

      <div className="container ">
<div className="row">
  
<div className="col-lg-6  padd">
          <div className="left-div">
          <h1 className="new-arr2 padd">DOWNLOAD APP &</h1>
            <h1 className="new-arr2">GET THE VOUCHER!</h1>
            <p className="down-txt pt-5">
              Get 30% off for first transaction using
              <br/>Rondovision mobile app for now.
            </p>
            <div className="pt-5 px-1 ">
            <img src={apple} alt='apple' className="img-fluid apple"/>
            <img src={play} alt='apple' className="img-fluid apple"/>

            </div>
          </div>
          </div>
          <div className="col-lg-6 ">
            <img src={mobile} alt="mob" className="img-fluid phone"/>
          </div>
</div>

        </div>


  );
};

export default Mobile;
