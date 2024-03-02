// Import necessary React components and styles
import { useState } from "react";
import { Link } from "react-router-dom";

// Functional component for the header
const Header2 = () => {
  // State to track the visibility of the menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      {/* Render hamburger menu icon when screen width is 600px or less */}
      {
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
        </div>
      }
      {/* Render menu items */}
      <div className={`menu-items ${isMenuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/Who We Are">WhoWeAre</Link>
        <Link to="/Events">Events</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header2;
