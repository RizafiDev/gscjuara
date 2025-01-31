import { useState } from "react";

// Musim Hujan
import hujan1 from "../assets/images/musim/hujan/hujan1.png";
import hujan2 from "../assets/images/musim/hujan/hujan2.jpg";
import hujan3 from "../assets/images/musim/hujan/hujan3.jpg";
import hujan4 from "../assets/images/musim/hujan/hujan4.jpg";
import hujan5 from "../assets/images/musim/hujan/hujan5.jpeg";
import hujan6 from "../assets/images/musim/hujan/hujan6.jpeg";
import hujan7 from "../assets/images/musim/hujan/hujan7.png";
import hujan8 from "../assets/images/musim/hujan/hujan8.jpeg";
// Musim Peralihan
import peralihan1 from "../assets/images/musim/peralihan/peralihan1.jpg";
import peralihan2 from "../assets/images/musim/peralihan/peralihan2.jpg";
import peralihan3 from "../assets/images/musim/peralihan/peralihan3.jpg";
import peralihan4 from "../assets/images/musim/peralihan/peralihan4.jpg";
import peralihan5 from "../assets/images/musim/peralihan/peralihan5.jpg";
import peralihan6 from "../assets/images/musim/peralihan/peralihan6.jpg";
import peralihan7 from "../assets/images/musim/peralihan/peralihan7.jpg";
import peralihan8 from "../assets/images/musim/peralihan/peralihan8.jpg";

// Musim Kemarau
import kemarau1 from "../assets/images/musim/kemarau/kemarau1.jpg";
import kemarau2 from "../assets/images/musim/kemarau/kemarau2.jpg";
import kemarau3 from "../assets/images/musim/kemarau/kemarau3.jpg";
import kemarau4 from "../assets/images/musim/kemarau/kemarau4.jpg";
import kemarau5 from "../assets/images/musim/kemarau/kemarau5.jpg";
import kemarau6 from "../assets/images/musim/kemarau/kemarau6.jpg";
import kemarau7 from "../assets/images/musim/kemarau/kemarau7.jpg";
import kemarau8 from "../assets/images/musim/kemarau/kemarau8.jpg";
// hiasan
import line from "../assets/hiasan/line.png";
import lineBlack from "../assets/hiasan/line-black.png";

const musimData = [
  {
    id: "Hujan",
    image: [hujan1, hujan2, hujan3, hujan4, hujan5, hujan6, hujan7, hujan8],
    musim: "Musim Hujan",
    cuaca: "Hujan turun hampir setiap hari",
    temperatur: "25°C - 30°C",
    periode: "November - Maret",
    barang: ["Jas Hujan", "Sepatu Anti Air", "Obat Anti Nyamuk"],
    destinasi: ["Yogyakarta", "Solo"],
    lakukan: ["Menikmati Air Terjun", "Festival Imlek"],
    tips: ["Gunakan pakaian cepat kering", "Selalu bawa jas hujan atau payung"],
  },
  {
    id: "Peralihan",
    image: [
      peralihan1,
      peralihan2,
      peralihan3,
      peralihan4,
      peralihan5,
      peralihan6,
      peralihan7,
      peralihan8,
    ],
    musim: "Musim Peralihan",
    cuaca: "Perpaduan antara cerah dan hujan",
    temperatur: "26°C - 32°C",
    periode: "Maret - April & September - Oktober",
    barang: ["Pakaian Berlapis", "Kacamata Hitam & Payung"],
    destinasi: ["Taman Nasional Komodo", "Danau Toba"],
    lakukan: ["Melihat Migrasi Burung", "Festival Tabuik"],
    tips: ["Lihat prakiraan cuaca", "Waspadai perubahan cuaca"],
  },
  {
    id: "Kemarau",
    image: [
      kemarau1,
      kemarau2,
      kemarau3,
      kemarau4,
      kemarau5,
      kemarau6,
      kemarau7,
      kemarau8,
    ],
    musim: "Musim Kemarau",
    cuaca: "Cerah dan kering, hampir minim hujan",
    temperatur: "28°C - 33°C",
    periode: "April - Oktober",
    barang: ["Pakaian Ringan", "Sunscreen", "Topi & Kacamata Hitam"],
    destinasi: ["Pantai Bali", "Gunung Bromo"],
    lakukan: ["Festival Budaya", "Melihat Penyu Bertelur"],
    tips: ["Gunakan sunscreen", "Jangan terlalu lama di luar"],
  },
];

