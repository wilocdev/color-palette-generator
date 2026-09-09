export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16)
  ]
}

function linearize(c: number): number {
  const s = c / 255
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
}

export function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex)
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b)
}

export function contrastRatio(hex1: string, hex2: string): number {
  const l1 = relativeLuminance(hex1)
  const l2 = relativeLuminance(hex2)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

export type WcagRating = 'AAA' | 'AA' | 'AA Large' | 'Fail'

export function wcagRating(ratio: number): WcagRating {
  if (ratio >= 7) return 'AAA'
  if (ratio >= 4.5) return 'AA'
  if (ratio >= 3) return 'AA Large'
  return 'Fail'
}

export function wcagColor(rating: WcagRating, isDark: boolean): string {
  if (rating === 'AAA' || rating === 'AA') {
    return isDark ? 'bg-green-500/85 text-white' : 'bg-green-600/85 text-white'
  }
  if (rating === 'AA Large') {
    return 'bg-yellow-400/90 text-neutral-900'
  }
  return isDark ? 'bg-red-500/85 text-white' : 'bg-red-600/85 text-white'
}
