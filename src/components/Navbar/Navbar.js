import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import flowerIcon from "../../assets/icons/pink_flower.webp";
import LOGO from "../../assets/favicon.png";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu automatically when path changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside of the navbar
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/resume", label: "Resume" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <>
      {/* MOBILE BACKDROP OVERLAY */}
      {menuOpen && (
        <div 
          className="mobile-nav-backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav 
        ref={navRef}
        className={`navbar-container ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
      >
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => {
            setMenuOpen(false);
            sessionStorage.setItem("homeBeyondLab", "false");
            window.dispatchEvent(new Event("resetHome"));
          }}
        > 
          <img src={LOGO} className="app-logo" alt="logo" /> 
        </Link>

        {/* HAMBURGER TOGGLE BUTTON FOR MOBILE */}
        <button 
          className={`hamburger-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* NAV LINKS (DESKTOP & MOBILE DROPDOWN) */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={() => {
                  setMenuOpen(false);
                  if (item.path === "/") {
                    sessionStorage.setItem("homeBeyondLab", "false");
                    window.dispatchEvent(new Event("resetHome"));
                  } else {
                    sessionStorage.setItem("homeBeyondLab", "false");
                  }
                  if (item.path === "/gallery") {
                    window.dispatchEvent(new Event("resetGallery"));
                  }
                }}
              >
                {isActive && (
                  <img 
                    src={flowerIcon} 
                    alt="active page indicator" 
                    className="active-flower-icon" 
                  />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;