import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="px-4 py-6 3xl:py-[32px]">
      <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex 3xl:gap-[100px] lg:gap-[70px] md:gap-[50px] gap-6">
          <Link href="/" className="text-cyan hover:text-emerald-300">
            Home
          </Link>
          <Link href="/about" className="text-[#FFFFFF] hover:text-emerald-300">
            About
          </Link>
          <Link href="/how" className="text-[#FFFFFF] hover:text-emerald-300">
            How does it work?
          </Link>
          <Link href="/blog" className="text-[#FFFFFF] hover:text-emerald-300">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
