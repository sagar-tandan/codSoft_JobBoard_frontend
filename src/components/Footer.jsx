import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import job from "../assets/jobLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <NavLink
              to={"/"}
              className="flex items-center text-gray-800 text-2xl font-bold"
            >
              <img className="w-10 h-10" src={job} alt="" />
              <span className="mr-2 text-green-600">JobBoard</span>
            </NavLink>
            <p className="mt-2 text-gray-600">
              Your one-stop platform for all job needs.
            </p>
          </div>
          <div className="w-full md:w-2/3 flex justify-around">
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                Tech Stack
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a
                    href="https://react.dev/"
                    target="_blank"
                    className="hover:text-gray-800"
                  >
                    Frontend Fun
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://nodejs.org/en"
                    target="_blank"
                    className="hover:text-gray-800"
                  >
                    Server Side Kick
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    className="hover:text-gray-800"
                  >
                    Data Dynamo
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="hover:text-gray-800"
                  >
                    Styling Simplified
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                Stay Connected
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a
                    href="https://github.com/sagar-tandan"
                    target="_blank"
                    className="hover:text-gray-800"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sagar-tandan-a1b3b2298/"
                    target="_blank"
                    className="hover:text-gray-800"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                Legal Stuff
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a href="/" className="hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-gray-800">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t border-gray-300 pt-6">
          <span className="text-sm text-gray-600">
            &copy; 2024{" "}
            <a href="/" className="hover:underline">
              JOBBOARD
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/sagartandan333"
              target="_blank"
              className="text-gray-600 hover:text-gray-800"
            >
              <FaFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/sagartandan_/"
              target="_blank"
              className="text-gray-600 hover:text-gray-800"
            >
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="https://github.com/sagar-tandan"
              target="_blank"
              className="text-gray-600 hover:text-gray-800"
            >
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sagar-tandan-a1b3b2298/"
              target="_blank"
              className="text-gray-600 hover:text-gray-800"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">Linkedin account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
