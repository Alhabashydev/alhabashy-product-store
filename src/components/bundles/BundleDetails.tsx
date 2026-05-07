import type { Product } from '../../types/product';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { BundleSavingsBox } from './BundleSavingsBox';

export function BundleDetails({ bundle }: { bundle: Product }) {
  const { addToCart } = useCart();
  return <div className="grid gap-6 lg:grid-cols-[1fr_340px]"><div><Badge tone="warning">Bundle</Badge><h1 className="mt-5 text-4xl font-semibold tracking-tight text-white">{bundle.name}</h1><p className="mt-4 max-w-3xl text-neutral-400">{bundle.longDescription}</p><div className="mt-6 flex flex-wrap gap-2">{bundle.features.map((feature) => <span key={feature} className="rounded-full border border-white/10 px-3 py-1 text-sm text-neutral-300">{feature}</span>)}</div><Button className="mt-8" onClick={() => addToCart(bundle.id)}>Add full bundle to cart</Button></div><BundleSavingsBox bundle={bundle} /></div>;
}
