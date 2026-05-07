import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function CouponInput() {
  const { couponCode, applyCoupon, removeCoupon } = useCart();
  const [code, setCode] = useState(couponCode ?? '');
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-4">
      <label className="mb-2 block text-sm font-medium text-white">Coupon code</label>
      <div className="flex gap-2"><Input value={code} onChange={(event) => setCode(event.target.value.toUpperCase())} placeholder="BLACK10" />{couponCode ? <Button variant="secondary" onClick={removeCoupon}>Remove</Button> : <Button onClick={() => applyCoupon(code)}>Apply</Button>}</div>
      {couponCode ? <p className="mt-2 text-xs text-green-100">Applied coupon: {couponCode}</p> : <p className="mt-2 text-xs text-neutral-500">Try BLACK10, BUNDLE15, or SAVE5.</p>}
    </div>
  );
}
