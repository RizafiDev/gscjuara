import hiasan from "../assets/hiasan.png";
import wave from "../assets/wave.png";
function About() {
  return (
    <div className="relative container w-full flex mx-auto" id="about">
      <div className="absolute w-full overflow-hidden -mt-[600px]">
        <img src={wave} alt="" className="w-full -mt-11" />
      </div>
      <div className="header text-white z-10 md:px-40 my-20 flex items-center justify-between w-full">
        <div className="paragraph flex flex-col items-start justify-center gap-6">
          <h1 className="font-semibold text-4xl">
            Mengenal tentang
            <br />
            Nusantravel
          </h1>
          <p className="max-w-[600px] text-lg">
            Selamat datang di Nusantravel, platform yang memperkenalkan
            destinasi-destinasi khas Indonesia dengan sentuhan kearifan lokal.
            Kami mengajak Anda menjelajahi keindahan alam, budaya, dan tradisi
            Nusantara yang autentik, sembari menghormati lingkungan dan
            komunitas setempat.
          </p>
          <a
            href="#"
            className="bg-white text-gray-900 px-4 py-3 rounded-lg text-sm font-medium items-center flex gap-1 hover:gap-2 duration-300 shadow-inner shadow-gray-600"
          >
            Pelajari selengkapnya{" "}
            <i className="ri-arrow-right-s-line ri-lg"></i>
          </a>
        </div>
        <img src={hiasan} alt="" className="max-w-96" />
      </div>
    </div>
  );
}
export default About;
