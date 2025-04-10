import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center gap-4 pt-40">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="David Graham"
          className="rounded-full"
          width={200}
          height={200}
        />
      </motion.div>
      <h1 className="text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m David Graham
      </h1>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Aspiring full-stack developer in Asheville, NC
      </motion.h2>
      <p className="max-w-2xl font-Ovo">
        Showcasing my work in web development, design, and creative projects —
        explore my latest builds, case studies, and passion projects.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-8 mt-4">
        <Link
          href="#contact"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-foreground text-background"
        >
          Contact me
          <ArrowRight />
        </Link>
        <Link
          target="_blank"
          href="/DavidG_resume.pdf"
          download={true}
          className="px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Download CV
          <Download />
        </Link>
      </div>
    </div>
  );
};

export default Header;
