import {
  BentoResponsive,
  CardProcessCompleted,
  CardShowIcons,
  ColorUsage,
  Hero
} from './components'
import { usePaletteGenerator } from './hooks/usePaletteGenerator'

function App() {
  const { palette, loading, generate, paletteStyles } = usePaletteGenerator()

  return (
    <div style={paletteStyles} className="p-4">
      <Hero palette={palette} loading={loading} generate={generate} />
      <BentoResponsive>
        <ColorUsage />
        <CardShowIcons />
        <CardProcessCompleted />
      </BentoResponsive>
    </div>
  )
}

export default App
