interface Props {
  value: number
  onChange: (value: number) => void
}

export function TemperatureSlider({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-3 text-sm text-neutral-500">
      <span className="font-medium">Cold</span>
      <input
        type="range"
        min="0"
        max="2"
        step="0.1"
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        aria-label="Palette temperature"
        className="w-40 accent-neutral-800 cursor-pointer"
      />
      <span className="font-medium">Warm</span>
      <span className="font-bold tabular-nums w-8 text-neutral-800">
        {value.toFixed(1)}
      </span>
    </div>
  )
}
