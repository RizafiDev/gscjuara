import hiasan from "../assets/hiasan.png";
import wave from "../assets/wave.png";
function About() {
  return (
    <div
      className="relative container w-full flex mx-auto  bg-gray-900 dark:bg-white"
      id="about"
    >
      <div className="absolute w-full md:-mt-[600px]">
        <img src={wave} alt="" className="w-full -mt-40 md:mt-4" />
      </div>
      <div className="header text-white dark:text-black px-4 z-10 lg:px-40 py-24 md:mt-28 flex md:flex-row gap-8 flex-col md:items-center justify-between w-full">
        <img src={hiasan} alt="" className="max-w-56 md:hidden flex" />
        <div className="paragraph flex flex-col items-start justify-center gap-3 md:gap-6">
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
          <a
            href="#"
            className="bg-white hover:bg-gray-200 text-gray-900 px-4 py-3 rounded-lg text-sm font-medium items-center flex gap-1 hover:gap-2 duration-300 shadow-inner shadow-gray-600"
          >
            Pelajari selengkapnya{" "}
            <i className="ri-arrow-right-s-line ri-lg"></i>
          </a>
        </div>
        <img src={hiasan} alt="" className="max-w-96 md:flex hidden" />
      </div>
    </div>
  );
}
export default About;
