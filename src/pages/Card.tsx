import rajaAmpat from "../assets/images/card/raja-ampat.jpg";
function Card() {
  return (
    <div className="container w-full mx-auto items-center justify-center px-40 flex flex-col">
      <div className="header flex w-full items-center justify-between">
        <div className="layer gap-5 flex items-center">
          <h1 className="font-medium text-white drop-shadow-xl">
            Destinasi Favorit
          </h1>
          <div className="badge text-white bg-gray-800 flex items-center w-fit gap-1 py-2 px-4 rounded-full shadow-xl">
            <i className="ri-star-smile-line ri-xs"></i>
            <p className="text-xs">Pengalaman Terbaik</p>
          </div>
        </div>
        <div className="navigaion flex items-center bg-white rounded-full p-2 h-8 text-gray-800">
          <i className="ri-arrow-left-s-line ri-xl text-gray-800"></i>
          <div className="h-4 rounded-full w-[2px] bg-gray-800 mx-2"></div>
          <i className="ri-arrow-right-s-line ri-xl text-gray-800"></i>
        </div>
      </div>
      <div className="card-section">
        <div className="card-1 h-[380px] rounded-[25px] w-72 overflow-hidden p-[6px] bg-gray-900 relative">
          {/* Gambar */}
          <img
            src={rajaAmpat}
            alt="Raja Ampat"
            className="w-full h-full object-cover rounded-[19px]"
          />

          {/* Layer Gradasi */}
          <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-[19px]"></div>
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
            <div className="desc text-white flex flex-col items-start">
              <h1 className="text-lg font-medium">Raja Ampat</h1>
              <p className="text-xs max-w-56">
                Surga tropis dengan keindahan bawah laut terbaik di dunia.
              </p>
              <div className="badge">
                <div className="Laut"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
