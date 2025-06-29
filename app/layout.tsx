import type { Metadata } from "next";
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import { Geist, Geist_Mono, Bree_Serif, Lato } from "next/font/google";
import "../styles/globals.css";
import GoogleAnalyticsTracker from './ga-tracker';

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

  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <head>
         {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${breeSerif.variable} font-sans antialiased`}
      >
        <GoogleAnalyticsTracker />
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
