export function BentoLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto mt-20 max-w-292.5 grid grid-cols-2 md:grid-cols-4 gap-4 xl:grid-cols-5">
      {children}
    </section>
  )
}
