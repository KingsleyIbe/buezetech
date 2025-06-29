'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Extend window to include gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalyticsTracker(): null {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;

    window.gtag('config', GA_TRACKING_ID, {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
