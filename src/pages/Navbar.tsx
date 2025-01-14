function Navbar() {
  return (
    <nav className="scontainer flex items-center justify-between border-b border-gray-300 w-full px-16 py-4 backdrop-blur-sm shadow-sm">
      <h1 className="text-white text-2xl font-medium">Indonature</h1>
      <ul className="flex gap-12 text-sm">
        <li>
          <a
            className="text-white relative hover:after:w-full after:content-[''] after:block after:h-1.5 after:bg-white after:w-0 after:transition-width after:duration-300 after:ease-in-out after:absolute after:left-0 after:-bottom-7"
            href="#"
          >
            Homepage
          </a>
        </li>
        <li>
          <a
            className="text-white relative hover:after:w-full after:content-[''] after:block after:h-1.5 after:bg-white after:w-0 after:transition-width after:duration-300 after:ease-in-out after:absolute after:left-0 after:-bottom-7"
            href="#"
          >
            Vacation
          </a>
        </li>
        <li>
          <a
            className="text-white relative hover:after:w-full after:content-[''] after:block after:h-1.5 after:bg-white after:w-0 after:transition-width after:duration-300 after:ease-in-out after:absolute after:left-0 after:-bottom-7"
            href="#"
          >
            Hotels
          </a>
        </li>
        <li>
          <a
            className="text-white relative hover:after:w-full after:content-[''] after:block after:h-1.5 after:bg-white after:w-0 after:transition-width after:duration-300 after:ease-in-out after:absolute after:left-0 after:-bottom-7"
            href="#"
          >
            All in One
          </a>
        </li>
        <li>
          <a
            className="text-white relative hover:after:w-full after:content-[''] after:block after:h-1.5 after:bg-white after:w-0 after:transition-width after:duration-300 after:ease-in-out after:absolute after:left-0 after:-bottom-7"
            href="#"
          >
            Car Rental
          </a>
        </li>
      </ul>
      <div className="flex justify-center item-center gap-5 text-sm">
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
