import React from 'react'
import logo from '../../assets/logo.svg'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
    <div className='row bg-white'>
    <div className='col-lg-12'>
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className='col-lg-5 d-flex'>
      <img src={logo} alt='logo'/>
  <a className="navbar-brand logo-text px-3" href="/">FASHION</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  </div>
  <div className='col-lg-8 px-5'>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup ">
    <div className="navbar-nav px-5">
      <a className="nav-item nav-link px-4 text-black" href="/">CATALOGUE</a>
      <a className="nav-item nav-link px-4 text-black" href="/">FASHION</a>
      <a className="nav-item nav-link px-4 text-black" href="/">FAVOURITE</a>
      <a className="nav-item nav-link px-4 text-black" href="/">LIFESTYLE</a>
      <button type="button" className="btn btn-dark mx-4">SIGN UP</button>
    </div>
  </div>
  </div>
</nav>
</div>
</div>
    </div>
  )
}

export default Navbar
