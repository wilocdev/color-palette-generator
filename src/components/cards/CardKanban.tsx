export function CardKanban() {
  const columns = [
    { title: 'To do', dots: 2, items: ['Brainstorm', 'Wireframes'] },
    { title: 'Doing', dots: 1, items: ['Palette refactor'] },
    { title: 'Done', dots: 3, items: ['Export modal', 'Temp slider', 'Lock'] }
  ]

  return (
    <div className="col-span-2 h-60 flex gap-3 bg-background text-accent shadow-lg rounded-lg p-4">
      {columns.map(col => (
        <div
          key={col.title}
          className="flex-1 flex flex-col rounded-lg bg-accent/10 p-2"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium uppercase tracking-wide">
              {col.title}
            </span>
            <span className="text-[10px] rounded-full bg-accent/15 px-1.5">
              {col.dots}
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            {col.items.map(item => (
              <div
                key={item}
                className="rounded-md bg-background shadow-sm border border-accent/10 px-2 py-1 text-[11px]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
