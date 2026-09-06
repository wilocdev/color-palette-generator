import { CircleCheckIcon } from './icons'

export function CardProcessCompleted() {
  return (
    <div className="shadow-lg flex-col items-center justify-center col-span-1 font-medium h-60 bg-primary text-background rounded-lg p-4 flex ">
      <CircleCheckIcon />
      Process Completed
    </div>
  )
}
