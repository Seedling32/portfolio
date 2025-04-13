import { workData } from '@/assets/assets';
import { Send } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen p-10 scroll-mt-24 flex flex-col justify-center"
    >
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
          <Link
            href={project.url}
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-center bg-cover relative group rounded-md shadow-[2px_2px_5px_#333] dark:shadow-none"
          >
            <div className="absolute bottom-5 left-[12%] w-[75%] flex justify-between items-center bg-chart-4 px-2 rounded-md group-hover:bottom-7 duration-500">
              <div>
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm">{project.description}</p>
              </div>
              <div className="rounded-md group-hover:border p-1 group-hover:shadow-[2px_2px_5px_#333] duration-300">
                <Send />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
