import { Search } from 'lucide-react';
import { Input } from '../ui/Input';

export function ProductSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div className="relative"><Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" /><Input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search products, tags, frameworks..." className="pl-11" /></div>;
}
