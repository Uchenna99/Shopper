import confetti from "canvas-confetti";

/**
 * Fires a confetti burst from a given element
 */
export const fireConfettiFromElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const rect = element.getBoundingClientRect();

  // Convert position to normalized coordinates for confetti
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  confetti({
    particleCount: 80,
    startVelocity: 30,
    spread: 60,
    origin: { x, y },
  });
};
