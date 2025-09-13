export function splitPrice(price: number): { main: string; decimal: string } {
  const [main, decimal] = price.toFixed(2).split(".");
  return { main, decimal };
}


export function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
