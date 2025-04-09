import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';

const navList = ['home', 'about', 'projects', 'contact'];

const Navbar = () => {
  return (
    <>
      <div className="bg-[url(../assets/header-bg-color.png)]"></div>
      <nav className="hidden md:flex justify-between items-center max-w-7xl mx-auto py-4 px-8 bg-[url(../assets/header-bg-color.png)] bg-center bg-cover">
        <Link href="#top">
          <Image src={assets.logo} alt="David Graham logo." />
        </Link>
        <ul className="font-Ovo capitalize flex gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-background/50">
          {navList.map((link) => (
            <li key={link}>
              <Link href={`#${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Link
            href="#contact"
            className="flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full bg-background/50"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="Arrow icon."
              className="w-3 h-3"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
