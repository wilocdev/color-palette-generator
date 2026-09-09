import { BtnGenerate } from '../components/BtnGenerate'
import { BtnExport } from './BtnExport'
import { ColorSwatch } from '../components/ColorSwatch'
import { ContrastChecker } from './ContrastChecker'
import { TemperatureSlider } from './TemperatureSlider'

interface Props {
  palette: string[] | null
  loading: boolean
  error: string | null
  generate: () => void
  lockedColors: (string | null)[]
  temperature: number
  onToggleLock: (index: number) => void
  onTemperatureChange: (value: number) => void
  onExport?: () => void
}
export function Hero({
  palette,
  loading,
  error,
  generate,
  lockedColors,
  temperature,
  onToggleLock,
  onTemperatureChange,
  onExport
}: Props) {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-5xl font-bold text-center mt-18">
        Color Palette Generator
      </h1>
      <div className="flex flex-col gap-4 items-center mt-8">
        <div>
          {error ? (
            <p className="font-bold text-xl text-red-500">{error}</p>
          ) : !palette ? (
            <p className="font-bold text-xl">Generate Palette...</p>
          ) : (
            <div className="flex md:grid md:grid-cols-2 xl:flex xl:flex-row flex-col items-center justify-center gap-4">
              <ColorSwatch
                loading={loading}
                hex={palette[0]}
                bg="bg-background"
                accent="text-accent"
                locked={lockedColors[0] !== null}
                onToggleLock={() => onToggleLock(0)}
              />
              <ColorSwatch
                loading={loading}
                hex={palette[1]}
                bg="bg-accent"
                accent="text-background"
                locked={lockedColors[1] !== null}
                onToggleLock={() => onToggleLock(1)}
              />
              <ColorSwatch
                loading={loading}
                hex={palette[2]}
                bg="bg-primary"
                accent="text-accent"
                locked={lockedColors[2] !== null}
                onToggleLock={() => onToggleLock(2)}
              />
              <ColorSwatch
                loading={loading}
                hex={palette[3]}
                bg="bg-secondary"
                accent="text-accent"
                locked={lockedColors[3] !== null}
                onToggleLock={() => onToggleLock(3)}
              />
            </div>
          )}
        </div>
        {palette && <ContrastChecker palette={palette} />}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <BtnGenerate onClick={generate} loading={loading} />
            {onExport && <BtnExport onClick={onExport} />}
          </div>
          <TemperatureSlider
            value={temperature}
            onChange={onTemperatureChange}
          />
        </div>
      </div>
    </div>
  )
}
