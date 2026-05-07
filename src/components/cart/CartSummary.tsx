import { Link } from 'react-router-dom';
import { formatCurrency } from '../../lib/formatCurrency';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { CouponInput } from '../coupons/CouponInput';

export function CartSummary() {
  const { getSubtotal, getDiscount, getTotal, lines } = useCart();
  return (
    <Card className="sticky top-24 h-fit">
      <h2 className="text-xl font-semibold text-white">Order summary</h2>
      <div className="my-5"><CouponInput /></div>
      <div className="grid gap-3 text-sm">
        <div className="flex justify-between text-neutral-400"><span>Subtotal</span><span>{formatCurrency(getSubtotal())}</span></div>
        <div className="flex justify-between text-neutral-400"><span>Discount</span><span>-{formatCurrency(getDiscount())}</span></div>
        <div className="border-t border-white/10 pt-3 flex justify-between text-lg font-semibold text-white"><span>Total</span><span>{formatCurrency(getTotal())}</span></div>
      </div>
      <Link to="/checkout" className="mt-6 block"><Button className="w-full" disabled={lines.length === 0}>Checkout</Button></Link>
      <Link to="/products" className="mt-3 block"><Button variant="secondary" className="w-full">Continue shopping</Button></Link>
    </Card>
  );
}
