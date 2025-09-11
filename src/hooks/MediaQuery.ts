import { useEffect, useState } from "react";


export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Add listener
    mediaQuery.addEventListener("change", handler);

    // Initial check
    setMatches(mediaQuery.matches);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}