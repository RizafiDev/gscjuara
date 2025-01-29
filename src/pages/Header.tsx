import { useState } from "react";

function Header() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (button: string) => {
    // Jika tombol yang aktif diklik lagi, reset ke default (null)
    setActiveButton(activeButton === button ? null : button);
  };

  return (
    <div
      className="container mx-auto md:px-0 px-4 w-full items-center justify-center  md:min-h-[650px] flex flex-col gap-4 md:gap-6 pb-12 pt-28 md:pt-32"
      id="header"
    >
      <h1 className="text-white  text-3xl md:text-5xl font-semibold max-w-[800px] text-center drop-shadow-lg overflow-y-hidden">
        Temukan Surga Tersembunyi Wisata Nusantara
      </h1>
      <p className="md:max-w-[600px] md:text-base text-xs text-center font-medium text-white drop-shadow-lg">
        "Indonesia, negeri penuh pesona dengan destinasi wisata menakjubkan.
        Dari pantai tropis hingga pegunungan megah, temukan keajaiban yang
        menanti untuk dijelajahi."
      </p>
      <div className="action sticky top-10 text-white dark:text-black flex bg-gray-800 dark:bg-white  p-2 rounded-full shadow-xl w-full md:w-fit justify-between">
        <button
          className={`flex items-center gap-1 py-3 px-6 rounded-full text-xs duration-200 ${
            activeButton === "beach"
              ? "bg-gray-600 dark:bg-white dark:shadow-inner dark:shadow-gray-400 dark:text-black text-white"
              : "bg-transparen"
          }`}
          onClick={() => handleClick("beach")}
        >
          <i className="ri-contrast-drop-2-line"></i>
          <p>Pantai</p>
        </button>
        <button
          className={`flex items-center gap-1 py-3 px-6 rounded-full text-xs duration-200 ${
            activeButton === "monument"
              ? "bg-gray-600 dark:bg-white dark:shadow-inner dark:shadow-gray-400 dark:text-black text-white"
              : "bg-transparent "
          }`}
          onClick={() => handleClick("monument")}
        >
          <i className="ri-ancient-pavilion-fill"></i>
          <p>Monumen</p>
        </button>
        <button
          className={`flex items-center gap-1 py-3 px-6 rounded-full text-xs duration-200 ${
            activeButton === "mount"
              ? "bg-gray-600 dark:bg-white dark:shadow-inner dark:shadow-gray-400 dark:text-black text-white"
              : "bg-transparent "
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
