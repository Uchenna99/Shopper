export function splitPrice(price: number): { main: string; decimal: string } {
  const [main, decimal] = price.toFixed(2).split(".");
  return { main, decimal };
}
