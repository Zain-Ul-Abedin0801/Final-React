import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <div className="top"></div>
      <div className="header">
        <img className="logo" src="/assets/images/logo.png" alt="Logo" />
        <p className="name">ENCHANTED</p>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">☰</span>
        </div>
      </div>

      {/* Menu for genres */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <Link to="/fantasy" className="genre-link">Fantasy</Link>
        <Link to="/science" className="genre-link">Science</Link>
        <Link to="/finance" className="genre-link">Finance</Link>
        <Link to="/checkout" className="genre-link">Checkout</Link>
      </div>
    </div>
  );
};

export default Header;
