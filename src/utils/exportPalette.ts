export function exportCss(palette: string[]): string {
  return `:root {
  --color-background: ${palette[0]};
  --color-accent: ${palette[1]};
  --color-primary: ${palette[2]};
  --color-secondary: ${palette[3]};
}`
}

export function exportTailwind(palette: string[]): string {
  return `module.exports = {
  theme: {
    extend: {
      colors: {
        background: '${palette[0]}',
        accent: '${palette[1]}',
        primary: '${palette[2]}',
        secondary: '${palette[3]}'
      }
    }
  }
}`
}

export function exportJson(palette: string[]): string {
  return JSON.stringify(
    {
      background: palette[0],
      accent: palette[1],
      primary: palette[2],
      secondary: palette[3]
    },
    null,
    2
  )
}

export type ExportFormat = 'css' | 'tailwind' | 'json' | 'png'

export const EXPORT_FORMATS: ExportFormat[] = ['css', 'tailwind', 'json', 'png']
