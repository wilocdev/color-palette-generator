import { PlusIcon } from './icons'

export function CardProfile() {
  return (
    <div className="shadow-lg not-only:col-span-1 font-medium h-60 bg-accent rounded-lg p-4 flex justify-between flex-col">
      <img
        className="rounded-xl h-34 object-cover w-full"
        src="https://i.pinimg.com/736x/f8/87/e1/f887e16f47faf505b219391376619a3e.jpg"
        alt="alan walker icon"
      />
      <div className="flex text-[12px] sm:text-lg flex-col gap-2 text-background">
        <p>@alanwalkermusic</p>
        <button className="py-1 px-2 rounded-xl bg-primary  flex gap-2 xl:text-lg text-[12px] items-center">
          <PlusIcon /> Add member
        </button>
      </div>
    </div>
  )
}
