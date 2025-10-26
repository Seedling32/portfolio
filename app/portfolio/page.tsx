'use client';

import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/header/index';

const BirdsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Nav />
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center pt-52">
        <h1 className="text-5xl mb-4 text-center">Portfolio Website</h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <section className="mb-6">
            <h2>Description:</h2>
            <p>
              My personal portfolio serves as both a showcase and a project in
              itself. I designed and built it using Next.js, React, and Tailwind
              CSS, focusing on clean design, fast performance, and
              accessibility. It highlights my development work, design approach,
              and ongoing projects while demonstrating best practices in modern
              front-end development — from responsive layouts to SEO
              optimization and smooth page transitions.
            </p>
            <p className="text-center">
              <Link
                href="https://github.com/Seedling32/portfolio"
                target="_blank"
              >
                <Badge variant="secondary"> View Github</Badge>
              </Link>
            </p>
          </section>
          <Link href="/" className="col-span-2">
            <Card className="p-6">
              <Image
                src="/work-4.png"
                alt="David's Portfolio website."
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

export default BirdsPage;
