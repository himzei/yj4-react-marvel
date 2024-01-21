import LogoFooter from "../assets/png/logo-footer.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterest,
  FaBell,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillEuroCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="w-full flex py-16 bg-main-dark  justify-center">
        <div className="max-w-7xl w-full flex justify-between text-white">
          {/* 1 */}
          <div className="flex space-x-8 uppercase">
            <div className="w-20 ">
              <img
                className="w-full  object-cover"
                src={LogoFooter}
                alt="logo_footer"
              />
            </div>
            <div className="px-8 space-y-2 text-sm">
              <p>about marvel</p>
              <p>help faqs</p>
              <p>careers</p>
              <p>internship</p>
            </div>
            <div className="px-8 space-y-2 text-sm">
              <p>about marvel</p>
              <p>help faqs</p>
              <p>careers</p>
              <p>internship</p>
            </div>
          </div>
          {/* 2 */}
          <div className="space-y-8">
            {/* insider */}
            <div className="flex items-center space-x-4">
              {/* image */}
              <div className="h-8">
                <img
                  className="h-full"
                  src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png"
                  alt=""
                />
              </div>
              {/* contents */}
              <div className="flex flex-col space-y-1">
                <h2 className="uppercase text-white">marvel insider</h2>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            {/* unlimited */}
            <div className="flex items-center space-x-4">
              {/* image */}
              <div className="h-8">
                <img
                  className="h-full"
                  src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png"
                  alt=""
                />
              </div>
              {/* contents */}
              <div className="flex flex-col space-y-1">
                <h2 className="uppercase text-white ">marvel insider</h2>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col space-y-6">
            <h3 className="uppercase">follow Marvel</h3>
            <div className="grid  grid-cols-4 grid-rows-2 text-2xl text-gray-500 gap-x-10 gap-y-6">
              <p className="">
                <FaFacebookSquare />
              </p>
              <p className="">
                <FaInstagramSquare />
              </p>
              <p className="">
                <FaXTwitter />
              </p>
              <p className="">
                <IoLogoYoutube />
              </p>
              <p className="">
                <FaPinterest />
              </p>
              <p className="">
                <FaBell />
              </p>
              <p className="">
                <AiFillEuroCircle />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-7xl w-full flex justify-center py-8 bg-main-dark text-gray-500 text-xs space-x-8">
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
        <span>Interest-Based Ads</span>
        <span>License Agreement</span>
        <span>@2024 MARVEL</span>
      </div>
    </>
  );
}
