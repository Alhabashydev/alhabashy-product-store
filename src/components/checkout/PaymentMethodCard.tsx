import type { PaymentMethod } from '../../types/order';
import { cn } from '../../lib/cn';

export function PaymentMethodCard({ method, selected, onSelect }: { method: PaymentMethod; selected: boolean; onSelect: () => void }) {
  return <button type="button" onClick={onSelect} className={cn('rounded-3xl border p-4 text-left text-sm transition', selected ? 'border-white bg-white text-black' : 'border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]')}><span className="font-semibold">{method}</span><span className="mt-1 block text-xs opacity-70">Frontend placeholder only</span></button>;
}
