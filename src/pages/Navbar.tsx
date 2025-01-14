function Navbar() {
  return (
    <nav className="scontainer flex items-center justify-between border-b border-gray-300 w-full max-md:pl-10 max-md:pr-16 px-16  backdrop-blur-sm shadow-sm">
      <div  className="lg:hidden">
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <div id="dropdown-div" className="absolute  translate-y-8 z-10 ">
          <ul className="rounded-xl border-solid border-white border-2 py-2 px-4 backdrop-blur-sm">
            <li><a href="" className="text-white">Homepage</a></li>
            <li><a href="" className="text-white">Vacation</a></li>
            <li><a href="" className="text-white">Hotels</a></li>
            <li><a href="" className="text-white">All in One</a></li>
            <li><a href="" className="text-white">Car Rental</a></li>
          </ul>
        </div>
      </div>
      <h1 className="text-white text-2xl font-medium">Indonature</h1>
      <ul className="flex gap-8 max-lg:hidden">
        <li className="relative group">
          <a href="#" className="text-white block py-4">Homepage</a>
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl shadow-xl shadow-white scale-x-0 origin-center transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150">
          </div>
        </li>
        <li className="relative group">
          <a href="#" className="text-white block py-4">Vacation</a>
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl shadow-xl shadow-white scale-x-0 origin-center transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150">
          </div>
        </li>
        <li className="relative group">
          <a href="#" className="text-white block py-4">Hotels</a>
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl shadow-xl shadow-white scale-x-0 origin-center transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150">
          </div>
        </li>
        <li className="relative group">
          <a href="#" className="text-white block py-4">All in One</a>
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl shadow-xl shadow-white scale-x-0 origin-center transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150">
          </div>
        </li>
        <li className="relative group">
          <a href="#" className="text-white block py-4">Car Rental</a>
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white rounded-t-xl shadow-xl shadow-white scale-x-0 origin-center transition-all duration-300 group-hover:w-4/5 group-hover:scale-x-150">
          </div>
        </li>
      </ul>
      <div className="flex justify-center item-center gap-5 text-sm py-4 max-md:hidden">
        <div className="rounded-full text-white px-5 py-2 bg-color-1 justify-center items-center flex gap-1">
          <i className="ri-gps-line ri-md"></i>
          <h6>Indonesia</h6>
        </div>
        <div className="rounded-full px-5 py-2 bg-white justify-center items-center flex">
          <h6 className="">Register</h6>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
