export function RollingMarquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink-950 py-4">
      <div className="flex w-max animate-marquee items-center gap-10 motion-reduce:animate-none">
        <MarqueeGroup items={items} />
        <MarqueeGroup items={items} ariaHidden />
      </div>
    </div>
  );
}

function MarqueeGroup({ items, ariaHidden }: { items: string[]; ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-10" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-white/80 sm:text-base"
        >
          <span className="size-1.5 shrink-0 rounded-full bg-brand-400" />
          {item}
        </span>
      ))}
    </div>
  );
}
