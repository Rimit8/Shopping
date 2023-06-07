import React from "react";
import "./Email.css";

const Email = () => {
  return (
    <div className="padd">
      <div className="col-lg-12 bgylw pb-5">
        <div className=" pt-5 ">
          <div className="pt-5 pb-5">
            <h1 className="join">
              JOIN SHOPPING COMMUNITY TO
              <br /> GET MONTHLY PROMO
            </h1>
            <p className="etext pt-2">
              Type your email down below and be young wild generation
            </p>
            <div class="searchbox-wrap pt-3">
              <input type="text" placeholder="Add your email here" />
              <button>
                <span>Send</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
