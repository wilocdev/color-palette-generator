import { CodePenIcon, ReactIcon } from '../icons'

export function CardShowIcons() {
  return (
    <div className="shadow-lg col-span-1 font-medium h-60 bg-accent rounded-lg p-4 flex justify-between flex-col">
      <h2 className="text-background text-center text-2xl">Icons</h2>
      <div className="relative flex items-center justify-center text-secondary gap-4">
        <CodePenIcon />
        <ReactIcon />
      </div>
      <div className="bg-primary text-background rounded-sm py-2 hover:bg-primary/70 transition-colors text-center">
        Copy Icons
      </div>
    </div>
  )
}
