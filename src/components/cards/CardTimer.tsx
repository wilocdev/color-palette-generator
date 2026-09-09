import { PauseIcon } from '../icons'

export function CardTimer() {
  return (
    <div className="col-span-2 flex gap-6 sm:gap-16 justify-between items-center p-4 h-60 rounded-lg shadow-lg text-background bg-accent">
      <div className="flex flex-col justify-center ml-6 font-medium">
        <p className="opacity-70">Timer</p>
        <p className="text-5xl">16:15</p>
        <div className="mt-4 bg-primary py-2 px-10 rounded-xl">Stop</div>
      </div>
      <aside className="h-full w-full rounded-xl bg-secondary flex items-center justify-center gap-6">
        <div className="bg-accent rounded-full p-4">
          <PauseIcon />
        </div>
      </aside>
    </div>
  )
}
