import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import NatuFloraLogo from "../assets/natuflora-logo.png";
import { Link } from "react-router-dom";

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
    <header className="flex lg:justify-around justify-evenly gap-12 lg:gap-0 items-center relative bg-[#e1e3de]  py-4 px-8 z-50">
      <Link to="/">
        <img className="w-32" src={NatuFloraLogo} alt="Natu Flora Logo" />
      </Link>
      {windowWidth > 899 ? (
        <div className="hidden md:flex flex-row justify-center space-x-9 items-center">
          <Link to="/">
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              INÍCIO
            </h1>
          </Link>

          <Link to="/about">
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              SOBRE
            </h1>
          </Link>
          <Link to="/products">
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              PRODUTOS
            </h1>
          </Link>
          <Link to="contact">
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              CONTATO
            </h1>
          </Link>
          <div className="flex flex-row gap-5 justify-center items-center">
            <a
              href="https://www.instagram.com/natu.floraflori/"
              target="_blank"
            >
              <FaInstagram
                className="text-green-950 hover:text-green-800 transition-all duration-200 cursor-pointer"
                size={30}
              />
            </a>
            <FaWhatsapp
              className="text-green-950 hover:text-green-800 transition-all duration-200 cursor-pointer"
              size={30}
            />
          </div>
        </div>
      ) : (
        <div className="lg:hidden flex items-center">
          {isMenuOpen ? (
            ""
          ) : (
            <FaBars
              className="text-green-950 cursor-pointer"
              size={30}
              onClick={toggleMenu}
            />
          )}
        </div>
      )}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#e1e3de]   flex flex-col items-center justify-center space-y-4 py-4 z-50">
          <Link to="/" onClick={toggleMenu}>
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              INÍCIO
            </h1>
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              SOBRE
            </h1>
          </Link>
          <Link to="/products" onClick={toggleMenu}>
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              PRODUTOS
            </h1>
          </Link>
          <a href="/contato" onClick={toggleMenu}>
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              CONTATO
            </h1>
          </a>
          <div className="flex flex-row gap-5 justify-center items-center">
            <a
              href="https://www.instagram.com/natu.floraflori/"
              target="_blank"
            >
              <FaInstagram
                className="text-green-950 hover:text-green-800 transition-all duration-200 cursor-pointer"
                size={30}
              />
            </a>
            <FaWhatsapp
              className="text-green-950 hover:text-green-800 transition-all duration-200 cursor-pointer"
              size={30}
            />
          </div>
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
