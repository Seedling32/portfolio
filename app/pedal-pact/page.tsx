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
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center pt-52">
        <h1 className="text-5xl mb-4 text-center">Pedal-Pact</h1>

        <div className="flex flex-col-reverse">
          <section className="mb-6">
            <h2>Overview:</h2>
            <p className="mb-4">
              Pedal Pact is a full-stack web application I developed as my
              capstone project for the AAS in Web & Software Development
              program. Designed for cycling enthusiasts, it provides a platform
              for riders to create, join, and manage group rides;complete with
              interactive route mapping and ride registration features. You may
              log in with &apos;steve@example.com&apos; password
              &apos;123456&apos; or you may register a new user.
            </p>

            <h2>Key Features:</h2>
            <ul className="mb-4 list-disc ml-4">
              <li>
                <strong>Interactive Google Maps Integration:</strong> Users can
                draw custom bike routes directly on the map, view terrain and
                elevation, and save those routes to share with others.
              </li>
              <li>
                <strong>Role-Based Access Control:</strong> Public visitors can
                browse rides, members can join them, and admins can create and
                manage routes and events.
              </li>
              <li>
                <strong>User Authentication &amp; Authorization:</strong> Secure
                login and registration with email verification, password reset,
                and CAPTCHA protection using Resend and Cloudflare Turnstile.
              </li>
              <li>
                <strong>Responsive Design:</strong> Mobile-first, fully
                responsive UI built with React and Tailwind CSS for a seamless
                experience across devices.
              </li>
              <li>
                <strong>Modern Tech Stack:</strong>
                <ul className="ml-4 list-disc">
                  <li>
                    <strong>Frontend:</strong> Next.js 15, React 19, Tailwind
                    CSS
                  </li>
                  <li>
                    <strong>Backend:</strong> Node.js, Prisma ORM, PostgreSQL
                    (hosted on Neon)
                  </li>
                  <li>
                    <strong>APIs:</strong> Google Maps JavaScript API, Maps
                    Elevation API, National Weather Service, UploadThing
                  </li>
                  <li>
                    <strong>Deployment:</strong> Vercel with a custom domain
                    configured via SiteGround
                  </li>
                </ul>
              </li>
            </ul>

            <h2>Challenges Solved:</h2>
            <ul className="list-disc ml-4 mb-4">
              <li>
                Developed a route-saving mechanism that converts drawn map paths
                into GeoJSON and stores them in the database for later use.
              </li>
              <li>
                Designed and implemented role-based page protection and
                server-side logic for user actions using NextAuth.js.
              </li>
              <li>
                Optimized map performance and implemented static map generation
                for fast-loading previews.
              </li>
              <li>
                Addressed accessibility issues to ensure keyboard navigation,
                ARIA compliance, and visual contrast met usability standards.
              </li>
            </ul>

            <h2>Takeaways:</h2>
            <p>
              Building Pedal Pact taught me how to structure and scale a
              real-world full-stack application. I deepened my knowledge of
              relational databases, RESTful API design, secure authentication
              flows, and geospatial data handling. It also gave me firsthand
              experience with performance optimization, usability testing, and
              deploying a production-ready app.
            </p>
            <p className="text-center mt-4">
              <Link
                href="https://github.com/Seedling32/capstone"
                target="_blank"
              >
                <Badge variant="secondary" className="px-10">
                  View Github
                </Badge>
              </Link>
            </p>
          </section>
          <Link
            href="https://www.pedal-pact.com/"
            target="_blank"
            className="self-center"
          >
            <Card className="p-6 flex items-center max-w-2xl">
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
