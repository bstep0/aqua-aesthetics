"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    // The layout's gtag config already counts the first page view.
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.gtag) {
      window.gtag("config", "G-DZR3NFDBB4", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}