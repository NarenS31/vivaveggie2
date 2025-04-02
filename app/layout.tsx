import React from 'react';
import { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import { QueryProvider } from '@/lib/query-provider';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'VivaVeggie | Delicious Vegetarian Cuisine',
  description: 'Enjoy fresh, locally-sourced vegetarian cuisine. Order online for pickup or delivery.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://replit.com/public/js/replit-badge-v3.js" type="text/javascript"></script>
      </head>
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}