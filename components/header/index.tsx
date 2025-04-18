import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';
import { assets } from '@/assets/assets';

const Nav = () => {
  return (
    <header
      role="header"
      className="fixed max-w-screen w-full backdrop-blur-lg"
    >
      <div className="flex justify-between py-5 px-2">
        <div className="flex-start">
          <Link href="/" className="flex items-center flex-start ml-4">
            <Image
              src={assets.logo_brand}
              alt={`${APP_NAME} logo.`}
              height={48}
              width={48}
              priority={true}
              className="rounded-lg"
            />
            <span className="hidden md:inline-block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Nav;
