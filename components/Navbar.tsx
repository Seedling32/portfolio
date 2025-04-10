'use client';

import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';
import { useEffect, useRef, useState } from 'react';

const navList = ['home', 'about', 'projects', 'contact'];

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div>
        <Image
          src={assets.header_bg_color}
          alt="Colorful display."
          className="fixed top-0 right-0 w-full -z-10 translate-y-[-80%] dark:hidden"
        />
      </div>
      <nav className="w-full fixed flex justify-between items-center py-4 px-8">
        <Link href="#top">
          <Image
            src={assets.logo_brand}
            alt="David Graham logo."
            width={100}
            className="rounded-lg"
          />
        </Link>
        <ul
          className={`font-Ovo capitalize hidden md:flex gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-background/50 ml-20 ${
            isScroll ? `backdrop-blur-lg` : ``
          }`}
        >
          {navList.map((link) => (
            <li key={link}>
              <Link href={`#${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 ml-8">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Moon icon."
              width={20}
              height={20}
            />
          </button>
          <Link
            href="#contact"
            className="hidden md:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full bg-foreground text-background"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="Arrow icon."
              className="w-3 h-3"
            />
          </Link>
          <button className="block md:hidden" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt="Menu icon."
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 capitalize"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="Close icon."
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
          {navList.map((link) => (
            <li key={link}>
              <Link href={`#${link}`} onClick={closeMenu}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
