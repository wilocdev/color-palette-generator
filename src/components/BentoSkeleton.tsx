const CARD_SHAPES: { cols: 1 | 2; rows: 1 | 2 }[] = [
  { cols: 2, rows: 1 }, // CardColorUsage
  { cols: 1, rows: 1 }, // CardShowIcons
  { cols: 1, rows: 1 }, // CardProcessCompleted
  { cols: 1, rows: 1 }, // CardButton
  { cols: 1, rows: 1 }, // CardShowWeather
  { cols: 2, rows: 2 }, // CardWatchCasio
  { cols: 2, rows: 1 }, // CardTimer
  { cols: 1, rows: 1 }, // CardMood
  { cols: 1, rows: 1 }, // CardProfile
  { cols: 1, rows: 1 }, // CardCoffe
  { cols: 2, rows: 1 }, // CardPricing
  { cols: 2, rows: 1 }, // CardSignup
  { cols: 2, rows: 1 }, // CardNavbar
  { cols: 2, rows: 1 }, // CardKanban
  { cols: 2, rows: 1 }, // CardChat
  { cols: 1, rows: 1 } // CardNotifications
]

export function BentoSkeleton() {
  return (
    <section className="mx-auto mt-20 max-w-292.5 grid grid-cols-2 md:grid-cols-4 gap-4 xl:grid-cols-5">
      {CARD_SHAPES.map((shape, i) => (
        <div
          key={i}
          className={`animate-pulse rounded-lg bg-neutral-200 ${
            shape.rows === 2 ? 'h-124' : 'h-60'
          } ${shape.cols === 2 ? 'col-span-2' : ''}`}
        />
      ))}
    </section>
  )
}
