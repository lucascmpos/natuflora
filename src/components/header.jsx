import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import NatuFloraLogo from "../assets/natuflora-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <header className="flex lg:justify-around justify-evenly gap-12 lg:gap-0 items-center relative bg-[#e1e3de] py-4 px-8 z-50">
      <Link to="/">
        <img className="w-32" src={NatuFloraLogo} alt="Natu Flora Logo" />
      </Link>
      {windowWidth > 899 ? (
        <div className="hidden md:flex flex-row justify-center space-x-9 items-center">
          {/* Links aqui */}
        </div>
      ) : (
        <div className="lg:hidden flex items-center">
          <FaBars
            className="text-green-950 cursor-pointer"
            size={30}
            onClick={toggleMenu}
          />
        </div>
      )}
      {isMenuOpen && (
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#e1e3de] flex flex-col items-center justify-center space-y-4 py-4 z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Links aqui */}
          <FaTimes
            className="text-green-950 cursor-pointer absolute top-4 right-4"
            size={30}
            onClick={toggleMenu}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
