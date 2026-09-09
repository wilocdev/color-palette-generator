import { useEffect, useRef, useState } from 'react'
import { CircleCheckIcon, CopyIcon, LockIcon, UnlockIcon } from './icons'

interface Props {
  hex: string
  bg: string
  accent: string
  loading: boolean
  locked: boolean
  onToggleLock: () => void
}

export function ColorSwatch({
  hex,
  bg,
  accent,
  loading,
  locked,
  onToggleLock
}: Props) {
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
      className={`animate-scale-in shadow-lg p-4 w-72 rounded-2xl flex items-center justify-between ${bg} ${accent}`}
    >
      <div className="flex items-center gap-2.5">
        <button
          onClick={onToggleLock}
          aria-label={locked ? 'Unlock color' : 'Lock color'}
          disabled={loading}
          className={`cursor-pointer rounded-full transition-opacity ${
            loading
              ? 'cursor-not-allowed opacity-30'
              : 'opacity-50 hover:opacity-100'
          } ${locked ? 'opacity-100' : ''}`}
        >
          {locked ? <LockIcon size={18} /> : <UnlockIcon size={18} />}
        </button>
        <p className="font-bold text-lg">{hex}</p>
      </div>
      <button
        onClick={handleCopy}
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
        disabled={copied || loading}
        className={`cursor-pointer rounded-full p-2 transition-colors ${
          copied
            ? 'text-green-600'
            : loading
              ? 'cursor-not-allowed opacity-50'
              : bg === 'bg-background'
                ? 'hover:bg-accent hover:text-background'
                : 'hover:text-accent hover:bg-background'
        }`}
      >
        {copied ? <CircleCheckIcon size={20} /> : <CopyIcon />}
      </button>
    </div>
  )
}
