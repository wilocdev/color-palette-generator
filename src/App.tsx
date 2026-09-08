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
  Footer,
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
      <Footer />
    </div>
  )
}

export default App
