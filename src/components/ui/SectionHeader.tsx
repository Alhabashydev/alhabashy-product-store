export function SectionHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">{eyebrow}</p> : null}
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
        {description ? <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
