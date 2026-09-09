import { useState } from 'react'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { ExportModal } from './components/ExportModal'
import { LazyBentoSection } from './AppLazy'
import { usePaletteGenerator } from './hooks/usePaletteGenerator'

function App() {
  const {
    palette,
    loading,
    error,
    generate,
    paletteStyles,
    lockedColors,
    temperature,
    toggleLock,
    setTemperature
  } = usePaletteGenerator()
  const [showExport, setShowExport] = useState(false)

  return (
    <div style={paletteStyles} className="p-4 mb-6 palette-transition">
      <Hero
        key={palette?.join('-')}
        palette={palette}
        loading={loading}
        error={error}
        generate={generate}
        lockedColors={lockedColors}
        temperature={temperature}
        onToggleLock={toggleLock}
        onTemperatureChange={setTemperature}
        onExport={palette ? () => setShowExport(true) : undefined}
      />
      <LazyBentoSection />
      <Footer />
      {showExport && palette && (
        <ExportModal palette={palette} onClose={() => setShowExport(false)} />
      )}
    </div>
  )
}

export default App
