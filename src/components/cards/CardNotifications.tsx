import { useState } from 'react'

export function CardNotifications() {
  const [dismissed, setDismissed] = useState<boolean[]>([false, false, false])

  const initialItems = [
    { text: 'Palette exported to PNG', time: '2m', dot: 'bg-primary' },
    { text: 'New palette generated', time: '1h', dot: 'bg-accent' },
    { text: 'Contrast AA reached', time: '3h', dot: 'bg-secondary' }
  ]

  const items = initialItems.filter((_, i) => !dismissed[i])

  return (
    <div className="col-span-1 h-60 flex flex-col justify-between bg-background text-accent shadow-lg rounded-lg p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Notifications</span>
        <span className="text-[10px] rounded-full bg-accent text-background px-1.5 py-0.5 font-bold">
          {items.length}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <div
            key={item.text}
            className="group flex items-center gap-2 transition-opacity"
          >
            <span className={`h-2 w-2 rounded-full shrink-0 ${item.dot}`} />
            <div className="flex-1 min-w-0">
              <p className="text-xs truncate">{item.text}</p>
              <p className="text-[10px] opacity-50">{item.time} ago</p>
            </div>
            <button
              onClick={() =>
                setDismissed(d => d.map((v, di) => (di === i ? true : v)))
              }
              aria-label={`Dismiss ${item.text}`}
              className="cursor-pointer text-accent opacity-0 group-hover:opacity-60 hover:opacity-100 transition-opacity text-sm leading-none"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-center opacity-50 font-medium uppercase tracking-wide cursor-pointer">
        View all
      </p>
    </div>
  )
}
