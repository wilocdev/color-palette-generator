import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import { CopyIcon, ReloadIcon } from './icons'
import {
  EXPORT_FORMATS,
  exportCss,
  exportJson,
  exportTailwind,
  type ExportFormat
} from '../utils/exportPalette'

interface Props {
  palette: string[]
  onClose: () => void
}

function codeFor(format: ExportFormat, palette: string[]): string {
  switch (format) {
    case 'css':
      return exportCss(palette)
    case 'tailwind':
      return exportTailwind(palette)
    case 'json':
      return exportJson(palette)
    case 'png':
      return ''
  }
}

export function ExportModal({ palette, onClose }: Props) {
  const [format, setFormat] = useState<ExportFormat>('css')
  const [copied, setCopied] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const pngRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleCopy = async () => {
    if (format === 'png') return
    await navigator.clipboard.writeText(codeFor(format, palette))
    setCopied(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = async () => {
    if (!pngRef.current || downloading) return
    setDownloading(true)
    try {
      const dataUrl = await toPng(pngRef.current)
      const link = document.createElement('a')
      link.download = `palette-${palette.join('-').replace(/#/g, '')}.png`
      link.href = dataUrl
      link.click()
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-neutral-800">Export Palette</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="cursor-pointer text-neutral-400 hover:text-neutral-800 transition-colors text-xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="flex gap-1 mb-4">
          {EXPORT_FORMATS.map(f => (
            <button
              key={f}
              onClick={() => setFormat(f)}
              className={`px-3 py-1.5 text-sm rounded-lg font-medium capitalize transition-colors ${
                format === f
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-500 hover:bg-neutral-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {format === 'png' ? (
          <div>
            <div
              ref={pngRef}
              className="flex w-full rounded-xl overflow-hidden mb-4"
            >
              {palette.map((hex, i) => (
                <div
                  key={hex + i}
                  className="flex-1 flex flex-col items-center justify-center gap-2 py-10"
                  style={{ backgroundColor: hex }}
                >
                  <span
                    className="text-xs tabular-nums"
                    style={{ color: '#ffffff' }}
                  >
                    {hex}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full bg-neutral-800 text-white rounded-lg py-2.5 font-medium cursor-pointer transition-all hover:bg-neutral-700 disabled:opacity-50"
            >
              {downloading ? (
                <span className="animate-spin inline-flex">
                  <ReloadIcon />
                </span>
              ) : (
                'Download PNG'
              )}
            </button>
          </div>
        ) : (
          <div className="relative">
            <pre className="bg-neutral-100 rounded-xl p-4 overflow-x-auto text-sm text-neutral-800">
              {codeFor(format, palette)}
            </pre>
            <button
              onClick={handleCopy}
              aria-label="Copy code"
              className={`absolute top-3 right-3 cursor-pointer rounded-lg p-2 transition-colors ${
                copied
                  ? 'text-green-600'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              {copied ? (
                <span className="text-[10px] font-bold uppercase tracking-wide">
                  Copied
                </span>
              ) : (
                <CopyIcon />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
