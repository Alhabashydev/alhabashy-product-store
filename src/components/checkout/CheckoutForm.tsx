import { useState } from 'react';
import { generateOrderId } from '../../lib/generateOrderId';
import { useCart } from '../../hooks/useCart';
import { useStore } from '../../context/StoreContext';
import { useToast } from '../../hooks/useToast';
import type { Order, PaymentMethod } from '../../types/order';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input, Label, Textarea } from '../ui/Input';
import { CheckoutSuccessModal } from './CheckoutSuccessModal';
import { PaymentMethodCard } from './PaymentMethodCard';

const methods: PaymentMethod[] = ['Card', 'PayPal', 'Crypto', 'Tebex', 'Manual Discord Ticket'];

export function CheckoutForm() {
  const { lines, getSubtotal, getDiscount, getTotal, couponCode, clearCart } = useCart();
  const { orders, createOrder } = useStore();
  const { showToast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('Manual Discord Ticket');
  const [successOrder, setSuccessOrder] = useState<Order | undefined>();
  const [form, setForm] = useState({ name: '', email: '', discord: '', notes: '', terms: false });

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (lines.length === 0) return showToast({ type: 'error', title: 'Cart is empty' });
    if (!form.terms) return showToast({ type: 'warning', title: 'Accept terms first' });
    const now = new Date().toISOString().slice(0, 10);
    const order: Order = {
      id: generateOrderId(orders.length), customerName: form.name, customerEmail: form.email, discordUsername: form.discord,
      products: lines.map((line) => ({ productId: line.product.id, name: line.product.name, slug: line.product.slug, quantity: line.quantity, price: line.product.price })),
      subtotal: getSubtotal(), discount: getDiscount(), couponCode: couponCode ?? undefined, total: getTotal(), paymentMethod, paymentStatus: 'Pending', orderStatus: 'Pending', notes: form.notes,
      timeline: [{ label: 'Order created', date: now, note: 'Frontend demo order created.' }], createdAt: now, updatedAt: now
    };
    createOrder(order);
    setSuccessOrder(order);
    clearCart();
    showToast({ type: 'success', title: 'Order created', message: order.id });
  }

  return (
    <form onSubmit={submit} className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <Card>
        <h2 className="mb-5 text-xl font-semibold text-white">Customer information</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>Name</Label><Input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></div>
          <div><Label>Email</Label><Input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></div>
          <div className="sm:col-span-2"><Label>Discord username</Label><Input required value={form.discord} onChange={(event) => setForm({ ...form, discord: event.target.value })} placeholder="alhabashy" /></div>
          <div className="sm:col-span-2"><Label>Notes</Label><Textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} placeholder="Framework, server details, or setup notes..." /></div>
        </div>
        <h2 className="mb-5 mt-8 text-xl font-semibold text-white">Payment method</h2>
        <div className="grid gap-3 sm:grid-cols-2">{methods.map((method) => <PaymentMethodCard key={method} method={method} selected={paymentMethod === method} onSelect={() => setPaymentMethod(method)} />)}</div>
        <label className="mt-6 flex items-start gap-3 text-sm text-neutral-300"><input type="checkbox" className="mt-1" checked={form.terms} onChange={(event) => setForm({ ...form, terms: event.target.checked })} /> I understand this checkout is frontend/demo only and does not process real payments.</label>
      </Card>
      <Card>
        <h2 className="text-xl font-semibold text-white">Checkout summary</h2>
        <div className="mt-5 grid gap-3">{lines.map((line) => <div key={line.productId} className="flex justify-between text-sm text-neutral-300"><span>{line.quantity}× {line.product.name}</span><span>${line.lineTotal}</span></div>)}</div>
        <div className="mt-5 border-t border-white/10 pt-5 text-sm"><div className="flex justify-between text-neutral-400"><span>Subtotal</span><span>${getSubtotal()}</span></div><div className="mt-2 flex justify-between text-neutral-400"><span>Discount</span><span>-${getDiscount()}</span></div><div className="mt-3 flex justify-between text-xl font-semibold text-white"><span>Total</span><span>${getTotal()}</span></div></div>
        <Button className="mt-6 w-full" type="submit">Place demo order</Button>
        <p className="mt-3 text-xs leading-5 text-neutral-500">No real payment API is connected. Replace this step with backend payment verification later.</p>
      </Card>
      <CheckoutSuccessModal order={successOrder} open={Boolean(successOrder)} onClose={() => setSuccessOrder(undefined)} />
    </form>
  );
}
