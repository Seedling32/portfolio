import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/header/index';

const ExpenseTrackerPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Nav />
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center pt-52">
        <h1 className="text-5xl mb-4 text-center">Expense Tracker</h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <section className="mb-6">
            <h2>Description:</h2>
            <p>
              This simple expense tracker is built using Next.js, Prisma and
              Neon as the back-end,and Clerk is used for authentication. Keep
              track of expenses and stay on budget, or meet that savings goal!
              Sign in with your Google account or create a new user using your
              email address.
            </p>
            <p className="text-center">
              <Link
                href="https://github.com/Seedling32/expense-tracker-nextjs"
                target="_blank"
              >
                <Badge variant="secondary"> View Github</Badge>
              </Link>
            </p>
          </section>
          <Link
            href="https://expense-tracker-nextjs-delta.vercel.app/"
            target="_blank"
            className="col-span-2"
          >
            <Card className="p-6">
              <Image
                src="/work-3.png"
                alt="Expense tracker application."
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

export default ExpenseTrackerPage;
