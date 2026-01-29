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
              Prostore is a full-stack e-commerce platform I built as part of an
              advanced, project-based Next.js course and extended independently
              to reinforce real-world patterns and best practices. The project
              goes well beyond a simple tutorial by implementing a complete
              shopping experience with authentication, payments, admin
              management, and analytics—mirroring the architecture and workflows
              used in production e-commerce applications. You may log in with
              &apos;steve@example.com&apos; password &apos;123456&apos; or you
              may register a new user.
            </p>

            <h2>Key Features:</h2>
            <ul className="mb-4 list-disc ml-4">
              <li>
                <strong>End-to-End Shopping Flow:</strong> Product browsing,
                sorting, search filters, cart management, and checkout with
                session persistence using cookies and JWTs.
              </li>
              <li>
                <strong>Multiple Payment Options:</strong> Integrated PayPal,
                Stripe, and Cash on Delivery to reflect real-world checkout
                scenarios.
              </li>
              <li>
                <strong>Authentication &amp; User Accounts:</strong> Secure
                login and user profile management using NextAuth, with
                role-based access for administrators.
              </li>
              <li>
                <strong>Reviews &amp; Rating Systems:</strong> Users can leave
                product reviews to create feedback loops and trust signals
                common in modern storefronts.
              </li>
              <li>
                <strong>Admin Dashboard:</strong> A protected admin area with
                product, order, and user management, plus site metrics and a
                monthly sales chart built with Recharts.
              </li>
              <li>
                <strong>Media Management:</strong> Product image uploads handled
                through UploadThing for a streamlined content workflow.
              </li>
            </ul>

            <h2>Modern Tech Stack:</h2>
            <ul className="list-disc ml-4 mb-4">
              <li>
                <strong>Frontend:</strong> Next.js 15, React 19, TypeScript,
                Tailwind CSS, ShadCN UI, React Hook Form, Recharts
              </li>
              <li>
                <strong>Backend &amp; Data:</strong> PostgreSQL, Prisma ORM, Zod
                validation
              </li>
              <li>
                <strong>Auth &amp; Payments:</strong> NextAuth, PayPal API,
                Stripe API
              </li>
              <li>
                <strong>Dev &amp; Deployment:</strong> ESLint, Jest, Git, Vercel
                (CI/CD)
              </li>
            </ul>

            <h2>Challenges Solved:</h2>
            <ul className="list-disc ml-4 mb-4">
              <li>
                <strong>Modeled a realistic e-commerce domain</strong>{' '}
                (products, orders, payments, reviews, users) using Prisma and
                PostgreSQL.
              </li>
              <li>
                <strong>Implemented multi-provider payment flows</strong> while
                maintaining consistent order state across Stripe, PayPal, and
                COD paths.
              </li>
              <li>
                <strong>Built role-based route protection</strong> and
                admin-only actions to safely manage store operations.
              </li>
              <li>
                <strong>
                  Created type-safe forms and validation pipelines
                </strong>{' '}
                using React Hook Form and Zod to reduce runtime errors.
              </li>
              <li>
                <strong>
                  Translated business data into meaningful visuals
                </strong>{' '}
                by implementing sales analytics and charts for the admin
                dashboard.
              </li>
            </ul>

            <h2>Takeaways:</h2>
            <p>
              This project strengthened my ability to take a complex set of
              requirements and implement them in a production-style Next.js
              application. Working through authentication, payments, admin
              tooling, and deployment gave me hands-on experience with the kinds
              of tradeoffs and edge cases that arise in real e-commerce systems,
              while reinforcing best practices around type safety, security, and
              maintainability.
            </p>
            <p className="text-center mt-4">
              <Link
                href="https://github.com/Seedling32/e-commerce"
                target="_blank"
              >
                <Badge variant="secondary" className="px-10">
                  View Github
                </Badge>
              </Link>
            </p>
          </section>
          <Link
            href="https://e-commerce-nine-kappa-38.vercel.app/"
            target="_blank"
            className="self-center"
          >
            <Card className="p-6 flex items-center max-w-2xl">
              <Image
                src="/work-2.png"
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
