import { useMemo, useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { formatCurrency } from '../../lib/formatCurrency';
import type { Order } from '../../types/order';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { OrderDetailsModal } from './OrderDetailsModal';
import { OrderStatusBadge } from './OrderStatusBadge';

export function AdminOrdersTable() {
  const { orders, updateOrderStatus } = useStore();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [selected, setSelected] = useState<Order | undefined>();
  const visible = useMemo(() => orders.filter((order) => status === 'All' || order.orderStatus === status).filter((order) => `${order.id} ${order.customerName} ${order.customerEmail} ${order.discordUsername} ${order.products.map(p=>p.name).join(' ')}`.toLowerCase().includes(search.toLowerCase())), [orders, search, status]);
  return <Card><div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><h2 className="text-xl font-semibold text-white">Purchases / orders</h2><div className="grid gap-2 md:grid-cols-[260px_180px]"><Input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search orders..." /><Select value={status} onChange={(e)=>setStatus(e.target.value)}><option>All</option><option>Pending</option><option>Paid</option><option>Processing</option><option>Delivered</option><option>Completed</option><option>Cancelled</option><option>Refunded</option><option>Failed</option></Select></div></div><div className="overflow-x-auto"><table className="w-full min-w-[1000px] text-left text-sm"><thead className="text-neutral-500"><tr><th className="py-2">Order</th><th>Customer</th><th>Products</th><th>Total</th><th>Payment</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead><tbody>{visible.map((order)=><tr key={order.id} className="border-t border-white/10 text-neutral-300"><td className="py-3 text-white">{order.id}</td><td>{order.customerName}<p className="text-xs text-neutral-500">{order.customerEmail}</p></td><td>{order.products.map(p=>p.name).join(', ')}</td><td>{formatCurrency(order.total)}</td><td>{order.paymentMethod}<p className="text-xs text-neutral-500">{order.paymentStatus}</p></td><td><OrderStatusBadge status={order.orderStatus} /></td><td>{order.createdAt}</td><td><div className="flex gap-2"><Button variant="secondary" onClick={()=>setSelected(order)}>View</Button><Button onClick={()=>updateOrderStatus(order.id, 'Delivered', 'Paid')}>Deliver</Button><Button variant="danger" onClick={()=>updateOrderStatus(order.id, 'Refunded', 'Refunded')}>Refund</Button></div></td></tr>)}</tbody></table></div><OrderDetailsModal order={selected} onClose={()=>setSelected(undefined)} /></Card>;
}
