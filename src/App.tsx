import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LazyBentoSection } from './AppLazy'
import { usePaletteGenerator } from './hooks/usePaletteGenerator'

function App() {
  const { palette, loading, error, generate, paletteStyles } =
    usePaletteGenerator()

  return (
    <div style={paletteStyles} className="p-4 mb-6">
      <Hero
        palette={palette}
        loading={loading}
        error={error}
        generate={generate}
      />
      <LazyBentoSection />
      <Footer />
    </div>
  )
}

export default App
