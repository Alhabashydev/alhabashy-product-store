import { Search } from 'lucide-react';
import { Input } from '../ui/Input';

export function DocsSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div className="relative"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" /><Input value={value} onChange={(event) => onChange(event.target.value)} className="pl-11" placeholder="Search documentation..." /></div>;
}
