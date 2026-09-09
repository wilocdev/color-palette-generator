import { ReloadIcon } from './icons'

interface Props {
  loading: boolean
  onClick: () => void
}
export function BtnGenerate({ loading, onClick }: Props) {
  return (
    <button
      aria-label="Generate Palette"
      onClick={onClick}
      disabled={loading}
      className="bg-neutral-800 text-white rounded-lg py-4 px-8 font-medium cursor-pointer transition-all hover:bg-neutral-700"
    >
      {loading ? (
        <span className="animate-spin inline-flex">
          <ReloadIcon />
        </span>
      ) : (
        'Generate'
      )}
    </button>
  )
}
