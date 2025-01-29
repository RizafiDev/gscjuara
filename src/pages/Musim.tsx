import kalimantan2 from "../assets/images/maps/kalimantan/2.jpg";
import kalimantan4 from "../assets/images/maps/kalimantan/4.jpg";
import kalimantan5 from "../assets/images/maps/kalimantan/6.jpg";

const musimData = [
  {
    musim: "Kemarau",
    cuaca: "Cerah dan kering, hampir minim hujan",
    temperatur: "28°C - 33°C",
    periode:"April - Oktober",
    barang: [
      "Pakaian Ringan",
      "Sunscreen",
      "Topi & Kacamata Hitam",
      "Sepatu atau Sandal Nyaman"
    ],
    destinasi: [
      "Pantai Bali & Lombok",
      "Raja Ampat",
      "Gunung Bromo & Rinjani"
    ],
    halIndah: [
      "Festival Budaya",
      "Menyaksikan Penyu Bertelur di Pulau Derawan"
    ]
  },
  {
    musim: "Hujan",
    cuaca: "Hujan turun hampir setiap hari, biasanya sore atau malam",
    temperatur: "25°C - 30°C",
    periode:"November - Maret",
    barang: [
      "Jas Hujan atau Payung Lipat",
      "Sepatu Anti Air",
      "Obat Anti Nyamuk"
    ],
    destinasi: [
      "Yogyakarta & Solo",
      "Kulineran"
    ],
    halIndah: [
      "Menikmati Air Terjun dengan Debit Air Tinggi",
      "Festival Imlek di Singkawang"
    ]
  },
  {
    musim: "Peralihan",
    cuaca: "Perpaduan antara cerah dan hujan, cuaca bisa berubah cepat",
    temperatur: "26°C - 32°C",
    periode:"Maret - April & September - Oktober",
    barang: [
      "Pakaian Berlapis",
      "Kacamata Hitam & Payung"
    ],
    destinasi: [
      "Taman Nasional Komodo",
      "Danau Toba"
    ],
    halIndah: [
      "Melihat Migrasi Burung di Kalimantan",
      "Festival Tabuik di Pariaman"
    ]
  }
];
function Musim() {
  const handleMusimClick = () => {
    const musim = document.getElementById("")
  }
  return (
    <div className="container w-full bg-gray-900 dark:bg-white items-center justify-center mx-auto lg:px-40 relative flex flex-col gap-14 md:gap-24 md:py-24 py-16 px-4">
      <h1 className="text-4xl font-bold  dark:text-black text-white">Musim Terbaik Untuk Berkunjung</h1>
      <div className="w-full">
        <div className="absolute z-20 rounded-lg backdrop-blur w-full h-full">
          <div className="">
            <h1 className="font-semibold text-xl text-white"></h1>
            <h2 className=""></h2>
            <h3 className=""></h3>
            <h2 className=""></h2>
            <h3 className=""></h3>
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-5 grid-rows-3 gap-1">
            <div className="row-span-3 col-span-2">
              <img className="object-cover w-full h-full rounded-lg" src={kalimantan2} alt="" />
            </div>
            <div className="row-span-2 col-span-1">
              <img className="object-cover w-full h-full rounded-lg" src={kalimantan4} alt="" />
            </div>
            <div className="row-span-1 col-span-2">
              <img className="object-cover w-full h-full rounded-lg" src={kalimantan5} alt="" />
            </div>
            <div className="row-span-2 col-span-2">
              <img className="object-cover w-full h-full rounded-lg" src={kalimantan2} alt="" />
            </div>
            <div className="row-span-1 col-span-1">
              <img className="object-cover w-full h-full rounded-lg" src={kalimantan2} alt="" />
            </div>
          </div>
        </div>

        <div className="py-4 mx-6">
          <div className="flex overflow-x-visible justify-between">
            <div className="flex flex-col items-center justify-center overflow-visible mx-4">
              <h1 className="w-max font-semibold text-lg">Musim Hujan</h1>
              <div className="rounded-full h-5 w-5 z-50 translate-y-3 dark:bg-black bg-white"></div>
            </div>
            <div className="flex flex-col items-center justify-center overflow-visible mx-4">
              <h1 className="w-max font-semibold text-lg">Musim Peralihan</h1>
              <div className="rounded-full h-5 w-5 z-50 translate-y-3 dark:bg-black bg-white"></div>
            </div>
            <div className="flex flex-col items-center justify-center overflow-visible mx-4">
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
