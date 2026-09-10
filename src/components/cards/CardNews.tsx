export function CardNews() {
  return (
    <div className="col-span-2 xl:col-span-3 h-60 flex overflow-hidden rounded-lg bg-background text-accent shadow-lg">
      <aside className="relative w-2/5 shrink-0 bg-linear-to-tr from-primary to-secondary">
        <span className="absolute top-3 left-3 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-background uppercase tracking-wide">
          Design
        </span>
        <div className="absolute inset-x-4 bottom-3 flex flex-col gap-1.5 opacity-80">
          <div className="h-1.5 w-3/4 rounded-full bg-background/50" />
          <div className="h-1.5 w-1/2 rounded-full bg-background/50" />
        </div>
      </aside>
      <div className="flex flex-1 flex-col p-4 min-w-0">
        <p className="text-[10px] uppercase tracking-wide opacity-70">
          Design · 5 min read
        </p>
        <h3 className="mt-1.5 text-sm font-semibold leading-snug line-clamp-2">
          The rise of AI-generated color palettes in modern product design
        </h3>
        <p className="mt-1.5 text-xs opacity-70 line-clamp-2">
          Designers are trading manual swatch pickers for algorithms that craft
          harmonious schemes in seconds.
        </p>
        <footer className="mt-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-background text-[10px] font-bold">
              WO
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium">Wilson Ochoa</p>
              <p className="text-[10px] opacity-50">Sep 09, 2026</p>
            </div>
          </div>
          <span className="shrink-0 text-[11px] font-medium text-accent underline underline-offset-2">
            Read more
          </span>
        </footer>
      </div>
    </div>
  )
}
