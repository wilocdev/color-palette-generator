export function BentoResponsive({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto mt-20 max-w-[1170px] grid grid-cols-2 md:grid md:grid-cols-4 gap-4 xl:grid xl:grid-cols-5 xl:grid-rows-3">
      {children}
    </section>
  )
}
