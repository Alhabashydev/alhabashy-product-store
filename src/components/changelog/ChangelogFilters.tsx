import type { ChangelogType } from '../../types/changelog';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

export function ChangelogFilters({ search, type, onSearch, onType }: { search: string; type: string; onSearch: (value: string) => void; onType: (value: string) => void }) {
  const types: Array<ChangelogType | 'All'> = ['All', 'Added', 'Changed', 'Fixed', 'Removed', 'Security'];
  return <div className="grid gap-3 md:grid-cols-[1fr_220px]"><Input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search changelogs..." /><Select value={type} onChange={(event) => onType(event.target.value)}>{types.map((item) => <option key={item}>{item}</option>)}</Select></div>;
}
