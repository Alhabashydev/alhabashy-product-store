import { Link } from 'react-router-dom';
import { Download, KeyRound } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { formatCurrency } from '../lib/formatCurrency';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { SectionHeader } from '../components/ui/SectionHeader';
import { OrderStatusBadge } from '../components/admin/OrderStatusBadge';

export function AccountPage() {
  const { orders } = useStore();
  return <div className="mx-auto max-w-7xl px-4 py-10"><SectionHeader title="Account / Orders" description="Frontend-only order history saved in localStorage. Ready for future login and backend integration." />{orders.length === 0 ? <EmptyState title="No orders yet" message="Create a demo checkout order and it will appear here." action={<Link to="/products"><Button>Browse products</Button></Link>} /> : <div className="grid gap-4">{orders.map((order)=><Card key={order.id}><div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"><div><div className="flex flex-wrap gap-2"><OrderStatusBadge status={order.orderStatus} /><Badge>{order.paymentMethod}</Badge></div><h2 className="mt-4 text-xl font-semibold text-white">{order.id}</h2><p className="mt-1 text-sm text-neutral-400">{order.createdAt} · {order.customerEmail}</p></div><p className="text-2xl font-semibold text-white">{formatCurrency(order.total)}</p></div><div className="mt-5 grid gap-3">{order.products.map((item)=><div key={item.productId} className="flex flex-col gap-3 rounded-2xl border border-white/10 p-4 md:flex-row md:items-center md:justify-between"><div><p className="font-medium text-white">{item.quantity}× {item.name}</p><p className="mt-1 flex items-center gap-2 text-sm text-neutral-500"><KeyRound className="h-4 w-4" /> License: ALH-DEMO-{order.id.slice(-3)}-{item.productId.slice(-3).toUpperCase()}</p></div><div className="flex flex-wrap gap-2"><Button variant="secondary"><Download className="h-4 w-4" /> Download</Button><Link to={`/docs/${item.slug}`}><Button variant="secondary">Docs</Button></Link><Link to={`/products/${item.slug}/changelog`}><Button variant="secondary">Changelog</Button></Link><Link to="/support"><Button variant="ghost">Support</Button></Link></div></div>)}</div></Card>)}</div>}</div>;
}
