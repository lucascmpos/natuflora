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
    <header className="flex justify-evenly  flex-row w-full  items-center relative">
      <img className="w-44" src={NatuFloraLogo} />
      {windowWidth > 767 && (
        <div className="hidden md:flex flex-row justify-center space-x-9">
          <Link to="/">
            <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
              INÍCIO
            </h1>
          </Link>

          <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
            SOBRE
          </h1>
          <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
            NOSSOS PRODUTOS
          </h1>
          <h1 className="text-green-950 hover:text-green-800 transition-all duration-200 font-semibold text-3xl cursor-pointer">
            CONTATO
          </h1>
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
      )}
      <div className="flex gap-8">
        {windowWidth <= 900 && (
          <button
            className="p-3 rounded-lg font-semibold text-green-950 hover:text-green-950 transition duration-300 md:hidden"
            label={isMenuOpen ? "" : <FaInstagram size={20} />}
            onClick={toggleMenu}
          />
        )}
      </div>
      {isMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black opacity-50 z-10 transition duration-300"
            onClick={closeMenu}
          ></div>
          <div
            className={`md:hidden fixed inset-0 bg-white z-20 w-64 left-auto transition duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col p-4">
              <div className="flex justify-between items-center mb-4">
                <button
                  className="p-2 rounded-lg font-semibold text-orange-500 hover:text-orange-800 transition duration-300"
                  label={<FaTimes />}
                  onClick={toggleMenu}
                />
              </div>
              <div className="flex flex-col gap-8 text-lg text-gray-700 font-semibold cursor-pointer">
                <h1 className="hover:text-green-950">Entrar</h1>
                <h1 className="hover:text-green-950">Benefícios</h1>
                <h1 className="hover:text-green-950">Conta digital</h1>
                <h1 className="hover:text-green-950">Suporte</h1>
                <h1 className="hover:text-green-950">Trabalhe Conosco</h1>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
