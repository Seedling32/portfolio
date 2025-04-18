'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);

  const email = 'david@davidrgraham.com';

  return (
    <div className="mt-50 items-center">
      <div className="mb-8 flex flex-col items-center">
        <Image src={assets.logo} alt="David Graham name logo." width={150} />
        <div className="flex items-center gap-2">
          <Image src={assets.mail_icon} alt="Email icon." width={30} />
          <Link href="/#contact">
            {showEmail ? (
              `${email}`
            ) : (
              <span onClick={() => setShowEmail(true)}>Reveal my email</span>
            )}
          </Link>
        </div>
      </div>
      <div className="flex justify-between p-6 items-center max-w-7xl mx-auto border-t border-gray-400">
        <p>&copy; 2025 David Graham. All rights reserved.</p>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="https://github.com/Seedling32" target="_blank">
              <Image src={assets.github_black} alt="Github logo." width={40} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/david--graham/"
              target="_blank"
            >
              <Image src={assets.in_black} alt="Linkedin logo." width={40} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
