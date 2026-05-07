import type { Product } from '../../types/product';
import { EmptyState } from '../ui/EmptyState';
import { ProductCard } from './ProductCard';

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) return <EmptyState title="No products found" message="Try clearing filters or searching for a different product." />;
  return <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}
