import Link from 'next/link';
import ModeToggle from './mode-toggle';
import { EllipsisVertical } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="hidden md:flex items-center w-full max-w-s gap-2"
      >
        <Link href="/#about" className="hover:text-primary">
          About
        </Link>
        <Link href="/#projects" className="hover:text-primary">
          Projects
        </Link>
        <Link href="/#contact" className="hover:text-primary">
          Contact
        </Link>
        <ModeToggle />
      </nav>
      <nav
        role="navigation"
        aria-label="Mobile navigation"
        className="md:hidden"
      >
        <Sheet>
          <SheetTrigger className="flex items-center">
            Menu
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start p-6">
            <SheetTitle>Menu</SheetTitle>
            <SheetClose asChild>
              <Link href="/#about" className="hover:underline">
                About
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/#projects" className="hover:underline">
                Projects
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/#contact" className="hover:underline">
                Contact
              </Link>
            </SheetClose>
            <ModeToggle />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
