export function CardNavbar() {
  return (
    <div className="col-span-2 h-60 flex flex-col shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-accent text-background">
        <span className="font-bold tracking-tight">Palette</span>
        <nav className="flex items-center gap-4 text-xs">
          <span className="opacity-80">Home</span>
          <span className="opacity-80">Library</span>
          <span className="opacity-80">Pricing</span>
          <span className="bg-background text-accent rounded-md px-2 py-1 font-medium">
            Sign in
          </span>
        </nav>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-2 bg-secondary p-4">
        <p className="text-xl font-medium">Build stunning palettes</p>
        <p className="text-xs opacity-70 text-center">
          AI-generated color schemes for your next project.
        </p>
        <div className="flex gap-2 mt-1">
          <span className="bg-primary text-background rounded-md px-3 py-1.5 text-xs font-medium">
            Get started
          </span>
          <span className="border border-primary text-primary rounded-md px-3 py-1.5 text-xs font-medium">
            Learn more
          </span>
        </div>
      </div>
    </div>
  )
}
