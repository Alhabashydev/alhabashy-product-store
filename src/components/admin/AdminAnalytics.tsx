import { useStore } from '../../context/StoreContext';
import { formatCurrency } from '../../lib/formatCurrency';
import { AnalyticsStatCard } from '../analytics/AnalyticsStatCard';
import { CategorySalesChart } from '../analytics/CategorySalesChart';
import { OrdersChart } from '../analytics/OrdersChart';
import { RevenueChart } from '../analytics/RevenueChart';
import { TopProductsTable } from '../analytics/TopProductsTable';
import { SectionHeader } from '../ui/SectionHeader';

export function AdminAnalytics() {
  const { analytics, products } = useStore();
  return <div><SectionHeader title="Store analytics" description="Mock analytics for planning the real backend dashboard." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"><AnalyticsStatCard label="Revenue" value={formatCurrency(analytics.totalRevenue)} /><AnalyticsStatCard label="Orders" value={analytics.totalOrders} /><AnalyticsStatCard label="Customers" value={analytics.totalCustomers} /><AnalyticsStatCard label="Conversion" value={`${analytics.conversionRate}%`} /></div><div className="mt-6 grid gap-6 xl:grid-cols-2"><RevenueChart data={analytics.revenueOverTime} /><OrdersChart data={analytics.ordersOverTime} /><CategorySalesChart data={analytics.salesByCategory} /><TopProductsTable products={products} /></div></div>;
}
