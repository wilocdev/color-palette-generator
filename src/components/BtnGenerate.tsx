import { ReloadIcon } from './icons'

interface Props {
  loading: boolean
  onClick: () => void
}
export function BtnGenerate({ loading, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="bg-neutral-800 text-white rounded-lg py-4 px-8 font-medium cursor-pointer transition-all hover:bg-neutral-700"
    >
      {loading ? (
        <div id="animationReload">
          <ReloadIcon />
        </div>
      ) : (
        'Generate'
      )}
    </button>
  )
}
