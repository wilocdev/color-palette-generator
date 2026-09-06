export function ColorUsage() {
  return (
    <div className="flex flex-col p-4 rounded-lg col-span-2 bg-background text-accent shadow-lg h-60 justify-between">
      <p className="text-2xl font-bold">Color Usage</p>
      <div className="ml-12 flex gap-2 items-end font-medium">
        <div className="flex flex-col w-full">
          <span className="bg-primary h-20 rounded-lg"></span>
          <p className="text-center">20</p>
        </div>
        <div className="flex flex-col w-full">
          <span className="bg-primary h-5 rounded-lg"></span>
          <p className="text-center">30</p>
        </div>
        <div className="flex flex-col  w-full">
          <span className="bg-primary h-10 rounded-lg"></span>
          <p className="text-center">40</p>
        </div>
        <div className="flex flex-col w-full relative">
          <span className="triangulo-abajo absolute py-1 px-2 bg-accent text-primary rounded-lg -top-11 left-1/2 -translate-x-1/2">
            15%
          </span>
          <span className="bg-primary h-30 rounded-lg"></span>
          <p className="text-center">50</p>
        </div>
        <div className="flex flex-col w-full">
          <span className="bg-primary h-15 rounded-lg"></span>
          <p className="text-center">60</p>
        </div>
      </div>
    </div>
  )
}
