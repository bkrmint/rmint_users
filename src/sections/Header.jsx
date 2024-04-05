import { useLocation } from "react-router-dom";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { rmint_logo } from "../assets/images";
import { hamburger, hamburger_close } from "../assets/icons";
import { navigation } from "../constants";
import Button from "../components/Button";

const Header = () => {
  const { pathname } = useLocation();
  const [iconUrl, seticonUrl] = useState(null);
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  }

  return (
    <div className="fixed top-0 left-0 z-50 bg-white w-screen">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[8rem] xl:mr-8" href="#hero">
          <img src={rmint_logo} alt="rmint logo" width={120} height={32} />
        </a>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto">
          <div className="relative z-2 flex flex-col item-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`flex relative flex-row justify-center items-end font-publicsans text-3xl  hover:text-red ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-4 md:py-6 lg:-mr-0.25 lg:text-xl lg:font-semibold ${
                  item.url === pathname ? " z-2 text-red" : "text-black"
                } lg:leading-5 xl-px-12`}
                onMouseEnter={() => seticonUrl(item.id)}
                onMouseLeave={() => seticonUrl(null)}
              >
                <img
                  src={iconUrl === item.id ? item.iconUrlRed : item.iconUrl}
                  alt={item.title}
                  className={`w-6 h-6 mr-2`}
                />
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <Button className=" button hidden mr-8 lg:block px-7 py-4 border font-publicsans text-lg leading-none rounded text-red border-red font-bold hover:bg-red hover:text-white cursor-pointer">
          Sign Up
        </Button>

        <Button className=" button hidden lg:block px-7 py-4 border font-publicsans text-lg leading-none rounded bg-red text-white border-red font-bold hover:bg-white hover:text-red cursor-pointer">
          Login
        </Button>

       
        <Button
            className="lg:hidden ml-auto px-3"
            onClick={toggleNavigation}
          >
            <img src={`${openNavigation ? hamburger_close : hamburger} `} alt="hamburger"  width={36} height={36} />
        </Button>

        { openNavigation && 
          <div className="fixed inset-0 z-50 mt-16 flex flex-col items-center justify-start bg-white space-y-4 ">
            <nav className="flex flex-col items-start justify-center">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex relative flex-row justify-center items-center font-publicsans font-semibold text-3xl px-4 py-2 md:py-6"
                  onClick={handleClick}
                >
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    className={"w-6 h-6 mr-2"}
                  />
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        }
        
      </div>
     
    </div>
  );
};

export default Header;
