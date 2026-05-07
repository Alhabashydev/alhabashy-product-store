import { ArrowRight, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';
import { formatCurrency } from '../../lib/formatCurrency';
import { useCart } from '../../hooks/useCart';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <Card className="group flex h-full flex-col overflow-hidden p-0">
      <Link to={`/products/${product.slug}`} className="block border-b border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-5">
        <div className="flex h-36 items-end justify-between rounded-3xl border border-white/10 bg-black/30 p-4">
          <div>
            <Badge tone={product.badge === 'Sale' ? 'success' : product.badge === 'Bundle' ? 'warning' : 'default'}>{product.badge}</Badge>
            <p className="mt-4 text-xs text-neutral-500">{product.images[0]}</p>
          </div>
          <ArrowRight className="h-5 w-5 text-neutral-500 transition group-hover:translate-x-1 group-hover:text-white" />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to={`/products/${product.slug}`} className="text-lg font-semibold text-white hover:underline">{product.name}</Link>
            <p className="mt-1 text-xs text-neutral-500">{product.category} · {product.type}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-neutral-300"><Star className="h-4 w-4 fill-white" />{product.rating}</div>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-400">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{product.tags.slice(0, 3).map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-400">{[...product.frameworks, ...product.inventories].slice(0, 4).map((item) => <span key={item} className="rounded-full bg-white/[0.04] px-2 py-1">{item}</span>)}</div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <div><span className="text-xl font-semibold text-white">{formatCurrency(product.price)}</span>{product.oldPrice ? <span className="ml-2 text-sm text-neutral-500 line-through">{formatCurrency(product.oldPrice)}</span> : null}<p className="text-xs text-neutral-500">{product.reviewCount} reviews</p></div>
          <Button onClick={() => addToCart(product.id)} aria-label={`Add ${product.name} to cart`}><ShoppingCart className="h-4 w-4" />Add</Button>
        </div>
      </div>
    </Card>
  );
}
