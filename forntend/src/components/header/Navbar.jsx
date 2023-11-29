import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutTarot">Everything about Tarot</Link></li>
        <li><Link to="/yourFortuneTeller">Your Tarot fortune teller</Link></li>
        <li><Link to="/buyCards">Buy the Tarot cards</Link></li>
        <li><Link to="/contactUs">Contact us</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