const Musim: React.FC = () => {
  const [selectedMusim, setSelectedMusim] = useState(musimData[0]);

  const handleMusimClick = (id: string) => {
    const data = musimData.find((musim) => musim?.id === id);
    if (data) {
      setSelectedMusim(data);
    }
  };
  return (
    <div
      id="musim"
      className="container overflow-x-hidden w-full h-max bg-gray-900 dark:bg-white items-center justify-center mx-auto lg:px-40 relative flex flex-col md:gap-24 md:py-24 py-16 px-4"
    >
      <img
        src={line}
        className="w-full dark:hidden absolute top-0 md:px-40 px-4"
        alt=""
      />
      <img
        src={lineBlack}
        className="w-full hidden dark:flex absolute top-0 md:px-40 px-4"
        alt=""
      />

      <h1
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1000"
        className="font-semibold md:text-4xl text-3xl text-white dark:text-black overflow-visible"
      >
        Musim Terbaik Untuk Berkunjung
      </h1>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="grid grid-cols-6 grid-rows-[repeat(4,minmax(0,1fr))] gap-2 p-2 md:p-4 w-full h-[70vh] md:h-[80vh]">
          {/* Kolom vertikal: Karakteristik dengan gambar */}
          <div className="row-span-4 col-span-2 grid grid-rows-4 gap-2">
            {[0, 1, 2, 3].map((index) => (
              <div
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
                key={index}
                className="relative flex items-center justify-center h-full"
              >
                {index === 0 ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-2 text-center rounded-lg z-10">
                    <h1 className="text-xs md:text-lg font-semibold text-white drop-shadow-lg">
                      Karakteristik
                    </h1>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-2 text-center rounded-lg z-10">
                    <h1 className="text-xs md:text-lg font-semibold text-white drop-shadow-lg">
                      {index === 1
                        ? selectedMusim.cuaca
                        : index === 2
                        ? `Suhu Antara ${selectedMusim.temperatur}`
                        : `Periode ${selectedMusim.periode}`}
                    </h1>
                  </div>
                )}
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50"
                  src={selectedMusim.image[index] || ""}
                  alt={`Karakteristik ${index}`}
                />
              </div>
            ))}
          </div>

          {/* Baris 2 - Musim */}
          <div
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-duration="1000"
            className="row-span-1 col-span-4 relative flex items-center justify-center"
          >
            <img
              className="object-cover w-full h-full rounded-lg"
              src={selectedMusim.image[4] || ""}
              alt={selectedMusim.musim}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
              <h1 className="text-lg md:text-2xl font-semibold text-white drop-shadow-lg">
                {selectedMusim.musim}
              </h1>
            </div>
          </div>

          {/* Destinasi Menarik */}
          <div
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-duration="1000"
            className="row-span-2 col-span-2 relative"
          >
            <img
              className="object-cover w-full h-full rounded-lg"
              src={selectedMusim.image[5] || ""}
              alt="Destinasi Menarik"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-2 text-center rounded-lg">
              <h1 className="text-sm md:text-xl font-semibold text-white mb-1">
                Destinasi Menarik
              </h1>
              {selectedMusim.destinasi.map((dest, index) => (
                <h1 key={index} className="text-xs md:text-lg text-white">
                  {dest}
                </h1>
              ))}
            </div>
          </div>

          {/* Barang Persiapan */}
          <div
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="row-span-2 col-span-2 relative"
          >
            <img
              className="object-cover w-full h-full rounded-lg"
              src={selectedMusim.image[6] || ""}
              alt="Persiapan Barang"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-2 text-center rounded-lg">
              <h1 className="text-sm md:text-xl font-semibold text-white mb-1">
                Persiapkan Barang
              </h1>
              {selectedMusim.barang.map((item, index) => (
                <h1 key={index} className="text-xs md:text-lg text-white">
                  {item}
                </h1>
              ))}
            </div>
          </div>

          {/* Tips Berpergian */}
          <div
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="1000"
            className="row-span-1 col-span-4 relative flex items-center justify-center"
          >
            <img
              className="object-cover w-full h-full rounded-lg"
              src={selectedMusim.image[7] || ""}
              alt="Tips Pergi"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-2 text-center rounded-lg">
              <h1 className="text-sm md:text-lg font-semibold text-white mb-1">
                Tips Pergi
              </h1>
              {selectedMusim.tips.map((tip, index) => (
                <h1 key={index} className="text-xs md:text-lg text-white">
                  {tip}
                </h1>
              ))}
            </div>
          </div>
        </div>

        {/* Tombol Pilih Musim */}
        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="py-4 w-full mx-6"
        >
          <div className="flex overflow-x-visible justify-between">
            {musimData.map((musim) => (
              <div
                key={musim.id}
                className="flex flex-col items-center justify-center overflow-visible mx-1 md:mx-4 cursor-pointer "
                onClick={() => handleMusimClick(musim.id)}
              >
                <h1 className="w-max font-semibold sm:text-lg duration-150 transition-all ease-in-out dark:text-gray-900 text-white text-xs hover:-translate-y-1">
                  {musim.musim}
                </h1>
                <div
                  className={`rounded-full h-5 w-5 z-50 translate-y-3 ${
                    selectedMusim.id === musim.id
                      ? "bg-blue-500"
                      : "dark:bg-black bg-white"
                  }`}
                ></div>
              </div>
            ))}
          </div>
          <div className="w-full line z-10 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-amber-200 h-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Musim;
