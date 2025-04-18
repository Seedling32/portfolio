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
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h1 className="text-5xl mb-4 text-center">WNC Birds Database</h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <section className="mb-6">
            <h2>Description:</h2>
            <p>
              This application features real-time CRUD functionality, enabling
              seamless addition, editing, and deletion of records. This project
              demonstrates proficiency in full-stack development, efficient
              database integration, and user-centric design, ensuring an
              intuitive and responsive user experience. You may log in as a
              member as &apos;testMember&apos or an admin as &apos;steve&apos;.
              Both logins use &apos;t3stP@ssword&apos; as the password.
            </p>
            <p className="text-center">
              <Link
                href="https://github.com/Seedling32/web250-oop/tree/main/web250-oopdb/asgn11-three-views"
                target="_blank"
              >
                <Badge variant="secondary"> View Github</Badge>
              </Link>
            </p>
          </section>
          <Link
            href="https://birds.davidrgraham.com/birds/public/"
            target="_blank"
            className="col-span-2"
          >
            <Card className="p-6">
              <Image
                src="/work-4.png"
                alt="WNC birdswebsite."
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
