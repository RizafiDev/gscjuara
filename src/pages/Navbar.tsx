import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") !== "light"; // Jika belum ada, default gelap
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <nav
        id="navbar-container"
        className="fixed z-[999]  md:py-0 py-4 dark:border-b md:dark:border dark:border-gray-500 dark:bg-white transition-all dark:shadow-none duration-700 md:top-2 top-0 left-0 right-0 mx-auto w-full max-w-7xl md:rounded-full md:mt-4 flex items-center justify-between shadow-inner shadow-gray-950 px-5 backdrop-blur-sm bg-gray-800"
      >
        {/* Hamburger Menu Icon */}
        <i
          onClick={toggleMenu}
          className={`transition-transform duration-300 ${
            isMenuOpen ? "ri-close-line" : "ri-menu-2-line"
          } ri-xl flex md:hidden text-white cursor-pointer dark:text-black`}
        ></i>
        <h1 className="text-white text-2xl text-center md:text-left font-medium md:ml-7 md:w-fit w-full dark:text-black">
          Nusantravel
        </h1>
        <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          className="md:hidden flex"
        >
          {isDarkMode ? (
            <i className="ri-sun-line ri-xl text-black"></i>
          ) : (
            <i className="ri-moon-clear-line ri-xl text-white"></i>
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="md:flex gap-8 text-sm hidden">
          <li className="relative group">
            <a href="#header" className="text-white dark:text-black block py-6">
              Beranda
            </a>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150 group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] group-hover:shadow-white"></div>
          </li>
          <li className="relative group">
            <a href="#card" className="text-white block py-6 dark:text-black">
              Rekomendasi
            </a>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150 group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] group-hover:shadow-white"></div>
          </li>
          <li className="relative group">
            <a href="#about" className="text-white block py-6 dark:text-black">
              Profil
            </a>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150 group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] group-hover:shadow-white"></div>
          </li>
          <li className="relative group">
            <a href="#map" className="text-white block py-6 dark:text-black">
              Peta
            </a>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150 group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] group-hover:shadow-white"></div>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="md:flex hidden justify-center item-center gap-5 text-sm py-4 ml-1">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className=" flex items-center justify-center rounded-full "
          >
            {isDarkMode ? (
              <i className="ri-sun-line ri-xl text-black"></i>
            ) : (
              <i className="ri-moon-clear-line ri-xl text-white"></i>
            )}
          </button>
          <div className="rounded-full text-white dark:text-black dark:bg-white dark:shadow-inner dark:shadow-gray-400 px-5 py-2 bg-color-1 justify-center items-center flex gap-1">
            <i className="ri-gps-line ri-md"></i>
            <h6>Indonesia</h6>
          </div>
          {/* <div className="rounded-full px-5 py-2 bg-white justify-center items-center flex shadow-inner shadow-gray-400">
            <h6 className="">Register</h6>
          </div> */}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-20 left-0 right-0 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100 z-[998]"
            : "-translate-y-full opacity-0 -z-10"
        }`}
      >
        <div className="container flex items-center justify-center w-full px-4">
          <ul className="w-full flex items-center justify-center gap-3">
            <li className="bg-gray-900 dark:bg-white dark:shadow-inner dark:shadow-gray-200 border dark:border-none border-gray-500 px-4 py-1 text-white dark:text-black rounded-md">
              <a href="#header" className="text-sm truncate">
                Beranda
              </a>
            </li>
            <li className="bg-gray-900 dark:bg-white dark:shadow-inner dark:shadow-gray-200 border dark:border-none border-gray-500 px-4 py-1 text-white dark:text-black rounded-md">
              <a href="#card" className="text-sm truncate">
                Rekomendasi
              </a>
            </li>
            <li className="bg-gray-900 dark:bg-white dark:shadow-inner dark:shadow-gray-200 border dark:border-none border-gray-500 px-4 py-1 text-white dark:text-black rounded-md">
              <a href="#about" className="text-sm truncate">
                Profil
              </a>
            </li>
            <li className="bg-gray-900 dark:bg-white dark:shadow-inner dark:shadow-gray-200 border dark:border-none border-gray-500 px-4 py-1 text-white dark:text-black rounded-md">
              <a href="#map" className="text-sm truncate">
                Peta
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
