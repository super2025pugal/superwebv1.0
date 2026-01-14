import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "../../css/header.css";
import Logo from "../../images/logo.webp";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef();

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const closeHandler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", closeHandler);
    return () => document.removeEventListener("mousedown", closeHandler);
  }, []);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`main-header ${scrolled ? "scrolled" : ""}`}
      ref={headerRef}
    >
      <div className="header-container">

        {/* LOGO */}
        <div className="logo-area">
          <Link to="/" onClick={closeAll}>
            <img src={Logo} alt="Super Groups" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </button>

        {/* NAVIGATION */}
        <nav className={`main-nav ${menuOpen ? "show" : ""}`}>
          <ul>

            <li>
              <NavLink
                to="/"
                onClick={closeAll}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={closeAll}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Us
              </NavLink>
            </li>

            {/* GROUP OF COMPANIES */}
            <li className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => toggleDropdown("company")}
              >
                Group of Companies
                {openDropdown === "company" ? (
                  <IoMdArrowDropup />
                ) : (
                  <IoMdArrowDropdown />
                )}
              </button>

              {openDropdown === "company" && (
                <div className="dropdown-list">
                  <NavLink
                    to="/Super-textile-works"
                    onClick={closeAll}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Super Textile Services
                  </NavLink>

                  <a
                    href="https://shei.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeAll}
                  >
                    Sudharsan Heavy Engineering
                  </a>
                </div>
              )}
            </li>

            {/* PRODUCTS */}
            <li className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => toggleDropdown("products")}
              >
                Products
                {openDropdown === "products" ? (
                  <IoMdArrowDropup />
                ) : (
                  <IoMdArrowDropdown />
                )}
              </button>

              {openDropdown === "products" && (
                <div className="dropdown-list">
                   <NavLink to="/products/Card" onClick={closeAll} className={({ isActive }) => (isActive ? "active" : "")}>Card</NavLink>
                    <NavLink to="/products/Drawframe" onClick={closeAll} className={({ isActive }) => (isActive ? "active" : "")}>Drawframe</NavLink>
                    <NavLink to="/products/OE" onClick={closeAll} className={({ isActive }) => (isActive ? "active" : "")}>Open End Spinning</NavLink>
                  

                </div>
              )}
            </li>

            <li>
              <NavLink
                to="/career"
                onClick={closeAll}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Careers
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={closeAll}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
