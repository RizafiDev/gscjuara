function Navbar() {
  {
    /*Navbar Scroll Function*/
  }
  let previousScroll = window.scrollY;
  const navbarScroll = () => {
    const navbarContainer = document.getElementById("navbar-container");
    const currentScroll = window.scrollY;
    if (navbarContainer) {
      if (currentScroll > previousScroll) {
        navbarContainer.classList.replace("top-2", "-top-20");
      } else {
        navbarContainer.classList.replace("-top-20", "top-2");
      }
    }
    previousScroll = currentScroll;
  };
  window.addEventListener("scroll", navbarScroll);
  return (
    <nav
      id="navbar-container"
      className="fixed z-50 transition-all duration-700 py-2 mb-10 top-2 left-1/2 transform -translate-x-1/2 w-full max-w-7xl rounded-full mt-4 flex items-center shadow-inner justify-between shadow-gray-950 px-5 backdrop-blur-sm bg-gray-800 "
    >
      <h1 className="text-white text-2xl font-medium max-md:ml-0 ml-7 l">
        Nusantara
      </h1>
      <ul className="flex gap-8 max-lg:hidden text-sm ">
        <li className="relative group">
          <a href="#" className="text-white block py-4">
            Homepage
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl shadow-xl shadow-white scale-x-0 origin-center transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150"></div>
        </li>
        <li className="relative group">
          <a href="#" className="text-white block py-4">
            Vacation
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl shadow-xl shadow-white scale-x-0 origin-center transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150"></div>
        </li>
        <li className="relative group">
          <a href="#" className="text-white block py-4">
            Hotels
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl shadow-xl shadow-white scale-x-0 origin-center transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150"></div>
        </li>
        <li className="relative group">
          <a href="#" className="text-white block py-4">
            All in One
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl shadow-xl shadow-white scale-x-0 origin-center transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150"></div>
        </li>
        <li className="relative group">
          <a href="#" className="text-white block py-4">
            Car Rental
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl shadow-xl shadow-white scale-x-0 origin-center transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150"></div>
        </li>
      </ul>
      <div className="lg:flex justify-center item-center max-md:gap-1 md:gap-5 text-sm max-lg:py-4 hidden">
        <div className="rounded-full text-white max-md:px-3 max-md:py-0.5 md:px-5 md:py-2 bg-color-1 justify-center items-center flex gap-1">
          <i className="ri-gps-line ri-md"></i>
          <h6>Indonesia</h6>
        </div>
        <div className="rounded-full max-md:px-3 max-md:py-0.5 md:px-5 md:py-2 bg-white justify-center items-center flex shadow-inner shadow-gray-400">
          <h6 className="">Register</h6>
        </div>
      </div>
      <div className="dropdown container" id="dropdown-container"></div>
    </nav>
  );
}
export default Navbar;
