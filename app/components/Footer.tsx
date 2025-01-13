import React from "react";
import Link from "next/link";
import Image from "next/image";

import FooterLogo from "./FooterLogo";
import SocialLink from "./SocialLink";

const Footer = ({ social = true }) => {
  return (
    <footer className="px-4 lg:px-[24px] py-4 md:py-6 3xl:py-[32px] mt-[40px] lg:mt-[70px] w-full">
      <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto flex flex-wrap gap-4 justify-between items-center">
        <div
          className={`flex space-x-4 md:space-x-[24px] ${
            !social && "invisible"
          }`}
        >
          <SocialLink/>
        </div>
        <FooterLogo/>
      </div>
    </footer>
  );
};

export default Footer;
