import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  MdLocalMovies,
  MdTheaterComedy,
  MdSportsSoccer,
  MdEvent,
} from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { PiStarFour } from "react-icons/pi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import logo from "@/assets/logos/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="dark:bg-[#111111] dark:text-white font-[Quicksand] text-black py-10 mb-4">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex space-x-2 items-center mb-4">
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo"
                className="w-[55px] h-9 cursor-pointer hover:opacity-75"
              />
            </Link>
          </div>
          <div className="mb-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-36 cursor-pointer hover:opacity-75"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-36 cursor-pointer hover:opacity-75"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.about_us")}</h3>
          <ul>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-2 flex items-center">
              <IoDocumentTextSharp className="text-red-500 mr-2" />
              {t("footer.public_offer")}
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-2 flex items-center">
              <PiStarFour className="text-red-500 mr-2" />
              {t("footer.advertising")}
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-2 flex items-center">
              <FaRegCircleQuestion className="text-red-500 mr-2" />
              {t("footer.faq")}
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer flex items-center">
              <FiPhone className="text-red-500 mr-2" />
              {t("footer.contacts")}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.categories")}</h3>
          <ul>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-2 flex items-center">
              <MdLocalMovies className="text-red-500 mr-2" />
              {t("footer.movie")}
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-2 flex items-center">
              <MdTheaterComedy className="text-red-500 mr-2" />
              {t("footer.theatre")}
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-2 flex items-center">
              <MdEvent className="text-red-500 mr-2" />
              {t("footer.concerts")}
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer flex items-center">
              <MdSportsSoccer className="text-red-500 mr-2" />
              {t("footer.sport")}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.contact_us")}</h3>
          <a
            href="tel:+998700000000"
            className="text-red-500 mb-6 cursor-pointer hover:underline hover:text-red-600"
          >
           {t("footer.phone")}: +998 (70) 000-00-00
          </a>
          <h3 className="text-lg font-semibold mb-4 mt-4">{t("footer.social_media")}</h3>
          <div className="flex space-x-4">
            <FaInstagram className="text-red-500 text-2xl cursor-pointer hover:text-red-600 transition" />
            <FaFacebookF className="text-red-500 text-2xl cursor-pointer hover:text-red-600 transition" />
            <FaYoutube className="text-red-500 text-2xl cursor-pointer hover:text-red-600 transition" />
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-8">
  © {new Date().getFullYear()} {t("footer.rights_reserved")}
  <p className="footer-paragraph">
    {t("footer.paragraph")}
  </p>
</div>
    </footer>
  );
};

export default Footer;
