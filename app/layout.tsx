import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ziyan Sheikh | Full Stack Developer',
  description: 'Modern full stack portfolio built with Next.js, Tailwind, Framer Motion, and React Three Fiber.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
