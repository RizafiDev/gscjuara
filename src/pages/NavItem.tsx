function NavItem() {
  return (
    <div className="lg:hidden">
      <div
        className="max-md:w-[calc(100vw-20px)] -translate-x-52 sm:w-max absolute translate-y-10 md:translate-y-12 z-10 transition-all duration-300 whitespace-nowrap"
      >
        <ul className="bg-slate-800 rounded-full flex gap-1 m-2 p-1 overflow-x-auto">
          <li className="rounded-full px-3 py-0.5 all transition-all hover:bg-gray-600 text-lg">
            <a href="" className="text-white ">
              Homepage
            </a>
          </li>
          <li className="rounded-full px-3 py-0.5 all transition-all hover:bg-gray-600 text-lg">
            <a href="" className="text-white ">
              Vacation
            </a>
          </li>
          <li className="rounded-full px-3 py-0.5 all transition-all hover:bg-gray-600 text-lg">
            <a href="" className="text-white ">
              Hotels
            </a>
          </li>
          <li className="rounded-full px-3 py-0.5 all transition-all hover:bg-gray-600 text-lg">
            <a href="" className="text-white ">
              All in One
            </a>
          </li>
          <li className="rounded-full px-3 py-0.5 all transition-all hover:bg-gray-600 text-lg">
            <a href="" className="text-white ">
              Car Rental
            </a>
          </li>
        </ul>
      </div>
      {/* 
    </div>
      <div className="max-w-screen-md z-10 container flex items-center overflow-x-auto whitespace-nowrap">
        <div className="bg-slate-800 rounded-full">
          <ul className="rounded-full flex gap-5 m-2">
            <li className="rounded-full px-6 py-3 all transition-all hover:bg-gray-600 text-lg">
              <a href="" className="text-white ">
                Homepage
              </a>
            </li>
            <li className="rounded-full px-6 py-3 all transition-all hover:bg-gray-600 text-lg">
              <a href="" className="text-white ">
                Vacation
              </a>
            </li>
            <li className="rounded-full px-6 py-3 all transition-all hover:bg-gray-600 text-lg">
              <a href="" className="text-white ">
                Hotels
              </a>
            </li>
            <li className="rounded-full px-6 py-3 all transition-all hover:bg-gray-600 text-lg">
              <a href="" className="text-white ">
                All in One
              </a>
            </li>
            <li className="rounded-full px-6 py-3 all transition-all hover:bg-gray-600 text-lg">
              <a href="" className="text-white ">
                Car Rental
              </a>
            </li>
          </ul>
        </div>
        <ul className="rounded-xl border-solid border-white border-2 py-2 px-4 bg-slate-800 flex">
          <li>
            <a href="" className="text-white">
              Homepage
            </a>
          </li>
          <li>
            <a href="" className="text-white">
              Vacation
            </a>
          </li>
          <li>
            <a href="" className="text-white">
              Hotels
            </a>
          </li>
          <li>
            <a href="" className="text-white">
              All in One
            </a>
          </li>
          <li>
            <a href="" className="text-white">
              Car Rental
            </a>
          </li>
        </ul> */}
    </div >
  );
}
export default NavItem;
