import { assets, infoList, technologies } from '@/assets/assets';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { BriefcaseBusiness, Code, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div
      id="about"
      className="w-11/12 max-w-5xl mx-auto px-4 scroll-mt-24 min-h-screen flex flex-col justify-center dark:bg-radial from-white/5 to-transparent"
    >
      <div>
        <h2 className="text-center text-lg font-Ovo mb-2">Introduction</h2>
        <h3 className="text-center text-5xl font-Ovo">About me</h3>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 mt-20">
        <div className="self-start rounded-3xl">
          <Image
            src={assets.david}
            alt="David Graham"
            className="rounded-3xl"
            width={400}
          />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <p className="font-Ovo">
            As a passionate and driven web developer with a background in
            conservation, arboriculture, and automotive technology, I bring a
            unique blend of creativity, problem-solving, and hands-on experience
            to every project I take on.<br></br>I recently completed my{' '}
            <abbr
              title="Associates in Applied Science"
              className="no-underline"
            >
              AAS
            </abbr>{' '}
            in Web & Software Development, where I honed my skills in front-end
            and back-end technologies, UI design, and building responsive,
            user-focused applications.<br></br>These days I spend my time
            polishing the Blue Ridge Community College website as a Web
            Developer II, while also taking on freelance projects that allow me
            to explore new technologies and push the boundaries of web
            development.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {infoList.map(({ title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-500 rounded-xl p-6 hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                {title === 'Languages' ? (
                  <Code width={60} height={60} />
                ) : title === 'Education' ? (
                  <GraduationCap width={60} height={60} />
                ) : (
                  <BriefcaseBusiness width={60} height={60} />
                )}
                <h4 className="my-4 font-semibold text-gray-700 dark:text-muted-foreground">
                  {title}
                </h4>
                <p className="text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[75%] mx-auto">
        <h4 className="text-2xl text-center my-6 font-Ovo">Technologies</h4>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {technologies.map((tool, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center justify-center w-12 md:w-20 aspect-square border border-gray-500 rounded-lg hover:-translate-y-1 duration-500 bg-white/30">
                    <Image
                      src={tool.image}
                      alt="Tool."
                      width={60}
                      height={60}
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
  );
};

export default About;
