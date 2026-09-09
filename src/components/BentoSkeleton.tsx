export function BentoSkeleton() {
  return (
    <section className="mx-auto mt-20 max-w-292.5 grid grid-cols-2 md:grid-cols-4 gap-4 xl:grid-cols-5 xl:grid-rows-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-lg bg-neutral-200 h-60"
        />
      ))}
    </section>
  )
}
