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
;

// hiasan
import line from "../assets/hiasan/line.png";
import lineBlack from "../assets/hiasan/line-black.png";

const musimData = [
    {
      id: "Hujan",
      image: [ hujan1, hujan2, hujan3, hujan4, hujan5, hujan6, hujan7, hujan8],
      musim: "Musim Hujan",
      cuaca: "Hujan turun hampir setiap hari, biasanya sore atau malam",
      temperatur: "25°C - 30°C",
      periode: "November - Maret",
      barang: ["Jas Hujan", "Sepatu Anti Air", "Obat Anti Nyamuk"],
      destinasi: ["Yogyakarta & Solo", "Kulineran"],
      lakukan: ["Menikmati Air Terjun", "Festival Imlek"],
    },
    {
      id: "Peralihan",
      image: [peralihan1, peralihan2, peralihan3, peralihan4, peralihan5, peralihan6, peralihan7, peralihan8],
      musim: "Musim Peralihan",
      cuaca: "Perpaduan antara cerah dan hujan",
      temperatur: "26°C - 32°C",
      periode: "Maret - April & September - Oktober",
      barang: ["Pakaian Berlapis", "Kacamata Hitam & Payung"],
      destinasi: ["Taman Nasional Komodo", "Danau Toba"],
      lakukan: ["Melihat Migrasi Burung", "Festival Tabuik"],
    },
    {
      id: "Kemarau",
      image: [kemarau1, kemarau2, kemarau3, kemarau4, kemarau5, kemarau6, kemarau7, kemarau8],
      musim: "Musim Kemarau",
      cuaca: "Cerah dan kering, hampir minim hujan",
      temperatur: "28°C - 33°C",
      periode: "April - Oktober",
      barang: ["Pakaian Ringan", "Sunscreen", "Topi & Kacamata Hitam"],
      destinasi: ["Pantai Bali", "Gunung Bromo"],
      lakukan: ["Festival Budaya", "Melihat Penyu Bertelur"],
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
    <div className="container w-full bg-gray-900 dark:bg-white items-center justify-center mx-auto lg:px-40 relative flex flex-col gap-14 md:gap-24 md:py-24 py-16 px-4">
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
      <h1 className="font-semibold md:text-4xl text-3xl text-white dark:text-black">
        Musim Terbaik Untuk Berkunjung
      </h1>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="grid grid-cols-6 grid-rows-4 gap-2 p-4 " style={{ gridTemplateColumns: "185px 185px 185px 185px 185px 185px", gridTemplateRows: "185px 185px 185px 185px" }}>
          {/* Kolom vertikal: Karakteristik, Cuaca, Temperatur, Periode */}
          <div className="row-span-4 col-span-2 flex flex-col space-y-2">
            <div className="relative flex items-center justify-center h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={selectedMusim.image[0] || ""}
                alt=""
              />
              <h1 className="absolute text-lg font-semibold text-white drop-shadow-lg">
                Karakteristik
              </h1>
            </div>
            <div className="relative flex items-center justify-center h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={selectedMusim.image[1] || ""}
                alt=""
              />
              <h1 className="absolute text-lg font-semibold text-white drop-shadow-lg">
                Cuaca Cerah
              </h1>
            </div>
            <div className="relative flex items-center justify-center h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={selectedMusim.image[2] || ""}
                alt=""
              />
              <h1 className="absolute text-lg font-semibold text-white drop-shadow-lg">
                26°C - 32°C
              </h1>
            </div>
            <div className="relative flex items-center justify-center h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={selectedMusim.image[3] || ""}
                alt=""
              />
              <h1 className="absolute text-lg font-semibold text-white drop-shadow-lg">
                Periode: Bulan
              </h1>
            </div>
          </div>

          {/* Baris 2 - Musim */}
          <div className="row-span-1 col-span-4 relative flex items-center justify-center">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={selectedMusim.image[4] || ""}
              alt=""
            />
            <h1 className="absolute text-2xl font-semibold text-white drop-shadow-lg">
              Musim Hujan
            </h1>
          </div>

          {/* Baris 3-4 - Destinasi sebagai konten utama */}
          <div className="row-span-2 col-span-2 relative">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={selectedMusim.image[5] || ""}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-center">
              <h1 className="text-2xl font-semibold text-white">
                Destinasi Menarik
              </h1>
              <h1 className="text-xl font-semibold text-white">Kota</h1>
              <h1 className="text-xl font-semibold text-white">Hutan</h1>
            </div>
          </div>

          {/* Baris 3-4 - Barang Persiapan */}
          <div className="row-span-2 col-span-2 relative">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={selectedMusim.image[6] || ""}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-center">
              <h1 className="text-2xl font-semibold text-white">
                Barang Persiapan
              </h1>
              <h1 className="text-xl font-semibold text-white">Item 1</h1>
              <h1 className="text-xl font-semibold text-white">Item 2</h1>
            </div>
          </div>
          {/* Baris 4 - Tips Berpergian */}
          <div className="row-span-1 col-span-4 relative flex items-center justify-center">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={selectedMusim.image[7] || ""}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-center">
              <h1 className="text-2xl font-semibold text-white">
                Barang Persiapan
              </h1>
              <h1 className="text-xl font-semibold text-white">Item 1</h1>
              <h1 className="text-xl font-semibold text-white">Item 2</h1>
            </div>
          </div>
        </div>

        {/* Tombol Pilih Musim */}
        <div className="py-4 mx-6">
          <div className="flex overflow-x-visible justify-between">
            {musimData.map((musim) => (
              <div
                key={musim.id}
                className="flex flex-col items-center justify-center overflow-visible mx-4 cursor-pointer"
                onClick={() => handleMusimClick(musim.id)}
              >
                <h1 className="w-max font-semibold text-lg dark:text-gray-900 text-white">{musim.musim}</h1>
                <div className={`rounded-full h-5 w-5 z-50 translate-y-3 ${
                  selectedMusim.id === musim.id ? "bg-blue-500" : "dark:bg-black bg-white"
                }`}></div>
              </div>
            ))}
          </div>
          <div className="line z-10 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-amber-200 h-1"></div>
        </div>
        {/* <div className="flex flex-col justify-center items-center text-center">
              <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-500 via-green-500 to-zinc-400 bg-clip-text text-transparent">Musim Hujan</h1>
              <p className="text-lg">Terjadi sekitar Oktober hingga Maret, ditandai dengan curah hujan tinggi yang menyebabkan udara lebih sejuk dan lembap.</p>
            </div> */}
      </div>
    </div>
  );
}

export default Musim;
