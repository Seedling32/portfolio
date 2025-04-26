'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemedImageLogo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let logo;

  useEffect(() => {
    setMounted(true); // ensures this only runs on the client
  }, []);

  if (!mounted) {
    return null; // or show a placeholder/spinner
  }

  switch (resolvedTheme) {
    case 'light':
      logo = `/logo.png`;
      break;
    case 'dark':
      logo = `/logo_dark.png`;
      break;
    default:
      logo = `/logo.png`;
      break;
  }

  return (
    <Image src={`${logo}`} width={150} height={50} alt="David Graham logo." />
  );
};

const ThemedImageGit = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let git;

  useEffect(() => {
    setMounted(true); // ensures this only runs on the client
  }, []);

  if (!mounted) {
    return null; // or show a placeholder/spinner
  }

  switch (resolvedTheme) {
    case 'light':
      git = `/github-mark.svg`;
      break;
    case 'dark':
      git = `/github-mark-white.svg`;
      break;
    default:
      git = `/github-mark-white.svg`;
      break;
  }

  return <Image src={`${git}`} width={40} height={40} alt="GitHub logo." />;
};

const ThemedImageLinked = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let linked;

  useEffect(() => {
    setMounted(true); // ensures this only runs on the client
  }, []);

  if (!mounted) {
    return null; // or show a placeholder/spinner
  }

  switch (resolvedTheme) {
    case 'light':
      linked = `/InBug-Black.png`;
      break;
    case 'dark':
      linked = `/InBug-White.png`;
      break;
    default:
      linked = `/InBug-White.png`;
      break;
  }

  return (
    <Image src={`${linked}`} width={40} height={40} alt="LinkedIn logo." />
  );
};

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);

  const email = 'david.r.graham32@gmail.com';

  return (
    <div className="mt-50 items-center">
      <div className="mb-8 flex flex-col items-center">
        {ThemedImageLogo()}
        <div className="flex items-center gap-2">
          <Image src={assets.mail_icon} alt="Email icon." width={30} />
          <span>
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
          </span>
        </div>
      </div>
      <div className="flex justify-between p-6 items-center max-w-7xl mx-auto border-t border-gray-400">
        <p>&copy; 2025 David Graham. All rights reserved.</p>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="https://github.com/Seedling32" target="_blank">
              {ThemedImageGit()}
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/david--graham/"
              target="_blank"
            >
              {ThemedImageLinked()}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
