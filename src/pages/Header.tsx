import { useState } from "react";

function Header() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (button: string) => {
    // Jika tombol yang aktif diklik lagi, reset ke default (null)
    setActiveButton(activeButton === button ? null : button);
  };

  return (
    <div className="container mx-auto w-full items-center justify-center min-h-[650px] flex flex-col gap-6 pt-20">
      <h1 className="text-white text-5xl font-semibold max-w-[800px] text-center drop-shadow-lg">
        Temukan Surga Tersembunyi Wisata Nusantara
      </h1>
      <p className="max-w-[600px] text-center font-medium text-white drop-shadow-lg">
        "Indonesia, negeri penuh pesona dengan destinasi wisata menakjubkan.
        Dari pantai tropis hingga pegunungan megah, temukan keajaiban yang
        menanti untuk dijelajahi."
      </p>
      <div className="action text-white flex bg-gray-800 p-2 rounded-full shadow-xl">
        <button
          className={`flex items-center gap-1 py-3 px-6 rounded-full text-xs duration-200 ${
            activeButton === "beach"
              ? "bg-gray-600 text-white"
              : "bg-transparent text-gray-300"
          }`}
          onClick={() => handleClick("beach")}
        >
          <i className="ri-contrast-drop-2-line"></i>
          <p>Pantai</p>
        </button>
        <button
          className={`flex items-center gap-1 py-3 px-6 rounded-full text-xs duration-200 ${
            activeButton === "monument"
              ? "bg-gray-600 text-white"
              : "bg-transparent text-gray-300"
          }`}
          onClick={() => handleClick("monument")}
        >
          <i className="ri-ancient-pavilion-fill"></i>
          <p>Monumen</p>
        </button>
        <button
          className={`flex items-center gap-1 py-3 px-6 rounded-full text-xs duration-200 ${
            activeButton === "mount"
              ? "bg-gray-600 text-white"
              : "bg-transparent text-gray-300"
          }`}
          onClick={() => handleClick("mount")}
        >
          <i className="ri-leaf-line"></i>
          <p>Gunung</p>
        </button>
      </div>
    </div>
  );
}

export default Header;
