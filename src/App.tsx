import { Hero } from './components/Hero'
import { usePaletteGenerator } from './hooks/usePaletteGenerator'

function App() {
  const { palette, loading, generate, paletteStyles } = usePaletteGenerator()

  return (
    <div style={paletteStyles}>
      <Hero palette={palette} loading={loading} generate={generate} />
    </div>
  )
}

export default App
