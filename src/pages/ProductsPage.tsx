import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { ProductFilters, type ProductFilterState } from '../components/products/ProductFilters';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductSearch } from '../components/products/ProductSearch';
import { ProductSort, type SortOption } from '../components/products/ProductSort';
import { SectionHeader } from '../components/ui/SectionHeader';

export function ProductsPage() {
  const { products } = useStore();
  const [params] = useSearchParams();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortOption>('Featured');
  const [filters, setFilters] = useState<ProductFilterState>({ category: params.get('category') ?? 'All', type: 'All', status: 'All', maxPrice: 150 });
  const filtered = useMemo(() => {
    const searched = products.filter((product) => `${product.name} ${product.description} ${product.tags.join(' ')} ${product.frameworks.join(' ')}`.toLowerCase().includes(query.toLowerCase()));
    const narrowed = searched.filter((product) => (filters.category === 'All' || product.category === filters.category) && (filters.type === 'All' || product.type === filters.type) && (filters.status === 'All' || product.status === filters.status) && product.price <= filters.maxPrice);
    return narrowed.sort((a,b) => {
      if (sort === 'Newest') return Number(new Date(b.lastUpdated)) - Number(new Date(a.lastUpdated));
      if (sort === 'Price low to high') return a.price - b.price;
      if (sort === 'Price high to low') return b.price - a.price;
      if (sort === 'Best rated') return b.rating - a.rating;
      if (sort === 'Most popular') return b.salesCount - a.salesCount;
      return Number(b.isFeatured) - Number(a.isFeatured);
    });
  }, [products, query, filters, sort]);
  return <div className="mx-auto max-w-7xl px-4 py-10"><SectionHeader title="Products" description="Browse premium digital products, FiveM systems, Discord bots, templates, tools, services, and bundles." /><div className="grid gap-6 lg:grid-cols-[280px_1fr]"><ProductFilters filters={filters} onChange={setFilters} onClear={()=>setFilters({ category:'All', type:'All', status:'All', maxPrice:150 })} /><div><div className="mb-5 grid gap-3 md:grid-cols-[1fr_220px]"><ProductSearch value={query} onChange={setQuery} /><ProductSort value={sort} onChange={setSort} /></div><p className="mb-4 text-sm text-neutral-500">Showing {filtered.length} of {products.length} products</p><ProductGrid products={filtered} /></div></div></div>;
}
