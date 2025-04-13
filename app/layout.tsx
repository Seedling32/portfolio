import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    template: 'David Graham | %s',
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased font-Outfit leading-8 overflow-x-hidden`}>
        <main>{children}</main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
