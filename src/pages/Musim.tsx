// Musim Hujan

// Musim Peralihan

// Musim Kemarau

// hiasan
import line from "../assets/hiasan/line.png";
import lineBlack from "../assets/hiasan/line-black.png";

const musimData = [
  {
    id: "Hujan",
    image: [],
    musim: "Musim Hujan",
    cuaca: "Hujan turun hampir setiap hari, biasanya sore atau malam",
    temperatur: "25°C - 30°C",
    periode: "November - Maret",
    barang: [
      "Jas Hujan atau Payung Lipat",
      "Sepatu Anti Air",
      "Obat Anti Nyamuk",
    ],
    destinasi: ["Yogyakarta & Solo", "Kulineran"],
    lakukan: [
      "Menikmati Air Terjun dengan Debit Air Tinggi",
      "Festival Imlek di Singkawang",
    ],
  },
  {
    id: "Peralihan",
    image: [],
    musim: "Musim Peralihan",
    cuaca: "Perpaduan antara cerah dan hujan, cuaca bisa berubah cepat",
    temperatur: "26°C - 32°C",
    periode: "Maret - April & September - Oktober",
    barang: ["Pakaian Berlapis", "Kacamata Hitam & Payung"],
    destinasi: ["Taman Nasional Komodo", "Danau Toba"],
    lakukan: [
      "Melihat Migrasi Burung di Kalimantan",
      "Festival Tabuik di Pariaman",
    ],
  },
  {
    id: "Kemarau",
    image: [],
    musim: "Musim Kemarau",
    cuaca: "Cerah dan kering, hampir minim hujan",
    temperatur: "28°C - 33°C",
    periode: "April - Oktober",
    barang: [
      "Pakaian Ringan",
      "Sunscreen",
      "Topi & Kacamata Hitam",
      "Sepatu atau Sandal Nyaman",
    ],
    destinasi: ["Pantai Bali & Lombok", "Raja Ampat", "Gunung Bromo & Rinjani"],
    lakukan: [
      "Festival Budaya",
      "Menyaksikan Penyu Bertelur di Pulau Derawan ",
    ],
  },
  ,
];
function Musim() {
  const handleMusimClick = (id: string) => {};
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
      <div className="w-full">
        <div className="grid grid-cols-6 grid-rows-6 gap-2 p-4">
          {/* Kolom vertikal: Karakteristik, Cuaca, Temperatur, Periode */}
          <div className="row-span-4 col-span-2 flex flex-col space-y-2">
            <div className="relative flex items-center justify-center h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={""}
                alt=""
              />
              <h1 className="absolute text-lg font-semibold text-white drop-shadow-lg">
                Karakteristik
              </h1>
            </div>
            <div className="relative flex items-center justify-center h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={""}
                alt=""
              />
              <h1 className="absolute text-lg font-semibold text-white drop-shadow-lg">
                Cuaca Cerah
              </h1>
            </div>
            <div className="relative flex items-center justify-center h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={""}
                alt=""
              />
              <h1 className="absolute text-lg font-semibold text-white drop-shadow-lg">
                26°C - 32°C
              </h1>
            </div>
            <div className="relative flex items-center justify-center h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={""}
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
              src={""}
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
              src={""}
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
              src={""}
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
              src={""}
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

        <div className="py-4 mx-6">
          <div className="flex overflow-x-visible justify-between">
            <div
              className="flex flex-col items-center justify-center overflow-visible mx-4"
              onClick={() => handleMusimClick("Hujan")}
            >
              <h1 className="w-max font-semibold text-lg">Musim Hujan</h1>
              <div className="rounded-full h-5 w-5 z-50 translate-y-3 dark:bg-black bg-white"></div>
            </div>
            <div
              className="flex flex-col items-center justify-center overflow-visible mx-4"
              onClick={() => handleMusimClick("Peralihan")}
            >
              <h1 className="w-max font-semibold text-lg">Musim Peralihan</h1>
              <div className="rounded-full h-5 w-5 z-50 translate-y-3 dark:bg-black bg-white"></div>
            </div>
            <div
              className="flex flex-col items-center justify-center overflow-visible mx-4"
              onClick={() => handleMusimClick("Kemarau")}
            >
              <h1 className="w-max font-semibold text-lg">Musim Kemarau</h1>
              <div className="rounded-full h-5 w-5 z-50 translate-y-3 dark:bg-black bg-white"></div>
            </div>
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
