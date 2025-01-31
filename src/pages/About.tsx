import { useState, useEffect } from "react";
import hiasan from "../assets/hiasan.png";
import logo from "../assets/images/logo/applogo.png";

function About() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Mengontrol overflow body saat popup terbuka
  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isPopupOpen]);

  return (
    <div
      className="relative container w-full flex mx-auto bg-gray-900 dark:bg-white"
      id="about"
    >
      <div className="header text-white dark:text-black px-4 z-10 lg:px-40 py-24 flex md:flex-row gap-8 flex-col md:items-center justify-between w-full">
        <img
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-duration="1000"
          src={hiasan}
          alt=""
          className="max-w-56 md:hidden flex"
        />
        <div
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-duration="1000"
          className="paragraph flex flex-col items-start justify-center gap-3 md:gap-6"
        >
          <h1 className="font-semibold text-3xl md:text-4xl">
            Mengenal tentang
            <br />
            Nusantravel
          </h1>
          <p className="max-w-[600px] text-base md:text-lg">
            Selamat datang di Nusantravel, platform yang memperkenalkan
            destinasi-destinasi khas Indonesia dengan sentuhan kearifan lokal.
            Kami mengajak Anda menjelajahi keindahan alam, budaya, dan tradisi
            Nusantara yang autentik, sembari menghormati lingkungan dan
            komunitas setempat.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-white hover:bg-gray-200 text-gray-900 px-4 py-3 rounded-lg text-sm font-medium items-center flex gap-1 hover:gap-2 duration-300 shadow-inner shadow-gray-600"
          >
            Pelajari selengkapnya{" "}
            <i className="ri-arrow-right-s-line ri-lg"></i>
          </button>
        </div>
        <img
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-duration="1000"
          src={hiasan}
          alt=""
          className="max-w-96 md:flex hidden"
        />
      </div>

      {/* POPUP MODAL BERGAYA MAP */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm md:p-0 px-4 pt-14">
          <div className="dark:bg-white bg-gray-900 p-6 gap-4 rounded-lg shadow-lg border border-gray-400 dark:border-none max-w-2xl w-full relative flex flex-col z-50">
            {/* Tombol close */}
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-800 dark:text-black text-xl"
              onClick={() => setIsPopupOpen(false)}
            >
              ✖
            </button>
            <h1 className="text-2xl font-semibold dark:text-black text-white">
              Latar Belakang Website
            </h1>
            <div className="content">
              <img src={logo} alt="" className="md:h-32 h-24" />
              <ul className="flex flex-col items-start w-full gap-2">
                <li className="dark:text-black text-white md:text-base text-sm">
                  <span className="font-medium md:text-xl text-lg ">
                    Tujuan{" "}
                  </span>
                  daripada website ini adalah sebagai sarana digital untuk
                  mengenalkan destinasi lokal Nusantara dimata global.
                </li>
                <li className="dark:text-black text-white md:text-base text-sm">
                  <span className="font-medium md:text-xl text-lg">
                    Harapan{" "}
                  </span>
                  kedepannya adalah destinasi wisata Nusantara dapat lebih
                  dikenal oleh warga dunia, sehingga dapat meningkatkan devisa
                  negara.
                </li>
                <li className="dark:text-black text-white md:text-base text-sm">
                  <span className="font-medium md:text-xl text-lg">
                    Alasan{" "}
                  </span>
                  kami membuat website ini karena kurangnya platform digital
                  khususnya website yang mempromosikan Destinasi Nusantara
                  secara global dan proffesional.
                </li>
              </ul>
              <div className="w-full border border-white dark:border-black my-4"></div>
              <div className="techstack  font-medium flex items-center dark:text-black text-white">
                Teknologi :
                <ul className="flex items-center ">
                  <li>
                    <i className="ri-reactjs-fill ri-2x text-[#00D8FF]"></i>
                  </li>
                  <li>
                    <i className="ri-html5-fill ri-2x text-[#E34C26]"></i>
                  </li>
                  <li>
                    <i className="ri-tailwind-css-fill ri-2x text-[#38bdf8]"></i>
                  </li>
                  <li>
                    <i className="ri-javascript-fill ri-2x text-[#F0DB4F]"></i>
                  </li>
                </ul>
              </div>
            </div>
            {/* (Konten popup masih kosong, bisa diisi nanti) */}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
