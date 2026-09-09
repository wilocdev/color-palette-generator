import { MinusIco, PlusIcon } from '../icons'

export function CardCoffe() {
  return (
    <div className="col-span-2 xl:col-span-1 flex-col flex justify-between p-4 h-60 rounded-lg shadow-lg text-accent bg-secondary">
      <div className="flex gap-2 w-full font-medium ">
        <img
          className="w-20 h-20 rounded-xl"
          src="./caffe.webp"
          alt="Cafe Latte"
          width="80"
          height="80"
          loading="lazy"
        />
        <div>
          <h2>Cafe Latte</h2>
          <p className="opacity-70 text-sm">Large</p>
          <p className="opacity-70 text-sm">2% Milk</p>
        </div>
      </div>
      <footer className="flex gap-2 xl:flex-col ">
        <div className="rounded-full py-2 w-36 border-2 border-background/40 text-center">
          3 Shots
        </div>
        <div className="flex gap-2">
          <div className="bg-background/60 py-2 px-8 rounded-custom-l">
            <MinusIco />
          </div>
          <div className="bg-background/60  py-2 px-8 rounded-custom-r">
            <PlusIcon />
          </div>
        </div>
      </footer>
    </div>
  )
}
