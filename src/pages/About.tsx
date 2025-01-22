function About() {
    return (
      <div className="relative w-full h-screen flex ">
        <div className="absolute w-full overflow-hidden -mt-24">
          <svg
            className="w-full transform scale-x-[-1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#111827"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,117.3C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="header text-white z-10 px-40">
            <h1 className="font-semibold text-4xl">Mengenal tentang<br />Nusantravel</h1>
            <p></p>
        </div>
      </div>
    );
  }
  
  export default About;
  