import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <img src="SusLogo.png" id="logo" alt="Fork with leaves" width="200" height="200"></img>
      <h1>SusFood</h1>
      <h2> for a sustainable future</h2>

        <div id="titlebox">
          <a href="/">Home</a>
          <a href="/AboutUs">About Us</a>
          <a href="/Demo">Demo</a>
        </div>

        <div className="navbar-container">
  
        </div>
        
    </div>
  )
}

export default Navbar