"use client";
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="px-4 lg:px-[24px] py-4 md:py-6 3xl:py-[32px] relative w-full">
      <div className="3xl:max-w-[1600px] 2xl:max-w-[1280px] max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <FaBars size={24} />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex 3xl:gap-[100px] lg:gap-[70px] md:gap-[50px] gap-6">
          <Link
            href="/"
            className={`3xl:text-[25px] md:text-[18px] font-[400] ${
              pathname === "/"
                ? "text-cyan"
                : "text-[#FFFFFF] hover:text-emerald-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`3xl:text-[25px] md:text-[18px] font-[400] ${
              pathname === "/about"
                ? "text-cyan"
                : "text-[#FFFFFF] hover:text-emerald-300"
            }`}
          >
            About
          </Link>
          <Link
            href="/how"
            className={`3xl:text-[25px] md:text-[18px] font-[400] ${
              pathname === "/how"
                ? "text-cyan"
                : "text-[#FFFFFF] hover:text-emerald-300"
            }`}
          >
            How does it work?
          </Link>
        </div>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
          onClick={closeMenu} // Close menu if the overlay is clicked
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef as MutableRefObject<HTMLDivElement>}
        className={`fixed top-0 left-0 w-64 h-full bg-[#252A2E] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <button onClick={closeMenu} className="text-white mb-6 ms-[-4px]">
            <IoClose size={24} />
          </button>
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-[18px] font-[400] ${
                pathname === "/"
                  ? "text-emerald-300"
                  : "text-[#FFFFFF] hover:text-emerald-300"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-[18px] font-[400] ${
                pathname === "/about"
                  ? "text-cyan"
                  : "text-[#FFFFFF] hover:text-emerald-300"
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/how"
              className={`text-[18px] font-[400] ${
                pathname === "/how"
                  ? "text-cyan"
                  : "text-[#FFFFFF] hover:text-emerald-300"
              }`}
              onClick={closeMenu}
            >
              How does it work?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
