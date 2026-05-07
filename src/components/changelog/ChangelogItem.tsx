import type { ChangelogItem as ChangelogType } from '../../types/changelog';
import { Card } from '../ui/Card';
import { ChangelogTypeBadge } from './ChangelogTypeBadge';

export function ChangelogItem({ item }: { item: ChangelogType }) {
  return <Card><div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"><div><div className="flex flex-wrap items-center gap-2"><ChangelogTypeBadge type={item.type} /><span className="text-xs text-neutral-500">v{item.version}</span><span className="text-xs text-neutral-500">{item.date}</span>{item.productName ? <span className="text-xs text-neutral-500">{item.productName}</span> : null}</div><h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-400">{item.description}</p></div></div><ul className="mt-5 grid gap-2">{item.changes.map((change) => <li key={change} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm text-neutral-300">{change}</li>)}</ul></Card>;
}
