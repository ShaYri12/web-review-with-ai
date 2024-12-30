import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="px-4 py-6 3xl:py-[32px] mt-auto xl:mt-[80px]">
      <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="#" className="text-white hover:text-cyan">
            <FaFacebook className="xl:w-[24px] w-[20px] xl:h-[24px] h-[20px]" />
          </Link>
          <Link href="#" className="text-white hover:text-cyan">
            <BsInstagram className="xl:w-[24px] w-[20px] xl:h-[24px] h-[20px]" />
          </Link>
          <Link href="#" className="text-white hover:text-cyan">
            <FaLinkedin className="xl:w-[24px] w-[20px] xl:h-[24px] h-[20px]" />
          </Link>
        </div>
        <div className="flex items-center lg:space-x-[10px] space-x-2 text-white 3xl:text-[30px] lg:text-[24px] md:text-[18px] text-base">
          <Image
            src="/assets/box.svg"
            alt="box"
            width={27.5}
            height={31.6}
            className="2xl:w-[27.5px] lg:w-[25px] w-[24px] 2xl:h-[31.6px] lg:h-[25px] h-[24px]"
          />
          <span>Polygonal Research, LLC</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
