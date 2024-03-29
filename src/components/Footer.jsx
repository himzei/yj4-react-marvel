import LogoFooter from "../assets/png/logo-footer.png";
import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Twitter from "../assets/Twitter";
import Youtube from "../assets/Youtube";
import Pinterest from "../assets/Pinterest";
import SnapChat from "../assets/SnapChat";
import Tumb from "../assets/Tumb";

export default function Footer() {
  return (
    <>
      <div className="w-full flex py-16 bg-main-dark  justify-center">
        <div className="max-w-7xl w-full px-4 flex flex-col space-y-16 justify-between text-white md:space-y-0 md:flex-row  ">
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
          <div className="flex md:flex-col gap-y-8">
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
            <div className="grid grid-cols-7  md:grid-cols-4 md:grid-rows-2 text-2xl text-gray-500 gap-x-10 gap-y-6">
              <Facebook />
              <Insta />
              <Twitter />
              <Youtube />
              <Pinterest />
              <SnapChat />
              <Tumb />
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-7xl w-full md:w-full mx-auto flex flex-wrap justify-center py-8 bg-main-dark text-gray-500 text-xs gap-x-8 md:gap-4">
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
        <span>Interest-Based Ads</span>
        <span>License Agreement</span>
        <span>@2024 MARVEL</span>
      </div>
    </>
  );
}
