export function CardButton() {
  return (
    <div className="col-span-1 h-60 flex flex-col items-center justify-between text-medium p-4 bg-white shadow-lg rounded-lg">
      <button className="rounded-lg shadow-lg w-full p-2 border-2 border-accent transition-all hover:bg-transparent hover:text-accent bg-accent text-background cursor-pointer">
        Primary
      </button>
      <button className="rounded-lg shadow-lg w-full p-2 border-2 border-primary transition-all hover:bg-transparent hover:text-primary bg-primary text-background cursor-pointer">
        Secondary
      </button>
      <button className="rounded-lg shadow-lg w-full p-2 border-2 border-secondary transition-all hover:bg-transparent hover:text-secondary bg-secondary text-background cursor-pointer">
        Tertiary
      </button>
      <button className="rounded-lg shadow-lg w-full p-2 transition-all hover:from-secondary hover:to-primary  bg-linear-to-r from-primary to-secondary text-background cursor-pointer">
        Quaternary
      </button>
    </div>
  )
}
