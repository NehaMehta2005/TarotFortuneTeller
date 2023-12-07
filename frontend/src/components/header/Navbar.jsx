import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav-bar.css"

function Navbar() {
  return (
    <div className='nav-bar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutTarot">Everything about Tarot</Link></li>
        <li><Link to="/yourFortuneTeller">Your Tarot fortune teller</Link></li>
        <li><Link to="/buyCards">Buy the Tarot cards</Link></li>
        <li><Link to="/OurTeam">Our Team</Link></li>
        <li><Link to="/contactUs">Contact us</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Register">Register</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
