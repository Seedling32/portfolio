'use client';

import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/header/index';

const ECommercePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Nav />
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center pt-52">
        <h1 className="text-5xl mb-4 text-center">Modern E-Commerce</h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <section className="mb-6">
            <h2>Description:</h2>
            <p>
              This modern E-Commerce application is a full stack application
              built with Next.js, tailwind, Zod, Neon, Prisma, and Auth JS. It
              offers customized views based on user status and allows for mock
              payment/ordering to test functionality. Still under development,
              but you may log in with &apos;steve@example.com&apos; password
              &apos;123456&apos; or you may register a new user.
            </p>
            <p className="text-center">
              <Link
                href="https://github.com/Seedling32/e-commerce"
                target="_blank"
              >
                <Badge variant="secondary"> View Github</Badge>
              </Link>
            </p>
          </section>
          <Link
            href="https://e-commerce-nine-kappa-38.vercel.app/"
            target="_blank"
            className="col-span-2"
          >
            <Card className="p-6">
              <Image
                src="/work-2.png"
                alt="E commerce website."
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

export default ECommercePage;
