import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { generatePalette } from '../api/generatePalette'
import type { PaletteStyles } from '../types/palette'

const STORAGE_KEY = 'palette-lab-last'

function loadCachedPalette(): string[] | null {
  try {
    const cached = sessionStorage.getItem(STORAGE_KEY)
    return cached ? JSON.parse(cached) : null
  } catch {
    return null
  }
}

function saveCachedPalette(palette: string[]) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(palette))
  } catch {
    // ignore quota errors
  }
}

export const usePaletteGenerator = () => {
  const [palette, setPalette] = useState<string[] | null>(loadCachedPalette)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  const generate = useCallback(async () => {
    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    setLoading(true)
    setError(null)

    try {
      const results = await generatePalette(controller.signal)
      setPalette(results[0].palette)
      saveCachedPalette(results[0].palette)
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return
      setError('No se pudo generar la paleta. Intenta de nuevo.')
    } finally {
      if (abortRef.current === controller) setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!palette) {
      generate()
    }
    return () => abortRef.current?.abort()
  }, [generate, palette])

  const paletteStyles: PaletteStyles | undefined = useMemo(
    () =>
      palette
        ? {
            '--color-background': palette[0],
            '--color-accent': palette[1],
            '--color-primary': palette[2],
            '--color-secondary': palette[3]
          }
        : undefined,
    [palette]
  )

  return {
    palette,
    loading,
    error,
    generate,
    paletteStyles
  }
}
