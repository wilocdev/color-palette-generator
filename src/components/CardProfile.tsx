import { PlusIcon } from './icons'

export function CardProfile() {
  return (
    <div className="shadow-lg col-span-1 font-medium h-60 bg-accent rounded-lg p-4 flex justify-between flex-col">
      <img
        className="rounded-xl h-34 object-cover w-full"
        src="./alan-walker.webp"
        alt="alan walker icon"
        width="336"
        height="136"
        loading="lazy"
      />
      <div className="flex text-[12px] sm:text-lg flex-col gap-2 text-background">
        <p>@alanwalkermusic</p>
        <div className="py-1 px-2 rounded-xl bg-primary  flex gap-2 xl:text-lg text-[12px] items-center">
          <PlusIcon /> Add member
        </div>
      </div>
    </div>
  )
}
