import { ShoppingCart } from '../icons'

export function CardWatchCasio() {
  return (
    <div className="col-span-2 h-124 row-span-2 bg-primary rounded-lg shadow-lg flex flex-col p-4 gap-6 items-cetner justify-between">
      <header className="flex justify-between text-background">
        <span className="bg-secondary py-2 px-4 rounded-2xl ">$60</span>
        <span className="bg-secondary py-2 px-4 rounded-2xl ">
          <ShoppingCart />
        </span>
      </header>
      <img
        className="w-80 object-cover mx-auto"
        src="./watch-casio-resize.webp"
        alt="Casio Vintage Watch A168WA"
        width="320"
        height="320"
        loading="lazy"
      />
      <p className="text-background text-xl font-medium text-center">
        Casio Vintage Watch (A168WA-5AYDF)
      </p>
    </div>
  )
}
