import { categories, productTypes } from '../../data/categories';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input, Label } from '../ui/Input';
import { Select } from '../ui/Select';

export interface ProductFilterState {
  category: string;
  type: string;
  status: string;
  maxPrice: number;
}

export function ProductFilters({ filters, onChange, onClear }: { filters: ProductFilterState; onChange: (filters: ProductFilterState) => void; onClear: () => void }) {
  return (
    <Card className="sticky top-24 h-fit">
      <div className="mb-5 flex items-center justify-between gap-4"><h2 className="font-semibold text-white">Filters</h2><Button variant="ghost" onClick={onClear}>Clear</Button></div>
      <div className="grid gap-4">
        <div><Label>Category</Label><Select value={filters.category} onChange={(event) => onChange({ ...filters, category: event.target.value })}><option>All</option>{categories.map((item) => <option key={item}>{item}</option>)}</Select></div>
        <div><Label>Product type</Label><Select value={filters.type} onChange={(event) => onChange({ ...filters, type: event.target.value })}><option>All</option>{productTypes.map((item) => <option key={item}>{item}</option>)}</Select></div>
        <div><Label>Status</Label><Select value={filters.status} onChange={(event) => onChange({ ...filters, status: event.target.value })}><option>All</option><option>Active</option><option>Coming Soon</option><option>Draft</option></Select></div>
        <div><Label>Max price: ${filters.maxPrice}</Label><Input type="range" min="0" max="150" value={filters.maxPrice} onChange={(event) => onChange({ ...filters, maxPrice: Number(event.target.value) })} /></div>
      </div>
    </Card>
  );
}
