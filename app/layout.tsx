import type { Metadata } from "next";
import { Geist, Geist_Mono, Bree_Serif, Lato } from "next/font/google";
import "../styles/globals.css";

const breeSerif = Bree_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-bree-serif',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // or whatever weights you need
  variable: '--font-lato',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bueze Tech Limited",
  description: "IT Consulting Firm, Software Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${breeSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
