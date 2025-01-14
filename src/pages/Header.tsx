import { useState } from "react";
function Header() {
  return (
    <div className="container w-full items-center justify-center min-h-[600px] flex flex-col gap-6">
      <h1 className="text-white text-5xl font-semibold max-w-[800px] text-center drop-shadow-lg">
        Temukan Surga Tersembunyi Wisata Nusantara
      </h1>
      <p className="max-w-[600px] text-center font-medium text-white drop-shadow-lg">
        "Indonesia, negeri penuh pesona dengan destinasi wisata menakjubkan.
        Dari pantai tropis hingga pegunungan megah, temukan keajaiban yang
        menanti untuk dijelajahi."
      </p>
      <div className="action text-white flex bg-gray-800 p-2 rounded-full shadow-xl">
        <div className="beach flex items-center gap-1 bg-gray-600 py-3 px-7 rounded-full text-xs">
          <i className="ri-contrast-drop-2-line"></i>
          <p>Beach</p>
        </div>
        <div className="beach flex items-center gap-1  py-3 px-7 rounded-full text-xs">
          <i className="ri-ancient-pavilion-fill"></i>
          <p>Monument</p>
        </div>
        <div className="beach flex items-center gap-1  py-3 px-7 rounded-full text-xs">
          <i className="ri-leaf-line"></i>
          <p>Mount</p>
        </div>
      </div>
    </div>
  );
}
export default Header;
