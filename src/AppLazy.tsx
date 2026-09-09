import { Suspense, lazy } from 'react'
import { BentoSkeleton } from './components/BentoSkeleton'

const BentoLayout = lazy(() =>
  import('./components/BentoLayout').then(m => ({ default: m.BentoLayout }))
)
const ColorUsage = lazy(() =>
  import('./components/ColorUsage').then(m => ({ default: m.ColorUsage }))
)
const CardShowIcons = lazy(() =>
  import('./components/CardShowIcons').then(m => ({ default: m.CardShowIcons }))
)
const CardProcessCompleted = lazy(() =>
  import('./components/CardProcessCompleted').then(m => ({
    default: m.CardProcessCompleted
  }))
)
const CardButton = lazy(() =>
  import('./components/CardButtons').then(m => ({ default: m.CardButton }))
)
const CardShowWeather = lazy(() =>
  import('./components/CardShowWeather').then(m => ({
    default: m.CardShowWeather
  }))
)
const CardWatchCasio = lazy(() =>
  import('./components/CardWatchCasio').then(m => ({
    default: m.CardWatchCasio
  }))
)
const CardTimer = lazy(() =>
  import('./components/CardTimer').then(m => ({ default: m.CardTimer }))
)
const CardMood = lazy(() =>
  import('./components/CardMood').then(m => ({ default: m.CardMood }))
)
const CardProfile = lazy(() =>
  import('./components/CardProfile').then(m => ({ default: m.CardProfile }))
)
const CardCoffe = lazy(() =>
  import('./components/CardCoffe').then(m => ({ default: m.CardCoffe }))
)

export function LazyBentoSection() {
  return (
    <Suspense fallback={<BentoSkeleton />}>
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
    </Suspense>
  )
}
