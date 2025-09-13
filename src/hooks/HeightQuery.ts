import { useEffect, useState } from "react";

export function useScreenHeight(threshold: number): boolean {
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia(`(max-height: ${threshold}px)`).matches
      : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-height: ${threshold}px)`);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    mediaQuery.addEventListener("change", handler);

    // Initial check
    setMatches(mediaQuery.matches);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [threshold]);

  return matches;
}
