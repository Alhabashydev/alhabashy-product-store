import { Select } from '../ui/Select';

export type SortOption = 'Featured' | 'Newest' | 'Price low to high' | 'Price high to low' | 'Best rated' | 'Most popular';

export function ProductSort({ value, onChange }: { value: SortOption; onChange: (value: SortOption) => void }) {
  const options: SortOption[] = ['Featured', 'Newest', 'Price low to high', 'Price high to low', 'Best rated', 'Most popular'];
  return <Select aria-label="Sort products" value={value} onChange={(event) => onChange(event.target.value as SortOption)}>{options.map((option) => <option key={option}>{option}</option>)}</Select>;
}
