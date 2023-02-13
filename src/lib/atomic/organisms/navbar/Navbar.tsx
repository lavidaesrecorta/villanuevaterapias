import Image from "next/image";
import React, { CSSProperties, useRef, useState } from "react";
import useElementOnScreen from "@lib/auxiliar/Animate/elementOnScreenHook";

export interface INavbar {
  baseColor?: string;
}

const Navbar: React.FC<INavbar> = ({ }) => {
  const [navbarState, setNavbarState] = useState(false);
  const handleNavigationToggle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNavbarState(event.target.checked);
  };

  const animationStart = "bg-opacity-70"

  const animationEnd = "bg-opacity-100"

  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: "600ms ease-in-out",
  };
  return (
    <div ref={ref} >
      <nav className={`fixed w-full py-4 text-center z-50 bg-primary ${onScreen ? animationStart : animationEnd}`} style={defaultStyles} >
        <div className="w-full flex justify-center">
          <div className="">
            <label className="btn btn-outline btn-primary swap swap-rotate p-2 hidden">
              {/* <!-- this hidden checkbox controls the state --> */}
              <input type="checkbox" onChange={handleNavigationToggle} />
              {/* <!-- hamburger icon --> */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* <!-- close icon --> */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <Image
            src="/andrea/logo.png"
            height={75}
            width={75}
            alt="Logo"
            className="inline-block"
          />
        </div>
        <ul
          className={`menu w-full max-w-xl mt-4 mx-auto ${navbarState || "hidden"
            }`}
        >
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Agendar una cita</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
