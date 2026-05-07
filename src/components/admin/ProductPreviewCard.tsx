import type { Product } from '../../types/product';
import { ProductCard } from '../products/ProductCard';

export function ProductPreviewCard({ product }: { product: Product }) {
  return <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Live card preview</p><ProductCard product={product} /></div>;
}
