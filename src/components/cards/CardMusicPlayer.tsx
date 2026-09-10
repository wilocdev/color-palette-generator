import { MusicNoteIcon, PlayIcon, SkipBackIcon, SkipForwardIcon } from '../icons'

export function CardMusicPlayer() {
  const bars = [
    { className: 'bg-accent h-3', delay: '0s' },
    { className: 'bg-primary h-6', delay: '0.12s' },
    { className: 'bg-secondary h-4', delay: '0.24s' },
    { className: 'bg-accent h-7', delay: '0.36s' },
    { className: 'bg-primary h-5', delay: '0.48s' },
    { className: 'bg-secondary h-3', delay: '0.6s' },
    { className: 'bg-accent h-6', delay: '0.72s' },
    { className: 'bg-primary h-4', delay: '0.84s' }
  ]

  return (
    <div className="col-span-2 xl:col-span-3 h-60 flex items-center gap-4 bg-background text-accent shadow-lg rounded-lg p-4">
      <div className="relative h-36 w-36 shrink-0 rounded-lg bg-linear-to-tr from-primary to-secondary text-background flex items-center justify-center">
        <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
        <MusicNoteIcon />
      </div>
      <div className="flex flex-1 flex-col gap-3 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Midnight Signals</p>
            <p className="truncate text-xs opacity-70">Neon Harbor</p>
          </div>
          <div className="flex items-end gap-0.5 h-8">
            {bars.map((bar, i) => (
              <span
                key={i}
                className={`eq-bar ${bar.className}`}
                style={{ animationDelay: bar.delay }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] opacity-60">2:44</span>
          <div className="relative h-1 flex-1 rounded-full bg-accent/15">
            <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-accent" />
            <span className="absolute top-1/2 left-2/3 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-2 ring-background" />
          </div>
          <span className="text-[10px] opacity-60">3:20</span>
        </div>
        <div className="flex items-center justify-center gap-5">
          <SkipBackIcon />
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-background">
            <PlayIcon />
          </span>
          <SkipForwardIcon />
        </div>
      </div>
    </div>
  )
}