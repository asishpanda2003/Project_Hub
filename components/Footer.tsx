import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between text-center md:text-left">
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <div className="flex justify-center lg:justify-start items-center h-full ml-10">
              <h2 className="font-bold text-xl">Project Hub</h2>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 lg:mb-0">
            <div className="border-t md:border-t-0 md:border-l border-gray-300 py-2 pl-0 md:pl-4 flex flex-col justify-center items-center md:items-start">
              <p className="opacity-75">
                Berhampur, Odisha <br /> India
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 lg:mb-0">
            <div className="border-t md:border-t-0 md:border-l border-gray-300 py-2 pl-0 md:pl-4 flex flex-col justify-center items-center md:items-start">
              <p className="opacity-75">
                asishkumarpanda500@gmail.com <br /> +91 7735007723
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="flex justify-center md:justify-start items-center h-full gap-4 ml-8">
              <ul className="flex space-x-4">
                <li className="w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-full flex justify-center items-center transition duration-300">
                  <a
                    href="https://github.com/asishpanda2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-white"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-full flex justify-center items-center transition duration-300">
                  <a
                    href="https://www.linkedin.com/in/asishkumarpanda07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-white"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-full flex justify-center items-center transition duration-300">
                  <a
                    href="https://www.instagram.com/heyy._asish/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-white"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-full flex justify-center items-center transition duration-300">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-white"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 mt-10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-center md:text-left">
            <div className="w-full md:w-1/2">
              <p className="text-sm opacity-75">
                &copy; 2025 projecthub.com | All Rights Reserved.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center space-x-4">
              <a
                href="#!"
                className="text-sm opacity-75 hover:opacity-100 transition duration-300"
              >
                Privacy Policy
              </a>
              <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
              <a
                href="#!"
                className="text-sm opacity-75 hover:opacity-100 transition duration-300"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
