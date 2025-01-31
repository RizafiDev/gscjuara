import logo from "../assets/images/logo/applogo.png";
import logoWhite from "../assets/images/logo/applogowhite.png";
import line from "../assets/hiasan/line.png";
import lineBlack from "../assets/hiasan/line-black.png";
import sambernyawa from "../assets/images/logo/sambernyawa.png";
import dewisartika from "../assets/images/logo/dewisartika.png";
import utp from "../assets/images/logo/utp.png";
import racana from "../assets/images/logo/racana.png";

function Footer() {
  return (
    <div
      className="container relative lg:px-40 px-4 flex flex-col w-full items-center justify-between py-20 md:gap-16 gap-8 mx-auto bg-gray-900 dark:bg-white"
      id="footer"
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
      <div className="top flex  justify-between md:space-x-32 items-end w-full">
        {/* item1 */}
        <div className="item1 flex flex-col gap-3 md:gap-6 ">
          <div className="logo flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="h-10 object-cover dark:flex hidden"
            />
            <img
              src={logoWhite}
              alt="logo"
              className="h-10 object-cover flex dark:hidden"
            />
            <img src={utp} alt="logo" className="h-10 object-cover" />
            <img src={racana} alt="logo" className="w-10 h-10" />
            <img src={sambernyawa} alt="logo" className=" h-10 object-cover" />
            <img src={dewisartika} alt="logo" className="h-10 object-cover" />
          </div>

          <ul className="inline-flex items-center gap-2 md:gap-6">
            <li>
              <a href="" className="text-white dark:text-black">
                <i className="ri-instagram-line "></i>
              </a>
            </li>
            <li>
              <a href="" className="text-white dark:text-black">
                <i className="ri-tiktok-fill"></i>
              </a>
            </li>
          </ul>
          <p className="text-xs text-white dark:text-black">
            <i className="ri-map-pin-2-line"></i> Surakarta, Central Java,
            Indonesia
          </p>
        </div>
        {/* item 1 end */}
        {/* item2 */}
        <div className="item2 flex">
          <ul className="inline-flex flex-col items-end gap-1 md:gap-3">
            <li>
              <p className="font-semibold text-sm text-white dark:text-black">
                Contact
              </p>
            </li>
            <li>
              <a href="#" className="text-xs text-white dark:text-black">
                Term of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-white dark:text-black">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-white dark:text-black">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        {/* item 2 end */}
        {/* item3 */}

        {/* item 3 end */}
      </div>

      <div className="credit items-center flex justify-between w-full text-xs border-t border-gray-600 pt-5 text-white dark:text-black">
        <p>© 2025 Kopramsega</p>
        <p>All Right Reserved</p>
      </div>
    </div>
  );
}
export default Footer;
