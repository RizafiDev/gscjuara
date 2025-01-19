import rajaAmpat from "../assets/images/card/raja-ampat.jpg";
import tnpKomodo from "../assets/images/card/tn-pulau-komodo.jpg";
import tnBTS from "../assets/images/card/tnbts.jpg";

function Card() {
  const scrollLeft = () => {
    const container = document.getElementById("card-container");
    if (container) {
      container.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("card-container");
    if (container) {
      container.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container w-full mx-auto items-center justify-center px-10 md:px-40 flex flex-col gap-8">
      {/* Header */}
      <div className="header flex w-full items-center max-md:justify-center md:justify-between">
        <div className="layer gap-5 flex items-center">
          <h1 className="font-medium text-white drop-shadow-xl">
            Destinasi Favorit
          </h1>
          <div className="badge text-white bg-gray-800 flex items-center w-fit gap-1 py-2 px-4 rounded-full shadow-xl">
            <i className="ri-star-smile-line ri-xs"></i>
            <p className="text-xs">Pengalaman Terbaik</p>
          </div>
        </div>
        <div className="navigation flex items-center bg-white rounded-full p-2 h-8 text-gray-800">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full transition-all hover:bg-gray-200"
          >
            <i className="ri-arrow-left-s-line ri-xl text-gray-800"></i>
          </button>
          <div className="h-4 rounded-full w-[2px] bg-gray-800 mx-2"></div>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full transition-all hover:bg-gray-200"
          >
            <i className="ri-arrow-right-s-line ri-xl text-gray-800"></i>
          </button>
        </div>
      </div>

      {/* Card Section */}
      <div
        id="card-container"
        className="card-section flex w-full items-center gap-4 overflow-hidden scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* Card 1 */}
        <div
          className="card-1 h-[380px] rounded-[25px] w-72 overflow-hidden p-[6px] bg-gray-900 relative flex-shrink-0"
          style={{ scrollSnapAlign: "start" }}
        >
          <img
            src={rajaAmpat}
            alt="Raja Ampat"
            className="w-full h-full object-cover rounded-[19px]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[800px] bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-[19px]"></div>
          <div className="text absolute bottom-0 p-4 left-0 right-0  w-full h-full flex flex-col justify-between">
            <div className="top flex items-center justify-between">
              <div className="flex items-center text-white bg-gray-900 py-[6px] px-3 rounded-full w-fit text-xs gap-1">
                <i className="ri-star-fill"></i>
                <p>4.7/5</p>
              </div>
              <div className="p-2 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                <i className="ri-heart-2-line text-white"></i>
              </div>
            </div>
            <div className="desc text-white flex flex-col items-start mb-2">
              <h1 className="text-lg font-medium">Raja Ampat</h1>
              <p className="text-xs max-w-56">
                Surga tropis dengan keindahan bawah laut terbaik di dunia.
              </p>
              <div className="badge grid grid-cols-3 gap-2 my-3">
                <div className="Laut flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-contrast-drop-2-line ri-xs"></i>
                  <p className="text-xs">Laut</p>
                </div>
                <div className="Diving flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-earth-line ri-xs"></i>
                  <p className="text-xs">Diving</p>
                </div>
                <div className="Alam flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-tree-line ri-xs"></i>
                  <p className="text-xs">Alam</p>
                </div>
                <div className="Family flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-user-community-line ri-xs"></i>
                  <p className="text-xs">Family</p>
                </div>
                <div className="Pulau flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-tent-line ri-xs"></i>
                  <p className="text-xs">Pulau</p>
                </div>
              </div>
              <div className="harga text-2xl">
                $70<span className="text-gray-400 text-sm">/orang</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="card-1 h-[380px] rounded-[25px] w-72 overflow-hidden p-[6px] bg-gray-900 relative flex-shrink-0"
          style={{ scrollSnapAlign: "start" }}
        >
          <img
            src={tnpKomodo}
            alt="Raja Ampat"
            className="w-full h-full object-cover rounded-[19px]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[800px] bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-[19px]"></div>
          <div className="text absolute bottom-0 p-4 left-0 right-0  w-full h-full flex flex-col justify-between">
            <div className="top flex items-center justify-between">
              <div className="flex items-center text-white bg-gray-900 py-[6px] px-3 rounded-full w-fit text-xs gap-1">
                <i className="ri-star-fill"></i>
                <p>4.7/5</p>
              </div>
              <div className="p-2 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                <i className="ri-heart-2-line text-white"></i>
              </div>
            </div>
            <div className="desc text-white flex flex-col items-start mb-2">
              <h1 className="text-lg font-medium">TN Pulau Komodo</h1>
              <p className="text-xs max-w-56">
                Tempat dimana keindahan flora dan fauna ada di satu tempat.
              </p>
              <div className="badge grid grid-cols-3 gap-2 my-3">
                <div className="Laut flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-contrast-drop-2-line ri-xs"></i>
                  <p className="text-xs">Laut</p>
                </div>
                <div className="Diving flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-earth-line ri-xs"></i>
                  <p className="text-xs">Diving</p>
                </div>
                <div className="Alam flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-tree-line ri-xs"></i>
                  <p className="text-xs">Alam</p>
                </div>
                <div className="Family flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-user-community-line ri-xs"></i>
                  <p className="text-xs">Family</p>
                </div>
                <div className="Pulau flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-tent-line ri-xs"></i>
                  <p className="text-xs">Pulau</p>
                </div>
                <div className="Pulau flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-evernote-line"></i>
                  <p className="text-xs">Fauna</p>
                </div>
              </div>
              <div className="harga text-2xl">
                $70<span className="text-gray-400 text-sm">/orang</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="card-1 h-[380px] rounded-[25px] w-72 overflow-hidden p-[6px] bg-gray-900 relative flex-shrink-0"
          style={{ scrollSnapAlign: "start" }}
        >
          <img
            src={tnBTS}
            alt="Raja Ampat"
            className="w-full h-full object-cover rounded-[19px]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[800px] bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-[19px]"></div>
          <div className="text absolute bottom-0 p-4 left-0 right-0  w-full h-full flex flex-col justify-between">
            <div className="top flex items-center justify-between">
              <div className="flex items-center text-white bg-gray-900 py-[6px] px-3 rounded-full w-fit text-xs gap-1">
                <i className="ri-star-fill"></i>
                <p>4.7/5</p>
              </div>
              <div className="p-2 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                <i className="ri-heart-2-line text-white"></i>
              </div>
            </div>
            <div className="desc text-white flex flex-col items-start mb-2">
              <h1 className="text-lg font-medium">TN Bromo Tengger Semeru</h1>
              <p className="text-xs max-w-56">
                Memandang alam dari atas gunung.
              </p>
              <div className="badge grid grid-cols-3 gap-2 my-3">
                <div className="Laut flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-triangle-line"></i>
                  <p className="text-xs">Gunung</p>
                </div>
                <div className="Alam flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-tree-line ri-xs"></i>
                  <p className="text-xs">Alam</p>
                </div>
                <div className="Family flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-user-community-line ri-xs"></i>
                  <p className="text-xs">Family</p>
                </div>
                <div className="Pulau flex items-center gap-1 bg-gray-700 py-1 px-3 rounded-full">
                  <i className="ri-evernote-line"></i>
                  <p className="text-xs">Fauna</p>
                </div>
              </div>
              <div className="harga text-2xl">
                $70<span className="text-gray-400 text-sm">/orang</span>
              </div>
            </div>
          </div>
        </div>
        {/* Tambahkan lebih banyak card dengan struktur yang sama */}
      </div>
    </div>
  );
}

export default Card;
