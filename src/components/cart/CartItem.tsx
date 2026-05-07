import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import type { CartLine } from '../../types/cart';
import { formatCurrency } from '../../lib/formatCurrency';
import { useCart } from '../../hooks/useCart';
import { QuantitySelector } from '../products/QuantitySelector';

export function CartItem({ line }: { line: CartLine }) {
  const { updateQuantity, removeFromCart } = useCart();
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex gap-4">
        <div className="h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.05]" />
        <div><Link to={`/products/${line.product.slug}`} className="font-semibold text-white hover:underline">{line.product.name}</Link><p className="mt-1 text-sm text-neutral-400">{line.product.category}</p><p className="mt-1 text-sm text-white">{formatCurrency(line.product.price)}</p></div>
      </div>
      <div className="flex items-center justify-between gap-4"><QuantitySelector value={line.quantity} onChange={(value) => updateQuantity(line.productId, value)} /><p className="font-semibold text-white">{formatCurrency(line.lineTotal)}</p><button onClick={() => removeFromCart(line.productId)} className="rounded-full p-2 text-neutral-400 hover:bg-red-500/10 hover:text-red-100" aria-label="Remove item"><Trash2 className="h-4 w-4" /></button></div>
    </div>
  );
}
