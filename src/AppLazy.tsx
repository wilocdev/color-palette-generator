import { Suspense, lazy } from 'react'
import { BentoSkeleton } from './components/BentoSkeleton'

const BentoLayout = lazy(() =>
  import('./components/BentoLayout').then(m => ({ default: m.BentoLayout }))
)
const CardColorUsage = lazy(() =>
  import('./components/cards/CardColorUsage').then(m => ({
    default: m.CardColorUsage
  }))
)
const CardShowIcons = lazy(() =>
  import('./components/cards/CardShowIcons').then(m => ({
    default: m.CardShowIcons
  }))
)
const CardProcessCompleted = lazy(() =>
  import('./components/cards/CardProcessCompleted').then(m => ({
    default: m.CardProcessCompleted
  }))
)
const CardButton = lazy(() =>
  import('./components/cards/CardButtons').then(m => ({
    default: m.CardButton
  }))
)
const CardShowWeather = lazy(() =>
  import('./components/cards/CardShowWeather').then(m => ({
    default: m.CardShowWeather
  }))
)
const CardWatchCasio = lazy(() =>
  import('./components/cards/CardWatchCasio').then(m => ({
    default: m.CardWatchCasio
  }))
)
const CardTimer = lazy(() =>
  import('./components/cards/CardTimer').then(m => ({ default: m.CardTimer }))
)
const CardMood = lazy(() =>
  import('./components/cards/CardMood').then(m => ({ default: m.CardMood }))
)
const CardProfile = lazy(() =>
  import('./components/cards/CardProfile').then(m => ({
    default: m.CardProfile
  }))
)
const CardCoffe = lazy(() =>
  import('./components/cards/CardCoffe').then(m => ({ default: m.CardCoffe }))
)
const CardPricing = lazy(() =>
  import('./components/cards/CardPricing').then(m => ({
    default: m.CardPricing
  }))
)
const CardSignup = lazy(() =>
  import('./components/cards/CardSignup').then(m => ({ default: m.CardSignup }))
)
const CardNavbar = lazy(() =>
  import('./components/cards/CardNavbar').then(m => ({ default: m.CardNavbar }))
)
const CardKanban = lazy(() =>
  import('./components/cards/CardKanban').then(m => ({ default: m.CardKanban }))
)
const CardChat = lazy(() =>
  import('./components/cards/CardChat').then(m => ({ default: m.CardChat }))
)
const CardNotifications = lazy(() =>
  import('./components/cards/CardNotifications').then(m => ({
    default: m.CardNotifications
  }))
)

export function LazyBentoSection() {
  return (
    <Suspense fallback={<BentoSkeleton />}>
      <BentoLayout>
        <CardColorUsage />
        <CardShowIcons />
        <CardProcessCompleted />
        <CardButton />
        <CardShowWeather />
        <CardWatchCasio />
        <CardTimer />
        <CardMood />
        <CardProfile />
        <CardCoffe />
        <CardPricing />
        <CardSignup />
        <CardNavbar />
        <CardKanban />
        <CardChat />
        <CardNotifications />
      </BentoLayout>
    </Suspense>
  )
}
