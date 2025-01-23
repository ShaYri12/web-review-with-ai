import React from "react";
import Link from "next/link";
import Image from "next/image";

import FooterLogo from "./FooterLogo";
import SocialLink from "./SocialLink";

const Footer = ({ social = true }) => {
  return (
    <footer className="px-4 lg:px-[24px] py-4 md:py-6 3xl:py-[32px] mt-8 sm:mt-[60px] lg:mt-[20px] w-full">
      <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto flex sm:flex-row flex-col gap-4 justify-between sm:items-center">
        <div className={`flex gap-4 flex-wrap  ${!social && "invisible"}`}>
          <SocialLink />
          <Link
            href="/terms-and-service"
            className="text-nowrap text-white md:text-base text-[15px] hover:text-cyan transition-all duration-300"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy"
            className="text-nowrap text-white md:text-base text-[15px] hover:text-cyan transition-all duration-300"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex items-center">
          <FooterLogo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
