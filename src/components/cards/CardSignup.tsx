export function CardSignup() {
  return (
    <div className=" h-60 flex flex-col justify-between gap-3 bg-background text-accent shadow-lg rounded-lg p-4">
      <div className="flex items-center justify-between">
        <span className="font-medium text-sm">Create account</span>
        <span className="text-xs opacity-60">3 steps</span>
      </div>
      <div>
        <label htmlFor="signup-email" className="text-xs opacity-70">
          Email
        </label>
        <input
          id="signup-email"
          type="email"
          placeholder="you@example.com"
          className="w-full mt-1 rounded-lg border border-accent/25 bg-transparent px-3 py-1.5 text-sm outline-none focus:border-accent transition-colors"
        />
      </div>
      <div>
        <label htmlFor="signup-pass" className="text-xs opacity-70">
          Password
        </label>
        <input
          id="signup-pass"
          type="password"
          placeholder="••••••••"
          className="w-full mt-1 rounded-lg border border-accent/25 bg-transparent px-3 py-1.5 text-sm outline-none focus:border-accent transition-colors"
        />
      </div>
      <div className="bg-accent text-background rounded-lg py-2 text-center text-sm font-medium">
        Sign up
      </div>
    </div>
  )
}
