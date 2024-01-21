import { FaSearch } from "react-icons/fa";
import LogoLarge from "../assets/png/logo-large.png";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./menus/NavLink";
import { MenuOpenContext } from "../context/MenuOpenContext";
import { useState } from "react";
import NewsComponent from "./menus/NewsComponent";
import ComicsComponent from "./menus/ComicsComponent";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuContent, setMenuContent] = useState();
  const showFlyout = menuContent && menuOpen;
  console.log(menuOpen);
  return (
    <MenuOpenContext.Provider value={{ menuOpen, setMenuOpen, setMenuContent }}>
      <div className="sticky top-0 z-[99]">
        <div className="w-full h-12 flex bg-main-dark justify-center border-b border-gray-700 ">
          <div className="relative max-w-7xl w-full h-full flex justify-between items-center text-white text-xs">
            {/* login */}
            <div className="border-r border-l uppercase border-gray-700 h-full px-4 flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-100 rounded-full text-main-dark italic">
                <p className="translate-x-[3px] font-semibold italic">IN</p>
              </div>
              <span>login</span>
              <span className="-translate-y-[1px]">|</span>
              <span>Join</span>
            </div>
            {/* search */}
            <div className="px-4 border-r border-l border-gray-700 h-full flex space-x-4 items-center">
              <div className="h-full flex items-center space-x-2 border-r border-gray-700 pr-4">
                <img
                  className="h-[50%]"
                  src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
                  alt="logo"
                />
                <div className="text-center uppercase -space-y-1">
                  <p className="text-[10px]">Marvel unlimited</p>
                  <p className="text-[8px]">subscribe</p>
                </div>
              </div>
              <div>
                <FaSearch />
              </div>
            </div>
            {/* 로고 : absolute */}
            <div className="absolute top-0 left-[50%] -translate-x-[50%] w-32 h-12 bg-gray-100">
              <Link to="/">
                <img
                  src={LogoLarge}
                  alt="logo_small"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-10 bg-main-dark flex justify-center uppercase text-white items-center text-xs font-semibold space-x-8">
          {MENUS.map((menu) => (
            <NavLink
              key={menu.text}
              href={menu.href}
              FlyoutContent={menu.component}
            >
              {menu.text}
            </NavLink>
          ))}
        </div>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute w-full flex justify-center bg-white  shadow-md"
            >
              <div className="absolute -top-2 left-0 right-0 h-6 bg-tranparent" />

              {menuContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MenuOpenContext.Provider>
  );
}

const MENUS = [
  {
    text: "news",
    href: "#",
    component: NewsComponent,
  },
  {
    text: "comics",
    href: "#",
    component: ComicsComponent,
  },
  {
    text: "characters",
    href: "#",
  },
  {
    text: "movies",
    href: "#",
  },
  {
    text: "TV shows",
    href: "#",
  },
  {
    text: "games",
    href: "#",
  },
  {
    text: "videos",
    href: "#",
  },
  {
    text: "more",
    href: "#",
  },
];
