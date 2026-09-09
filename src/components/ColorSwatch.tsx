import { useEffect, useRef, useState } from 'react'
import { CopyIcon, ReloadIcon } from './icons'

interface Props {
  hex: string
  bg: string
  accent: string
  loading: boolean
}

export function ColorSwatch({ hex, bg, accent, loading }: Props) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleCopy = async () => {
    if (loading) return

    await navigator.clipboard.writeText(hex)

    setCopied(true)
    timerRef.current = setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    if (loading) {
      if (timerRef.current) clearTimeout(timerRef.current)
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
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
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
          <span className="animate-spin inline-flex">
            <ReloadIcon />
          </span>
        ) : (
          <CopyIcon />
        )}
      </button>
    </div>
  )
}
