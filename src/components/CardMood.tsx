import { UserIcon } from './icons'

export function CardMood() {
  return (
    <div className="shadow-lg justify-between flex-col col-span-1 font-medium h-60 bg-background text-accent rounded-lg p-4 flex ">
      <div className="flex items-center justify-between">
        <span className="text-sm">State of mood</span>
        <span>
          <UserIcon />
        </span>
      </div>
      <p className="text-3xl font-medium">How are you feeling now?</p>
      <button className="bg-primary/60 py-2 rounded-2xl">Log Mood</button>
    </div>
  )
}
