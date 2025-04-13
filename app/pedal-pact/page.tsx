'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PedalPactPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('prefers-color-scheme: dark').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <div className="mb-6">
          <h1 className="text-5xl mb-4 text-center">Pedal-Pact</h1>
          <p>
            Pedal Pact is a full stack application built with Next.js, tailwind,
            Zod, Neon, Prisma, and Auth JS. A community-driven app for sharing
            bike routes, organizing group rides, and connecting cyclists in the
            Asheville, NC area. Still under development, but you may log in with
            &apos;steve@example.com&apos; password &apos;123456&apos; or you may
            register a new user.
          </p>
        </div>
        <Image
          src="/work-1.png"
          alt="Pedal pact website"
          width={600}
          height={400}
        />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default PedalPactPage;
