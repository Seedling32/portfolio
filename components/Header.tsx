import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center gap-4 mt-4">
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
        aspiring full-stack developer in Asheville, NC
      </h2>
      <p className="max-w-2xl font-Ovo">
        As a passionate and driven web developer with a background in
        conservation, arboriculture, and automotive technology, I bring a unique
        blend of creativity, problem-solving, and hands-on experience to every
        project I take on. I&apos;m currently completing my{' '}
        <abbr title="Associates in Applied Science" className="no-underline">
          AAS
        </abbr>{' '}
        in Web & Software Development, where I&apos;ve honed my skills in
        front-end and back-end technologies, UI design, and building responsive,
        user-focused applications.
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
          href="/sample-resume.pdf"
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
