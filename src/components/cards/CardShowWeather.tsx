import { SunIcon } from '../icons'

export function CardShowWeather() {
  return (
    <div className="justify-center flex-col flex p-4 col-span-1 rounded-lg shadow-lg h-60 bg-linear-to-tr from-primary to-secondary text-background ">
      <div className="flex items-center text-lg gap-2">
        <SunIcon /> Clear Sky
      </div>
      <p className="text-7xl sm:text-8xl">24°</p>
      <p className="text-xl sm:text-3xl">Tokyo, Japan</p>
    </div>
  )
}
