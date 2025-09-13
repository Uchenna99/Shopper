import { useEffect, useState } from "react";

export function useScreenWidth(threshold: number): boolean {
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia(`(max-width: ${threshold}px)`).matches
      : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${threshold}px)`);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaQuery.addEventListener("change", handler);

    // Initial check
    setMatches(mediaQuery.matches);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [threshold]);

  return matches;
}
