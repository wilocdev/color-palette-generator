import { BtnGenerate } from '../components/BtnGenerate'
import { ColorSwatch } from '../components/ColorSwatch'

interface Props {
  palette: string[] | null
  loading: boolean
  error: string | null
  generate: () => void
}
export function Hero({ palette, loading, error, generate }: Props) {
  return (
    <div>
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
              />
              <ColorSwatch
                loading={loading}
                hex={palette[1]}
                bg="bg-accent"
                accent="text-background"
              />
              <ColorSwatch
                loading={loading}
                hex={palette[2]}
                bg="bg-primary"
                accent="text-accent"
              />
              <ColorSwatch
                loading={loading}
                hex={palette[3]}
                bg="bg-secondary"
                accent="text-accent"
              />
            </div>
          )}
        </div>
        <BtnGenerate onClick={generate} loading={loading} />
      </div>
    </div>
  )
}
