import { useEffect, useState } from 'react'
import { generatePalette } from '../api/generatePalette'

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

  return {
    palette,
    loading,
    generate
  }
}
