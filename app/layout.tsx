import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Eronsy Healthcare Ltd - Compassionate Care for Mental Health & Learning Challenges',
  description: 'Patient-centered support services tailored to individual needs. Specialized care for learning difficulties, mental health, and substance abuse.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className={openSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}