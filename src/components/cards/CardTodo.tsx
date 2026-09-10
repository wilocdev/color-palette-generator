export function CardTodo() {
  return (
    <div className=" h-60 flex flex-col justify-between gap-3 bg-background text-accent shadow-lg rounded-lg px-2 py-4">
      <header className="px-2">
        <span className="font-medium text-xl">Today´s To Do</span>
        <span className="text-sm opacity-70 block">September 09</span>
      </header>
      <div className="flex justify-between text-sm bg-accent/10 rounded-lg p-1 h-20">
        <div className="flex w-full items-center justify-center rounded-lg bg-background">
          Scheduled
        </div>
        <div className="flex w-full items-center justify-center rounded-lg">
          Notes
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2">
        <div>
          <span className="font-medium">Wilson call</span>
          <span className="text-sm opacity-70 block">09:00 - 09:45</span>
        </div>
        <div>
          <span className="font-medium">Palette refactor</span>
          <span className="text-sm opacity-70 block">11:30 - 12:00</span>
        </div>
      </div>
    </div>
  )
}
