import { Card } from './Card';

export function StatCard({ label, value, note }: { label: string; value: string | number; note?: string }) {
  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
      {note ? <p className="mt-2 text-xs text-neutral-500">{note}</p> : null}
    </Card>
  );
}
