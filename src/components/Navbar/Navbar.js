import React from "react";
import logo from "../../assets/logo.svg";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="row bg-white">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand logo-text d-flex " href="/">
            <img src={logo} alt="logo" className="px-2 logo-img img-fluid"/>
              FASHION
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>


            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="navbar-nav ms-auto">
                <a className="nav-item nav-link text-black px-4" href="/">
                  CATALOGUE
                </a>
                <a className="nav-item nav-link text-black px-4" href="/">
                  FASHION
                </a>
                <a className="nav-item nav-link text-black px-4" href="/">
                  FAVOURITE
                </a>
                <a className="nav-item nav-link text-black px-4" href="/">
                  LIFESTYLE
                </a>
                <button type="button" className="btn btn-dark mx-4 nav-item signup-btn">
                  SIGN UP
                </button>
              </div>
            </div>

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
