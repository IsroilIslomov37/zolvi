/** Digits after +998, formatted as "90 123 45 67". Kept free of dependencies: it ships to the browser. */
export function formatUzPhone(input: string): string {
  let digits = input.replace(/\D/g, '')
  if (digits.startsWith('998')) digits = digits.slice(3)
  digits = digits.slice(0, 9)
  const parts = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)]
  return parts.filter(Boolean).join(' ')
}
