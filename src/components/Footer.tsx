import { GithubIcon } from './icons'

export function Footer() {
  return (
    <footer className="mt-16 flex items-center justify-center gap-2 border-t border-black/10 pt-4 text-sm text-accent">
      <span>Wilson Ochoa</span>
      <a
        href="https://github.com/wilocdev/color-palette-generator"
        target="_blank"
        rel="noreferrer"
        aria-label="View the color palette generator repository on GitHub"
        className="transition-opacity hover:opacity-60"
      >
        <GithubIcon />
      </a>
    </footer>
  )
}
