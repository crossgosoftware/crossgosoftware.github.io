import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useCallback, useEffect, useState } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// Custom hook for hash-based routing with wouter (for GitHub Pages compatibility)
export const useHashLocation = (): [string, (to: string) => void] => {
  const [location, setLocation] = useState<string>(
    window.location.hash.replace("#", "") || "/"
  );

  const handleHashChange = useCallback(() => {
    setLocation(window.location.hash.replace("#", "") || "/");
  }, []);

  useEffect(() => {
    // Subscribe to hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      // Unsubscribe from hash changes
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange]);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [location, navigate];
};
