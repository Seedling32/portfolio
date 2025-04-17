import { workData } from '@/assets/assets';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-6xl mx-auto min-h-screen p-10 scroll-mt-24 grid grid-cols-1"
    >
      <h2 className="text-center text-lg font-Ovo">My portfolio</h2>
      <h3 className="text-center text-5xl font-Ovo">My latest work</h3>
      <p className="font-Ovo">
        My work includes a mix of full-stack web apps and clean, responsive
        front-end projects like this portfolio—balancing functionality with
        design.
      </p>
      <div className="grid grid-cols-2 my-10 gap-4">
        {workData.map((project, index) => (
          <Card key={index} className="max-w-[500px] pb-0 group">
            <CardHeader>
              <CardTitle className="text-center">{project.title}</CardTitle>
              <CardDescription className="text-center">
                {project.description}
              </CardDescription>
            </CardHeader>
            <Link href={project.url}>
              <CardContent
                style={{ backgroundImage: `url(${project.bgImage})` }}
                className="bg-cover bg-no-repeat bg-center aspect-square rounded-[0_0_12px_12px]"
              ></CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
