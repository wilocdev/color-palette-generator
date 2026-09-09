import {
  contrastRatio,
  relativeLuminance,
  wcagColor,
  wcagRating
} from '../utils/colorUtils'

interface Props {
  palette: string[]
}

const ROLES = ['Background', 'Accent', 'Primary', 'Secondary']

export function ContrastChecker({ palette }: Props) {
  const pairs = palette.flatMap((color1, i) =>
    palette.slice(i + 1).map((color2, j) => {
      const ratio = contrastRatio(color1, color2)
      return {
        color1,
        color2,
        role1: ROLES[i],
        role2: ROLES[i + j + 1],
        ratio,
        rating: wcagRating(ratio)
      }
    })
  )

  return (
    <div className="mx-auto max-w-292.5 mt-6">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {pairs.map(({ color1, color2, role1, role2, ratio, rating }) => (
          <div key={`${color1}-${color2}`} className="flex items-center gap-2">
            <div className="flex items-center shadow-sm rounded-2xl overflow-hidden ">
              <span
                className="px-3 py-1 text-xs rounded-l-2xl "
                style={{
                  backgroundColor: color1,
                  color: color2
                }}
              >
                {role1}
              </span>
              <span
                className="px-3 py-1 text-xs rounded-r-2xl"
                style={{
                  backgroundColor: color2,
                  color: color1
                }}
              >
                {role2}
              </span>
            </div>
            <span
              className={`text-xs font-bold px-2 py-1 rounded-lg ${wcagColor(
                rating,
                relativeLuminance(color1) < 0.3
              )}`}
            >
              {rating}
            </span>
            <span className="text-xs text-neutral-500 tabular-nums w-10">
              {ratio.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-neutral-400 mt-2">
        Contrast ratios (WCAG): AAA &ge; 7:1 · AA &ge; 4.5:1 · AA Large &ge; 3:1
      </p>
    </div>
  )
}
