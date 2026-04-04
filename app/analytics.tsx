"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-DZR3NFDBB4", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}