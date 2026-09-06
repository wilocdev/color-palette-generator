import {
  BentoLayout,
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
      <BentoLayout>
        <ColorUsage />
        <CardShowIcons />
        <CardProcessCompleted />
      </BentoLayout>
    </div>
  )
}

export default App
