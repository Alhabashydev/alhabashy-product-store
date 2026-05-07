import { CheckCircle2 } from 'lucide-react';

export function DependencyList({ items }: { items: string[] }) {
  if (items.length === 0) return <p className="text-sm text-neutral-400">No required dependencies listed.</p>;
  return <div className="grid gap-2">{items.map((item) => <div key={item} className="flex items-center gap-2 text-sm text-neutral-300"><CheckCircle2 className="h-4 w-4 text-neutral-500" />{item}</div>)}</div>;
}
