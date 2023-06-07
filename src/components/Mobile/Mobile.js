import React from "react";
import apple from '../../assets/apple.svg'
import play from '../../assets/play.svg'
import mobile from '../../assets/mobile.svg'

const Mobile = () => {
  return (
    <div className="padd">
      <div className="container padd">

        <div className="col-lg-12 padd d-flex align-items-center">
          <div className="col-lg-6 text-start padd">
            <h1 className="new-arr padd">DOWNLOAD APP &</h1>
            <h1 className="new-arr">GET THE VOUCHER!</h1>
            <p className="down-txt pt-5">
              Get 30% off for first transaction using
              <br/>Rondovision mobile app for now.
            </p>
            <div className="pt-5">
            <img src={apple} alt='apple' className="img-fluid"/>
            <img src={play} alt='apple' className="img-fluid px-4"/>

            </div>
          </div>
          <div className="col-lg-6 ">
            <img src={mobile} alt="mob" className="img-fluid"/>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Mobile;
