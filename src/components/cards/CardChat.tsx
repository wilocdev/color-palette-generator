export function CardChat() {
  return (
    <div className="col-span-2 h-60 flex flex-col gap-2 bg-background text-accent shadow-lg rounded-lg p-4">
      <p className="text-xs font-medium uppercase tracking-wide opacity-70">
        Team chat
      </p>
      <div className="flex flex-1 flex-col justify-center gap-2">
        <div className="self-start max-w-70 rounded-2xl rounded-bl-sm bg-accent/10 border border-accent/15 px-3 py-2 text-xs">
          Love this new palette for the dashboard!
        </div>
        <div className="self-end max-w-70 rounded-2xl rounded-br-sm bg-primary text-background px-3 py-2 text-xs">
          Agreed, the contrast checker helped a lot
        </div>
        <div className="self-start max-w-70 rounded-2xl rounded-bl-sm bg-accent/10 border border-accent/15 px-3 py-2 text-xs">
          Can we lock the background color and regenerate?
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input
          placeholder="Type a message..."
          className="flex-1 rounded-xl border border-accent/25 bg-transparent px-3 py-1.5 text-xs outline-none focus:border-accent transition-colors"
        />
        <div className="bg-accent text-background rounded-xl px-3 py-1.5 text-xs font-medium cursor-pointer">
          Send
        </div>
      </div>
    </div>
  )
}
