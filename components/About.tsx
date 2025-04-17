import { assets, infoList, technologies } from '@/assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const About = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      id="about"
      className="scroll-mt-24 min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-4 dark:bg-radial from-white/5 to-transparent"
    >
      <div>
        <h2 className="text-center text-lg font-Ovo mb-2">Introduction</h2>
        <h3 className="text-center text-5xl font-Ovo">About me</h3>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl">
          <Image
            src={assets.user_image}
            alt="David Graham"
            className="rounded-3xl"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <p className="font-Ovo">
            As a passionate and driven web developer with a background in
            conservation, arboriculture, and automotive technology, I bring a
            unique blend of creativity, problem-solving, and hands-on experience
            to every project I take on. I&apos;m currently completing my{' '}
            <abbr
              title="Associates in Applied Science"
              className="no-underline"
            >
              AAS
            </abbr>{' '}
            in Web & Software Development, where I&apos;ve honed my skills in
            front-end and back-end technologies, UI design, and building
            responsive, user-focused applications.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-500 rounded-xl p-6 hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} />
                <h4 className="my-4 font-semibold text-gray-700 dark:text-muted-foreground">
                  {title}
                </h4>
                <p className="text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 font-Ovo">Technologies</h4>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            {technologies.map((tool, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-500 rounded-lg hover:-translate-y-1 duration-500 bg-white/30">
                      <Image
                        src={tool.image}
                        alt="Tool."
                        className="w-5 sm:w-7"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    className="bg-foreground text-background"
                    arrowPadding={0}
                  >
                    <p>{tool.desc}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
