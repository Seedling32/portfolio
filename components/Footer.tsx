'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemedImage = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let src;

  useEffect(() => {
    setMounted(true); // ensures this only runs on the client
  }, []);

  if (!mounted) {
    return null; // or show a placeholder/spinner
  }

  switch (resolvedTheme) {
    case 'light':
      src = `/logo.png`;
      break;
    case 'dark':
      src = `/logo_dark.png`;
      break;
    default:
      src = `/logo.png`;
      break;
  }

  return (
    <Image src={`${src}`} width={150} height={50} alt="David Graham logo." />
  );
};

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);

  const email = 'david@davidrgraham.com';

  return (
    <div className="mt-50 items-center">
      <div className="mb-8 flex flex-col items-center">
        {ThemedImage()}
        <div className="flex items-center gap-2">
          <Image src={assets.mail_icon} alt="Email icon." width={30} />
          <Link href="/#contact">
            {showEmail ? (
              `${email}`
            ) : (
              <span
                onClick={() => setShowEmail(true)}
                className="hover:underline"
              >
                Reveal my email
              </span>
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
