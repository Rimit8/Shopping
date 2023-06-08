import React from "react";
import "./Young.css";
import girl4 from "../../assets/girl4.svg";
import girl5 from "../../assets/girl5.svg";

const Young = () => {
  return (
    <div className="padd">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
              <div className="text-start">
                <h1 className=" new-arr">Young's Favourite</h1>
              </div>
            </p>
          </div>

              <div className="col-lg-6 px-3">
                <img src={girl4} alt="girl1" className="younggirls img-fluid" />
                <div className="text-start">
                  <h5 className="girlone pt-4">Hoodies and Sweetshirt</h5>
                  <p className="girltwo">Explore Now!</p>
                </div>
              </div>
              <div className="col-lg-6 px-3">
                <img src={girl5} alt="girl1" className="younggirls img-fluid" />
                <div className="text-start">
                  <h5 className="girlone pt-4">Hoodies and Sweetshirt</h5>
                  <p className="girltwo">Explore Now!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

  );
};

export default Young;
