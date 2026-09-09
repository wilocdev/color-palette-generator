export function CardPricing() {
  return (
    <div className="col-span-2 h-60 flex gap-4 p-4 bg-background shadow-lg rounded-lg">
      <div className="flex-1 flex flex-col gap-2 p-3 rounded-lg border border-accent/30 text-accent">
        <p className="text-xs font-medium  uppercase tracking-wide">Free</p>
        <p className="text-2xl font-bold ">$0</p>
        <p className="text-xs opacity-70">3 palettes / day</p>
        <p className="text-xs opacity-70">Basic export</p>
        <div className="mt-auto bg-primary rounded-lg py-1.5 text-center text-xs font-medium text-background">
          Current
        </div>
      </div>
      <div className="flex-1 relative flex flex-col gap-2 p-3 rounded-lg bg-primary text-background">
        <span className="absolute top-2 right-2 bg-background text-primary text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
          Popular
        </span>
        <p className="text-xs font-medium uppercase tracking-wide opacity-80">
          Pro
        </p>
        <p className="text-2xl font-bold">$9</p>
        <p className="text-xs opacity-70">Unlimited palettes</p>
        <p className="text-xs opacity-70">All exports + AI modes</p>
        <div className="mt-auto bg-background text-primary rounded-lg py-1.5 text-center text-xs font-medium">
          Upgrade
        </div>
      </div>
    </div>
  )
}
