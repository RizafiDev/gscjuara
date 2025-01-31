import logo from "../assets/images/logo/applogo.png";

function Footer() {
  return (
    <div
      className="container relative bg-gray-900 dark:bg-white py-10 lg:pt-16 lg:pb-6 mx-auto px-4 lg:px-72 flex flex-col justify-center items-start gap-6 lg:gap-20  overflow-hidden"
      id="promotion"
    >
      <div className="top grid grid-cols-3 lg:space-x-32 items-start ">
        {/* item1 */}
        <div className="item1 flex flex-col gap-3 lg:gap-6">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <ul className="inline-flex items-center gap-2 lg:gap-6">
            <li>
              <a
                href="https://www.instagram.com/orionsmelody?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-white dark:text-black"
              >
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
          <ul className="inline-flex flex-col items-start gap-1 lg:gap-3">
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
        <div className="item3 flex">
          <ul className="inline-flex flex-col items-start gap-1 lg:gap-3">
            <li>
              <p className="font-semibold text-sm text-white dark:text-black">
                Community
              </p>
            </li>
            <li>
              <a href="#" className=" text-xs text-white dark:text-black">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-white dark:text-black">
                Knowledge Hub
              </a>
            </li>
          </ul>
        </div>
        {/* item 3 end */}
      </div>

      <div className="credit items-center flex justify-between w-full text-xs border-t border-gray-600 pt-5 text-white dark:text-black">
        <p>© 2025 Orion's Melody</p>
        <p>All Right Reserved</p>
      </div>
    </div>
  );
}
export default Footer;
