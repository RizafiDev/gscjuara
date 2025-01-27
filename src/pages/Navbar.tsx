function Navbar() {
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
      className="fixed z-[999999999] transition-all duration-700 top-2 left-1/2 transform -translate-x-1/2 w-full max-w-7xl rounded-full mt-4 flex items-center justify-between shadow-inner shadow-gray-950 px-5 backdrop-blur-sm bg-gray-800"
    >
      <h1 className="text-white text-2xl font-medium ml-7 md:w-fit w-full">
        Nusantravel
      </h1>
      {/* large */}
      <ul className="flex gap-8 text-sm">
        <li className="relative group">
          <a href="#header" className="text-white block py-6">
            Beranda
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150 group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] group-hover:shadow-white"></div>
        </li>
        <li className="relative group">
          <a href="#card" className="text-white block py-6">
            Rekomendasi
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150 group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] group-hover:shadow-white"></div>
        </li>
        <li className="relative group">
          <a href="#about" className="text-white block py-6">
            Profil
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150 group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] group-hover:shadow-white"></div>
        </li>
        <li className="relative group">
          <a href="#map" className="text-white block py-6">
            Peta
          </a>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150 group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] group-hover:shadow-white"></div>
        </li>
      </ul>
      <div className="flex justify-center item-center gap-5 text-sm py-4 ml-1">
        <div className="rounded-full text-white px-5 py-2 bg-color-1 justify-center items-center flex gap-1">
          <i className="ri-gps-line ri-md"></i>
          <h6>Indonesia</h6>
        </div>
        <div className="rounded-full px-5 py-2 bg-white justify-center items-center flex shadow-inner shadow-gray-400">
          <h6 className="">Register</h6>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
