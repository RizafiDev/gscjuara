import React from "react";
import BgImg from "../assets/images/background.jpg";

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="w-full h-[1400px] relative">
      {/* Background Image */}
      <img
        src={BgImg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 -z-10"></div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </main>
  );
};

export default Background;
