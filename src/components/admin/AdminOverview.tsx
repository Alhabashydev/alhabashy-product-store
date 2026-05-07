import { useStore } from '../../context/StoreContext';
import { formatCurrency } from '../../lib/formatCurrency';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { AdminStatsCard } from './AdminStatsCard';
import { OrderStatusBadge } from './OrderStatusBadge';

export function AdminOverview() {
  const { products, orders } = useStore();
  const revenue = orders.reduce((sum, order) => sum + order.total, 0);
  const best = products.slice().sort((a, b) => b.salesCount - a.salesCount)[0];
  return <div><SectionHeader title="Store overview" description="A clean snapshot of products, orders, revenue, and recent activity." />
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><AdminStatsCard label="Total products" value={products.length} /><AdminStatsCard label="Total purchases" value={orders.length} /><AdminStatsCard label="Pending orders" value={orders.filter((o)=>o.orderStatus==='Pending').length} /><AdminStatsCard label="Demo revenue" value={formatCurrency(revenue)} /></div>
    <div className="mt-6 grid gap-6 lg:grid-cols-2"><Card><h3 className="font-semibold text-white">Best selling product</h3><p className="mt-4 text-2xl font-semibold text-white">{best?.name ?? 'No product'}</p><p className="mt-2 text-sm text-neutral-400">{best?.salesCount ?? 0} sales · {best?.category}</p></Card><Card><h3 className="mb-4 font-semibold text-white">Recent activity</h3><div className="grid gap-3">{orders.slice(0, 5).map((order) => <div key={order.id} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 p-3"><div><p className="font-medium text-white">{order.id}</p><p className="text-sm text-neutral-400">{order.customerName}</p></div><OrderStatusBadge status={order.orderStatus} /></div>)}</div></Card></div>
  </div>;
}
