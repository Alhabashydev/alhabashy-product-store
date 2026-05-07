import { Minus, Plus } from 'lucide-react';

export function QuantitySelector({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
      <button className="rounded-full p-2 hover:bg-white/10" onClick={() => onChange(Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
      <span className="w-10 text-center text-sm font-semibold">{value}</span>
      <button className="rounded-full p-2 hover:bg-white/10" onClick={() => onChange(value + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
    </div>
  );
}
