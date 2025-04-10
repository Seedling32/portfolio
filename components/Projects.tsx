import { assets, workData } from '@/assets/assets';
import Image from 'next/image';

const Projects = () => {
  return (
    <div id="projects" className="w-full px-10 py-10 h-screen scroll-mt-24">
      <h2 className="text-center text-lg font-Ovo">My portfolio</h2>
      <h3 className="text-center text-5xl font-Ovo">My latest work</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quae
        dignissimos dolorem inventore consequuntur, quod sint sapiente ullam
        illo iusto. Sint provident, distinctio eos dicta repudiandae esse quasi
        illo! Quidem.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-center bg-cover relative group"
          >
            <div className="absolute bottom-5 left-[12%] w-[75%] flex justify-between items-center bg-background/80 px-2 rounded-md group-hover:bottom-7 duration-500">
              <div>
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm">{project.description}</p>
              </div>
              <div className="rounded-md group-hover:border p-1 group-hover:shadow-[2px_2px_5px_#333] duration-300">
                <Image
                  src={assets.send_icon}
                  alt="Send icon."
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
