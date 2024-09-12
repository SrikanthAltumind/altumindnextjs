import { Link } from "react-router-dom";
import WatermarkLogo from "./WatermarkLogo";

const Footer = () => {
  return (
    <>
      <WatermarkLogo />
      <div className="dark:bg-darkTheme dark:text-white">
        <div className="px-5 md:px-0 w-[95%] font-montserrat text-sm font-medium flex flex-wrap gap-y-10 flex-col md:justify-between md:gap-10 lg:justify-normal md:flex-row mx-auto p-10">
          <div className="lg:ml-5 lg:mr-16 lg:w-[330px]">
            <p className="text-lg font-semibold pb-2">Connect</p>
            <div className="w-fit lg:w-full bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue rounded-3xl pt-2">
              <div className="bg-[#e9eaef] dark:bg-[#242932]  rounded-3xl py-3 px-5">
                <p className="font-medium pb-2">Subscribe to our insights</p>
                <div className="flex items-center dark:bg-[#50545a] px-3 rounded-full bg-white">
                  <input
                    className="border-none bg-transparent  w-full outline-none py-2"
                    type="email"
                    placeholder="Email address"
                  />
                  <svg
                    className="w-8 h-8 dark:text-white text-[#cfcfcf] cursor-pointer hover:scale-[1.1]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </div>
                <div className="py-3 flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/altumindglobal/"
                    target="_blank"
                  >
                    <svg
                      className="w-7 h-7 dark:text-white text-gray-800 cursor-pointer hover:scale-[1.1]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/altumindglobal/"
                    target="_blank"
                  >
                    <svg
                      className="w-6 h-6 dark:text-white text-gray-800 cursor-pointer hover:scale-[1.1]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/AltumindGlobal"
                    target="_blank"
                  >
                    <svg
                      className="w-6 h-6 dark:text-white text-gray-800 cursor-pointer hover:scale-[1.1]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="https://x.com/altumind" target="_blank">
                    <svg
                      className="w-5 h-5 dark:text-white text-gray-800 cursor-pointer hover:scale-[1.1]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:gap-16 gap-6">
            <div>
              <p className="text-lg font-semibold pb-2">Services</p>
              <ul className="space-y-3 dark:font-normal">
                <li>
                  <Link to="/services/experience-design">
                    Experience Design
                  </Link>
                </li>
                <li>
                  <Link to="/services/technology-and-engineering">
                    Technology and Engineering
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-and-chat-bot">AI & Automation</Link>
                </li>
                <li>
                  <Link to="services/quality-assurance-quality-control">
                    Quality Assurance & Testing Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/cloud-automation">Cloud</Link>
                </li>
                <li>
                  <Link to="/services/digital-marketing">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/services/data-analytics">Data Analytics</Link>
                </li>
                <li>
                  <Link to="/services/managed-operations">
                    Managed Operations
                  </Link>
                </li>
                <li>
                  <Link to="/services/digital-strategy-consulting">
                    Digital Strategy and Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold pb-2">Others</p>
              <ul className="space-y-3 dark:font-normal">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/career">Career</Link>
                </li>
                <li>
                  <Link to="/insights">Insights</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8 font-medium xl:ml-auto lg:w-[330px]">
            <p className="flex gap-4 dark:font-normal">
              <svg
                className="w-6 h-6 dark:text-white text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
              </svg>
              080-42242799
            </p>
            <p className="flex dark:font-normal gap-4">
              <svg
                className="w-6 h-6 dark:text-white text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
              </svg>
              <a href="mailto: info@altumindglobal.com">
                info@altumindglobal.com
              </a>
            </p>
            <p className="flex gap-4 dark:font-normal">
              <svg
                className="w-6 h-6 dark:text-white text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                  clipRule="evenodd"
                />
              </svg>
              #775, 100 Feet Rd,
              <br />
              Indiranagar, Bengaluru, KA
            </p>
          </div>
        </div>
        <div className="w-[95%] px-5 md:px-0 flex md:flex-row text-center gap-y-10 md:text-left flex-col font-montserrat text-sm items-center border-t-[0.6px] border-[#8A8A8A] py-7 mx-auto">
          <p className="font-medium mx-auto lg:pl-20">
            Copyright © 2024 Altumind Global All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy">
              <p className="border-b dark:border-white dark:font-normal border-black font-medium">
                Privacy
              </p>
            </Link>
            <Link to="/terms">
              <p className="border-b dark:border-white dark:font-normal border-black  cursor-pointer font-medium">
                Terms
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
