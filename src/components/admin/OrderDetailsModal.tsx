import { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useToast } from '../../hooks/useToast';
import { formatCurrency } from '../../lib/formatCurrency';
import type { Order, OrderStatus } from '../../types/order';
import { Button } from '../ui/Button';
import { Input, Label, Textarea } from '../ui/Input';
import { Modal } from '../ui/Modal';
import { Select } from '../ui/Select';
import { OrderStatusBadge } from './OrderStatusBadge';

const statuses: OrderStatus[] = ['Pending', 'Paid', 'Processing', 'Delivered', 'Completed', 'Cancelled', 'Refunded', 'Failed'];

export function OrderDetailsModal({ order, onClose }: { order?: Order; onClose: () => void }) {
  const { updateOrderStatus, updateOrder } = useStore();
  const { showToast } = useToast();
  const [note, setNote] = useState('');
  if (!order) return null;
  return <Modal open={Boolean(order)} title={`Order ${order.id}`} onClose={onClose}><div className="grid gap-5"><div className="flex flex-wrap gap-2"><OrderStatusBadge status={order.orderStatus} /><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">{order.paymentMethod}</span><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">{order.paymentStatus}</span></div><div className="grid gap-4 md:grid-cols-2"><div className="rounded-3xl border border-white/10 p-4"><h3 className="font-semibold text-white">Customer</h3><p className="mt-2 text-sm text-neutral-400">{order.customerName}</p><p className="text-sm text-neutral-400">{order.customerEmail}</p><p className="text-sm text-neutral-400">{order.discordUsername}</p></div><div className="rounded-3xl border border-white/10 p-4"><h3 className="font-semibold text-white">Totals</h3><p className="mt-2 text-sm text-neutral-400">Subtotal: {formatCurrency(order.subtotal)}</p><p className="text-sm text-neutral-400">Discount: {formatCurrency(order.discount)}</p><p className="text-lg font-semibold text-white">Total: {formatCurrency(order.total)}</p></div></div><div><h3 className="mb-3 font-semibold text-white">Products</h3><div className="grid gap-2">{order.products.map((item)=><div key={item.productId} className="flex justify-between rounded-2xl border border-white/10 p-3 text-sm text-neutral-300"><span>{item.quantity}× {item.name}</span><span>{formatCurrency(item.price)}</span></div>)}</div></div><div><Label>Change order status</Label><Select value={order.orderStatus} onChange={(e)=>{ updateOrderStatus(order.id, e.target.value as OrderStatus); showToast({ type:'success', title:'Order status updated' }); }}><option>Pending</option><option>Paid</option><option>Processing</option><option>Delivered</option><option>Completed</option><option>Cancelled</option><option>Refunded</option><option>Failed</option></Select></div><div><Label>Internal note</Label><Textarea value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Add internal note..." /><Button className="mt-3" variant="secondary" onClick={()=>{ updateOrder({ ...order, internalNotes: [...(order.internalNotes ?? []), note] }); setNote(''); showToast({ type:'success', title:'Internal note added' }); }}>Add note</Button></div><div><h3 className="mb-3 font-semibold text-white">Timeline</h3><div className="grid gap-2">{order.timeline.map((item, index)=><div key={`${item.label}-${index}`} className="rounded-2xl border border-white/10 p-3 text-sm"><p className="text-white">{item.label}</p><p className="text-neutral-500">{item.date} · {item.note}</p></div>)}</div></div><div className="flex flex-wrap gap-2"><Button onClick={()=>updateOrderStatus(order.id, 'Paid', 'Paid')}>Mark paid</Button><Button variant="secondary" onClick={()=>updateOrderStatus(order.id, 'Delivered', 'Paid')}>Mark delivered</Button><Button variant="danger" onClick={()=>updateOrderStatus(order.id, 'Refunded', 'Refunded')}>Refund mock</Button></div></div></Modal>;
}
