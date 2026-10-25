const goals = ["Strength", "Better sleep", "Blood sugar"]

const today = [
  { time: "07:30", task: "Brisk walk, 20 minutes", kind: "Workout" },
  { time: "09:00", task: "Morning medicines", kind: "Reminder" },
  { time: "13:00", task: "Snap your lunch", kind: "Log" },
  { time: "18:30", task: "Why sleep moves blood sugar · 3 min", kind: "Learn" },
  { time: "22:30", task: "Screens off, lights low", kind: "Reminder" },
]

// Illustrative Make My Health screen: Neo's morning plan, taken from the app's own example.
export function NeoDayPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface-raised shadow-raised">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-ink-4/40" />
          <span className="size-2.5 rounded-full bg-ink-4/40" />
          <span className="size-2.5 rounded-full bg-ink-4/40" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-4">
          Today &middot; Neo&rsquo;s plan &middot; Example
        </span>
        <span aria-hidden className="w-10" />
      </div>

      <div className="flex flex-col gap-6 p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-4">Neo</p>
          <p className="font-editorial text-2xl leading-snug text-ink-1 sm:text-[1.75rem]">
            &ldquo;Good morning. You slept 5&nbsp;h&nbsp;40&nbsp;m, your third short night this week.
            I&rsquo;ve moved strength training to tomorrow and kept today light.&rdquo;
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-4">Goals</p>
          <ul className="flex flex-wrap gap-1.5">
            {goals.map((goal) => (
              <li
                key={goal}
                className="rounded-full border border-line bg-surface-overlay px-2.5 py-1 text-xs text-ink-2"
              >
                {goal}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-4">Today</p>
          <ol className="flex flex-col">
            {today.map((item) => (
              <li
                key={item.time}
                className="flex items-baseline gap-3 border-t border-line py-2.5 text-sm text-ink-2 first:border-t-0 first:pt-0"
              >
                <span className="font-mono text-xs text-ink-4">{item.time}</span>
                <span className="flex-1">{item.task}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-4">{item.kind}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
