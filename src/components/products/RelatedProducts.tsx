import type { Product } from '../../types/product';
import { ProductGrid } from './ProductGrid';
import { SectionHeader } from '../ui/SectionHeader';

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  return <section className="mt-16"><SectionHeader title="Related products" description="Products with similar category, compatibility, or use case." /><ProductGrid products={products.slice(0, 3)} /></section>;
}
