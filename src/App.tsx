import { ReloadIcon } from './components/icons/Reload'
import { usePaletteGenerator } from './hooks/usePaletteGenerator'

function App() {
  const { palette, loading, generate, paletteStyles } = usePaletteGenerator()

  return (
    <div style={paletteStyles}>
      <h1 className="text-5xl font-bold text-center mt-6">
        Color Palette Generator
      </h1>
      <div className="flex flex-col gap-4 items-center mt-8">
        <div>
          {!palette ? (
            <p>Generate Palette</p>
          ) : (
            <div className="flex items-center justify-center gap-4">
              <button className="py-4 w-30 rounded-lg bg-background text-accent">
                {palette[0]}
              </button>
              <button className="py-4 w-30 rounded-lg bg-accent">
                {palette[1]}
              </button>
              <button className="py-4 w-30 rounded-lg bg-primary">
                {palette[2]}
              </button>
              <button className="py-4 w-30 rounded-lg bg-secondary">
                {palette[3]}
              </button>
            </div>
          )}
        </div>
        <button
          onClick={generate}
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
      </div>
    </div>
  )
}

export default App
