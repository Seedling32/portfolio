import Footer from '@/components/Footer';
import Nav from '@/components/header/index';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const PedalPactPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Nav />
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h1 className="text-5xl mb-4 text-center">Pedal-Pact</h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <section className="mb-6">
            <h2>Description:</h2>
            <p>
              Pedal Pact is a full stack application built with Next.js,
              tailwind, Zod, Neon, Prisma, and Auth JS. A community-driven app
              for sharing bike routes, organizing group rides, and connecting
              cyclists in the Asheville, NC area. Still under development, but
              you may log in with &apos;steve@example.com&apos; password
              &apos;123456&apos; or you may register a new user.
            </p>
            <p className="text-center">
              <Link
                href="https://github.com/Seedling32/capstone"
                target="_blank"
              >
                <Badge variant="secondary"> View Github</Badge>
              </Link>
            </p>
          </section>
          <Link
            href="https://www.pedal-pact.com/"
            target="_blank"
            className="col-span-2"
          >
            <Card className="p-6">
              <Image
                src="/work-1.png"
                alt="Pedal pact website."
                width={600}
                height={400}
                className="rounded-lg"
              />
            </Card>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PedalPactPage;
