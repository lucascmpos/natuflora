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
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
    <header className="flex justify-between flex-row w-full items-center relative">
      <img className="w-44" src={NatuFloraLogo} alt="Natu Flora Logo" />
      {windowWidth > 767 ? (
        <div className="hidden md:flex flex-row justify-center space-x-9">
          <Link to="/">
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              INÍCIO
            </h1>
          </Link>

          <Link to="about">
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              SOBRE
            </h1>
          </Link>
          <Link to="products">
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              PRODUTOS
            </h1>
          </Link>
          <a href="/contato">
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              CONTATO
            </h1>
          </a>
          <div className="flex flex-row gap-5 justify-center pl-20 items-center">
            <FaInstagram
              className="text-green-950 hover:text-green-800 transition-all duration-200 cursor-pointer"
              size={30}
            />
            <FaWhatsapp
              className="text-green-950 hover:text-green-800 transition-all duration-200 cursor-pointer"
              size={30}
            />
          </div>
        </div>
      ) : (
        <div className="md:hidden">
          {isMenuOpen ? (
            <FaTimes
              className="text-green-950 cursor-pointer"
              size={30}
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="text-green-950 cursor-pointer"
              size={30}
              onClick={toggleMenu}
            />
          )}
          {isMenuOpen && (
            <div className="flex flex-col bg-white absolute top-16 right-0 w-full py-4 px-8 space-y-4">
              <Link to="/" onClick={closeMenu}>
                <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
                  INÍCIO
                </h1>
              </Link>
              <Link to="/about" onClick={closeMenu}>
                <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
                  SOBRE
                </h1>
              </Link>
              <Link to="/products" onClick={closeMenu}>
                <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
                  PRODUTOS
                </h1>
              </Link>
              <a href="/contato" onClick={closeMenu}>
                <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
                  CONTATO
                </h1>
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
