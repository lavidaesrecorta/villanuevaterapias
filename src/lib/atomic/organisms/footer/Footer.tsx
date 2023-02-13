import Image from "next/image";
import React, { useState } from "react";

export interface IFooter {
  sampleTextProp?: string;
}

const Footer: React.FC<IFooter> = ({ sampleTextProp }) => {
  const [navbarState, setNavbarState] = useState(false);
  const handleNavigationToggle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNavbarState(event.target.checked);
  };
  return (
    <nav className="w-full bg-primary p-4 text-center">
      <div className="inline">
        <Image
          src="/andrea/logo.png"
          height={100}
          width={100}
          alt=""
          className="inline"
        />
      </div>
    </nav>
  );
};

export default Footer;
