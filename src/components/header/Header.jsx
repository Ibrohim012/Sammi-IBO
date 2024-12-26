import React, { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { HEADER_LINKS } from "../../static";
import { FaMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../../lang";
import englishFlag from "@/assets/flags/english.png";
import  uzbekFlag from "@/assets/flags/uzbek.png";
import russianFlag from "@/assets/flags/russian.png";
import { MdLightMode } from "react-icons/md";

const LANGUAGES = [
  { label: "Uzbek", code: "uz", flag: uzbekFlag },
  { label: "Russian", code: "ru", flag: russianFlag },
  { label: "English", code: "en", flag: englishFlag },
];

const Header = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("dark_mode") || true;
  });
  const { i18n, t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("lang_code") || i18n.language
  );
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark((prevDark) => {
      const newDarkMode = !prevDark;
      localStorage.setItem("dark_mode", newDarkMode);
      return newDarkMode;
    });
  };
  const changeLang = (langCode) => {
    setSelectedLang(langCode);
    i18n.changeLanguage(langCode);
    localStorage.setItem("lang_code", langCode);
    setDropdownOpen(false);
  };

  return (
    <header
      id="header"
      className="w-full h-[80px] bg-white dark:bg-black sticky top-0 left-0 z-20 shadow-md"
    >
      <nav className="container relative mx-auto px-4 h-full flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[112px] h-9 max-[500px]:w-[100px] max-[500px]:h-7"
            />
          </Link>
        </div>
        <ul className="text-black flex dark:text-white gap-10 flex-wrap max-[650px]:fixed max-[650px]:bottom-0 max-[650px]:left-0 max-[650px]:bg-[white] max-[650px]:w-full max-[650px]:justify-evenly max-[650px]:dark:bg-black max-[650px]:-z-50">
          {HEADER_LINKS.map((link) => (
            <li key={link.id} className="flex flex-col items-center">
              <NavLink
                to={link.url}
                className="flex flex-col items-center gap-1 max-[650px]:gap-0 max-[650px]:py-1 max-[650px]:text-[12px]"
              >
                {link.icon}
                <p>{t(`header.nav.${link.title}`)}</p>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 relative">
          {/* Custom Language Dropdown */}
          <div className="relative">
            <button
              className="bg-gray-300 dark:bg-slate-800 dark:text-white rounded-lg py-2 px-3 flex items-center gap-2"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <img
                src={LANGUAGES.find((lang) => lang.code === selectedLang)?.flag}
                alt={`${selectedLang} flag`}
                className="w-5 h-5"
              />
              {LANGUAGES.find((lang) => lang.code === selectedLang)?.label}
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white dark:bg-slate-800 shadow-lg rounded-lg mt-2 w-full">
                {LANGUAGES.map((lang) => (
                  <li
                    key={lang.code}
                    className={`flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer ${
                      selectedLang === lang.code
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-black dark:text-white"
                    }`}
                    onClick={() => changeLang(lang.code)}
                  >
                    <img src={lang.flag} alt={`${lang.label} flag`} className="w-5 h-5" />
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            onClick={toggleDarkMode}
            className="text-2xl text-gray-700 dark:text-white"
          >
            {dark ? <MdLightMode className="text-[gold]" /> : <FaMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
