'use client';

import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';
import { useRef } from 'react';

const navList = ['home', 'about', 'projects', 'contact'];

const Navbar = () => {
  const sideMenuRef = useRef<HTMLUListElement>(null);

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

  return (
    <>
      <div className="bg-[url(../assets/header-bg-color.png)]"></div>
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-8 bg-[url(../assets/header-bg-color.png)] bg-center bg-cover">
        <Link href="#top">
          <Image src={assets.logo} alt="David Graham logo." width={200} />
        </Link>
        <ul className="font-Ovo capitalize hidden md:flex gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-background/50">
          {navList.map((link) => (
            <li key={link}>
              <Link href={`#${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt="Moon icon."
              width={20}
              height={20}
            />
          </button>
          <Link
            href="#contact"
            className="hidden md:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full bg-background/50"
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
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
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
