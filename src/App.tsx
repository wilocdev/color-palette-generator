import {
  BentoLayout,
  CardButton,
  CardCoffe,
  CardMood,
  CardProcessCompleted,
  CardProfile,
  CardShowIcons,
  CardShowWeather,
  CardTimer,
  CardWatchCasio,
  ColorUsage,
  Hero
} from './components'
import { usePaletteGenerator } from './hooks/usePaletteGenerator'

function App() {
  const { palette, loading, generate, paletteStyles } = usePaletteGenerator()

  return (
    <div style={paletteStyles} className="p-4 mb-6">
      <Hero palette={palette} loading={loading} generate={generate} />
      <BentoLayout>
        <ColorUsage />
        <CardShowIcons />
        <CardProcessCompleted />
        <CardButton />
        <CardShowWeather />
        <CardWatchCasio />
        <CardTimer />
        <CardMood />
        <CardProfile />
        <CardCoffe />
      </BentoLayout>
    </div>
  )
}

export default App
