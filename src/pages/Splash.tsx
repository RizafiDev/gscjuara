import { useEffect } from "react";
import gsap from "gsap";
import racana from "../assets/images/logo/racana.png";
import utp from "../assets/images/logo/utp.png";
import sambernyawa from "../assets/images/logo/sambernyawa.png";
import dewisartika from "../assets/images/logo/dewisartika.png";

function Splash() {
  useEffect(() => {
    // Menambahkan overflow: hidden ke body
    document.body.style.overflow = "hidden";

    // GSAP animation for splash screen
    gsap.fromTo(
      "#splash",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 3,
        delay: 3.6,
        onComplete: () => {
          // Menghapus z-index setelah animasi selesai
          const splash = document.getElementById("splash");
          if (splash) {
            splash.style.zIndex = "-1";
          }
          // Mengembalikan overflow ke auto setelah animasi selesai
          document.body.style.overflow = "auto";
        },
      }
    );

    gsap.fromTo(
      "#logo",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      "#deskripsi",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.7,
      }
    );

    // Membersihkan style overflow jika komponen dibersihkan sebelum animasi selesai
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div
      id="splash"
      className="splash absolute z-50 w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="brand flex flex-col items-center justify-center gap-3">
        <div className="img flex items-center justify-center gap-4">
          <img id="logo" src={utp} alt="Neptune Music Logo" className="h-20" />
          <img
            id="logo"
            src={racana}
            alt="Neptune Music Logo"
            className="h-20"
          />
          <img
            id="logo"
            src={sambernyawa}
            alt="Neptune Music Logo"
            className="h-20"
          />
          <img
            id="logo"
            src={dewisartika}
            alt="Neptune Music Logo"
            className=" h-20"
          />
        </div>
        <div className="des flex flex-col items-center" id="deskripsi">
          <p className="text-white font-medium text-lg">
            Ganesha Scout Competition #6
          </p>
          <p className="text-white font-medium text-lg">
            Desain Inovasi Website
          </p>
        </div>
      </div>
    </div>
  );
}

export default Splash;
