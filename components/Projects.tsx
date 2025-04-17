import { workData } from '@/assets/assets';
import { Send } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quae
        dignissimos dolorem inventore consequuntur, quod sint sapiente ullam
        illo iusto. Sint provident, distinctio eos dicta repudiandae esse quasi
        illo! Quidem.
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
            <CardContent
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className="bg-cover bg-no-repeat bg-center aspect-square rounded-[0_0_12px_12px]"
            ></CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
