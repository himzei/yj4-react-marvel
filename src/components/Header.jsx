import { FaSearch } from "react-icons/fa";
import LogoLarge from "../assets/png/logo-large.png";
import LogoSmall from "../assets/png/logo-small.png";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./menus/NavLink";
import { MenuOpenContext } from "../context/MenuOpenContext";
import { useState } from "react";
import NewsComponent from "./menus/NewsComponent";
import ComicsComponent from "./menus/ComicsComponent";
import { IoMenuSharp } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Twitter from "../assets/Twitter";
import Youtube from "../assets/Youtube";
import Pinterest from "../assets/Pinterest";
import SnapChat from "../assets/SnapChat";
import Tumb from "../assets/Tumb";

const MobileMenuLink = ({ menu }) => {
  return (
    <Link to={menu.href}>
      <div className="relative w-full flex justify-between items-center group">
        <div className="text-neutral-300 duration-300 group-hover:text-white uppercase text-lg py-2.5">
          {menu.text}
        </div>
        <div className="text-red-600 text-xl font-semibold">
          <MdArrowForwardIos />
        </div>

        {/* 밑줄 */}
        <span className="absolute left-0 right-8 bottom-0 origin-left transition-transform h-[1px] bg-neutral-600 duration-300 ease-out scale-x-0 group-hover:scale-x-100" />
      </div>
    </Link>
  );
};

const MobileMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="block md:hidden z-30">
      <button
        className="block text-2xl px-2"
        onClick={() => setMobileOpen(true)}
      >
        <FiMenu />
      </button>
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 bottom-0 flex h-screen w-full flex-col justify-between bg-main-dark"
          >
            {/* 1 위쪽 */}
            <div>
              {/* 1 */}
              <div className="flex items-center justify-between p-3 border-b border-neutral-300">
                <button onClick={() => setMobileOpen(false)}>
                  <FiX className="text-2xl text-white" />
                </button>
                <div className="text-white text-lg">
                  <FaSearch />
                </div>
              </div>
              {/* 위쪽 */}
              <div className="bg-main-dark p-4">
                {MENUS.map((menu, index) => (
                  <MobileMenuLink
                    key={index}
                    menu={menu}
                    setMobileOpen={setMobileOpen}
                  />
                ))}
              </div>
            </div>

            {/* 아래쪽 */}
            <div className="text-white px-4 py-4 flex flex-col">
              {/* 1 */}
              <div className="py-8 px-2 text-yellow-600 border-t border-neutral-500">
                <h4>MARVEL INSIDER</h4>
                <div className="w-full flex justify-between py-4">
                  <h3 className="text-white text-lg">KEN</h3>

                  <div className="text-red-600 text-xl font-semibold">
                    <MdArrowForwardIos />
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="flex justify-around border-t border-neutral-500 py-8 ">
                <Facebook />
                <Insta />
                <Twitter />
                <Youtube />
                <Pinterest />
                <SnapChat />
                <Tumb />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState(false);

  const [menuContent, setMenuContent] = useState();
  const showFlyout = menuContent && menuOpen;

  addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && window.scrollY > 80) {
      setScrolled(true);
    } else if (e.deltaY < 0) {
      setScrolled(false);
    }
    if (window.scrollY === 0) {
      setTimeout(() => {
        setLogoSize(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setLogoSize(false);
      }, 1000);
    }
  });

  return (
    <MenuOpenContext.Provider value={{ menuOpen, setMenuOpen, setMenuContent }}>
      <div
        className="sticky top-0 z-[99] transition-all duration-700 "
        style={{
          transform: `${scrolled ? "translateY(-80px)" : "translateY(0)"}`,
        }}
      >
        <div className="w-full h-12 flex bg-main-dark justify-center border-b border-t border-gray-700 ">
          <div className="relative max-w-7xl w-full h-full flex justify-between items-center text-white text-xs">
            {/* login */}
            <div className="hidden md:flex border-r border-l uppercase border-gray-700 h-full px-4  items-center space-x-2">
              <div className="w-4 h-4 bg-gray-100 rounded-full text-main-dark italic">
                <p className="translate-x-[3px] font-semibold italic">IN</p>
              </div>
              <span>login</span>
              <span className="-translate-y-[1px]">|</span>
              <span>Join</span>
            </div>
            {/* mobile 메뉴 */}
            <MobileMenu />
            {/* 메뉴 아이콘 */}
            <div className="block md:hidden px-4 cursor-pointer text-2xl">
              <IoMenuSharp />
            </div>
            {/* search */}
            <div className="px-4  md:border-r md:border-l md:border-gray-700 h-full flex md:space-x-4 items-center ">
              <div className="h-full items-center space-x-2 border-r border-gray-700 pr-4 hidden  md:flex">
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
              {/* search */}
              <div className="text-lg">
                <FaSearch />
              </div>
            </div>
            {/* 로고 : absolute */}
            <div className="absolute top-0 left-[50%] -translate-x-[50%] h-12 ">
              {logoSize ? (
                <Link to="/">
                  <div className="h-full">
                    <img className="h-full" src={LogoLarge} alt="logo_large" />
                  </div>
                </Link>
              ) : (
                <Link to="/">
                  <div className="h-full">
                    <img className="h-full" src={LogoSmall} alt="logo_large" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-10 bg-main-dark hidden md:flex justify-center uppercase text-white items-center text-xs font-semibold space-x-8">
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
    text: "characters",
    href: "/characters",
    component: NewsComponent,
  },
  {
    text: "comics",
    href: "/comics",
    component: ComicsComponent,
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
