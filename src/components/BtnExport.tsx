interface Props {
  onClick: () => void
}

export function BtnExport({ onClick }: Props) {
  return (
    <button
      aria-label="Export Palette"
      onClick={onClick}
      className="border border-neutral-800 text-neutral-800 rounded-lg py-4 px-8 font-medium cursor-pointer transition-all hover:bg-neutral-800 hover:text-white"
    >
      Export
    </button>
  )
}
