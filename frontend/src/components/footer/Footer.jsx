import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  const teamMembers = ["Neha Mehta", "Masouma Rasouli", "Alejandro Lima Lugo"];
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (parameter) => {
    navigate(parameter); // Navigate based on the parameter when clicked
  };

  return (
    <div className="footer">
      <p>
        © 2023-{currentYear} TarotFortuneTeller. Coded and maintained with ❤️ by |
        {teamMembers.map((name, index) => (
          <span key={index}>
            {index !== 0 && ", "}
            {name}
          </span>
        ))}
        <Link
          to="terms"
          className="inlineLink"
          onClick={() => handleNavigation('/terms')}
        >
          Terms
        </Link>
        {" | "}
        <Link
          to="privacy"
          className="inlineLink"privacy
          onClick={() => handleNavigation('/privacy')}
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
