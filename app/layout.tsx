import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
export const metadata: Metadata = {
  title: 'David Graham | Portfolio',
  description:
    'Showcasing my work in web development, design, and creative projects — explore my latest builds, case studies, and passion projects.',
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
