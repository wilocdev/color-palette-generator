import { Suspense, lazy } from 'react'
import { BentoSkeleton } from './components/BentoSkeleton'

const BentoLayout = lazy(() =>
  import('./components/BentoLayout').then(m => ({ default: m.BentoLayout }))
)
const CardShowWeather = lazy(() =>
  import('./components/cards/CardShowWeather').then(m => ({
    default: m.CardShowWeather
  }))
)
const CardPricing = lazy(() =>
  import('./components/cards/CardPricing').then(m => ({
    default: m.CardPricing
  }))
)
const CardTodo = lazy(() =>
  import('./components/cards/CardTodo').then(m => ({ default: m.CardTodo }))
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
const CardMusicPlayer = lazy(() =>
  import('./components/cards/CardMusicPlayer').then(m => ({
    default: m.CardMusicPlayer
  }))
)
const CardNews = lazy(() =>
  import('./components/cards/CardNews').then(m => ({ default: m.CardNews }))
)

export function LazyBentoSection() {
  return (
    <Suspense fallback={<BentoSkeleton />}>
      <BentoLayout>
        <CardMusicPlayer />
        <CardPricing />
        <CardNews />
        <CardSignup />
        <CardChat />
        <CardShowWeather />
        <CardTodo />
        <CardNavbar />
        <CardKanban />
        <CardNotifications />
      </BentoLayout>
    </Suspense>
  )
}
