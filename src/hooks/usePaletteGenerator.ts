import { useEffect, useState } from 'react'
import { generatePalette } from '../api/generatePalette'
import type { PaletteStyles } from '../types/palette'

export const usePaletteGenerator = () => {
  const [palette, setPalette] = useState<string[] | null>(null)
  const [loading, setLoading] = useState(false)

  const generate = async () => {
    setLoading(true)

    try {
      const results = await generatePalette()
      setPalette(results[0].palette)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    generate()
  }, [])

  const paletteStyles: PaletteStyles | undefined = palette
    ? {
        '--color-background': palette[0],
        '--color-accent': palette[1],
        '--color-primary': palette[2],
        '--color-secondary': palette[3]
      }
    : undefined

  return {
    palette,
    loading,
    generate,
    paletteStyles
  }
}
