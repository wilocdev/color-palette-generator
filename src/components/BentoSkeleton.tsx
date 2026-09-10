const CARD_SHAPES: string[] = [
  'col-span-2 xl:col-span-3', // CardMusicPlayer
  'col-span-2', // CardPricing
  'col-span-2 xl:col-span-3', // CardNews
  'col-span-2', // CardSignup
  'col-span-2 xl:col-span-3', // CardChat
  'col-span-1', // CardShowWeather
  'col-span-2 md:col-span-1', // CardTodo
  'col-span-2', // CardNavbar
  'col-span-2 md:col-span-1 xl:col-span-2', // CardKanban
  'col-span-1 md:col-span-2 xl:col-span-1' // CardNotifications
]

export function BentoSkeleton() {
  return (
    <section className="mx-auto mt-20 max-w-292.5 grid grid-cols-2 md:grid-cols-4 gap-4 xl:grid-cols-5">
      {CARD_SHAPES.map((className, i) => (
        <div
          key={i}
          className={`animate-pulse rounded-lg bg-neutral-200 h-60 ${className}`}
        />
      ))}
    </section>
  )
}
