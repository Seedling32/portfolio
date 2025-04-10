import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center gap-4 pt-40">
      <div>
        <Image
          src={assets.profile_img}
          alt="David Graham"
          className="rounded-full"
          width={200}
          height={200}
        />
      </div>
      <h1 className="text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m David Graham
      </h1>
      <h2 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Aspiring full-stack developer in Asheville, NC
      </h2>
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
          <Image
            src={assets.right_arrow_white}
            alt="Arrow icon."
            height={16}
            width={16}
          />
        </Link>
        <Link
          target="_blank"
          href="/DavidG_resume.pdf"
          download={true}
          className="px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Download CV
          <Image
            src={assets.download_icon}
            alt="Download icon."
            width={16}
            height={16}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
