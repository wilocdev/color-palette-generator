import { useEffect, useState } from 'react'
import { CopyIcon } from './icons/Copy'
import { ReloadIcon } from './icons/Reload'

interface Props {
  hex: string
  bg: string
  accent: string
  loading: boolean
}

export function ColorSwatch({ hex, bg, accent, loading }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (loading) return

    await navigator.clipboard.writeText(hex)

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    if (loading) {
      setCopied(false)
    }
  }, [loading])

  return (
    <div
      className={`shadow-lg p-4 w-70 rounded-2xl flex items-center justify-between ${bg} ${accent}`}
    >
      <p className="font-bold">{hex}</p>
      <button
        onClick={handleCopy}
        disabled={copied || loading}
        className={`cursor-pointer rounded-full p-2 transition-colors ${
          loading || copied
            ? 'cursor-not-allowed opacity-50'
            : bg === 'bg-background'
              ? 'hover:bg-accent hover:text-background'
              : 'hover:text-accent hover:bg-background'
        }`}
      >
        {copied ? (
          <div id="animationReload">
            <ReloadIcon />
          </div>
        ) : (
          <CopyIcon />
        )}
      </button>
    </div>
  )
}
