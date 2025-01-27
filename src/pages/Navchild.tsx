function Navchild() {
  return (
    <div className="container fixed top-20 md:hidden flex items-center justify-center w-full">
      <ul className="w-full flex items-center justify-center gap-3">
        <li className="bg-gray-900 px-4 py-1 text-white rounded-md">
          <a href="#header" className="text-sm truncate">
            Beranda
          </a>
        </li>
        <li className="bg-gray-900 px-4 py-1 text-white rounded-md">
          <a href="#header" className="text-sm truncate">
            Rekomendasi
          </a>
        </li>
        <li className="bg-gray-900 px-4 py-1 text-white rounded-md">
          <a href="#header" className="text-sm truncate">
            Profile
          </a>
        </li>
        <li className="bg-gray-900 px-4 py-1 text-white rounded-md">
          <a href="#header" className="text-sm truncate">
            Peta
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navchild;
