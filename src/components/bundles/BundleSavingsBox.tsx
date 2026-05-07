import type { Product } from '../../types/product';
import { formatCurrency } from '../../lib/formatCurrency';
import { Card } from '../ui/Card';

export function BundleSavingsBox({ bundle }: { bundle: Product }) {
  const oldPrice = bundle.oldPrice ?? bundle.price;
  const savings = Math.max(0, oldPrice - bundle.price);
  return <Card><p className="text-sm text-neutral-400">Original total</p><p className="mt-1 text-xl text-neutral-500 line-through">{formatCurrency(oldPrice)}</p><p className="mt-4 text-sm text-neutral-400">Bundle price</p><p className="mt-1 text-3xl font-semibold text-white">{formatCurrency(bundle.price)}</p><p className="mt-4 rounded-2xl border border-green-400/20 bg-green-400/10 p-3 text-sm text-green-100">You save {formatCurrency(savings || bundle.bundleSavings || 0)}</p></Card>;
}
