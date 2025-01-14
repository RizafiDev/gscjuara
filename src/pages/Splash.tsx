import { useEffect } from "react";
import gsap from "gsap";
import logo from "../assets/images/logo/racana.png";

function Splash() {
  useEffect(() => {
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
      "#garis",
      { opacity: 0,x: -20 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay:1,
      }
    );

    gsap.fromTo(
      "#deskripsi",

      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 1.7,
      }
    );
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div
      id="splash"
      className="splash absolute z-50 w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="brand flex items-center justify-center gap-3">
        <img
          id="logo"
          src={logo}
          alt="Neptune Music Logo"
          className="w-20 h-20"
        />
        <div className="w-[2px] h-16 bg-white" id="garis"></div>
        <div className="des flex flex-col items-start" id="deskripsi">
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