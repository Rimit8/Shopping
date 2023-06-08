import React from "react";
import "./NewArrivals.css";
import girl1 from "../../assets/girl1.svg";
import girl2 from "../../assets/girl2.svg";
import girl3 from "../../assets/girl3.svg";

const NewArrivals = () => {
  return (
    <div className="padd">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
              <div className="text-start ">
                <h1 className=" new-arr">NEW ARRIVALS</h1>
              </div>
            </p>
          </div>

              <div className="col-lg-4 px-4">
                <img src={girl1} alt="girl1" className="girls img-fluid" />
                <div className="text-start newarrival">
                  <h5 className="girlone pt-4">Hoodies and Sweetshirt</h5>
                  <p className="girltwo">Explore Now!</p>
                </div>
              </div>
              <div className="col-lg-4 px-4">
                <img src={girl2} alt="girl1" className="girls img-fluid" />
                <div className="text-start newarrival">
                  <h5 className="girlone  pt-4">Hoodies and Sweetshirt</h5>
                  <p className="girltwo">Explore Now!</p>
                </div>
              </div>
              <div className="col-lg-4 px-4">
                <img src={girl3} alt="girl1" className="girls img-fluid" />
                <div className="text-start newarrival">
                  <h5 className="girlone  pt-4">Hoodies and Sweetshirt</h5>
                  <p className="girltwo">Explore Now!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

  );
};

export default NewArrivals;
