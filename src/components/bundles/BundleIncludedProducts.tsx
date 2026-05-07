import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';
import { Card } from '../ui/Card';

export function BundleIncludedProducts({ products }: { products: Product[] }) {
  return <Card><h3 className="mb-4 text-xl font-semibold text-white">Included products</h3><div className="grid gap-3">{products.map((product) => <Link key={product.id} to={`/products/${product.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 hover:bg-white/[0.07]"><p className="font-medium text-white">{product.name}</p><p className="mt-1 text-sm text-neutral-400">{product.description}</p></Link>)}</div></Card>;
}
