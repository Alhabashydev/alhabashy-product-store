import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import type { AnalyticsPoint } from '../../types/analytics';
import { Card } from '../ui/Card';

export function OrdersChart({ data }: { data: AnalyticsPoint[] }) {
  return <Card><h3 className="mb-4 font-semibold text-white">Orders over time</h3><div className="h-64"><ResponsiveContainer width="100%" height="100%"><BarChart data={data}><XAxis dataKey="label" stroke="rgba(255,255,255,.45)" /><YAxis stroke="rgba(255,255,255,.45)" /><Tooltip contentStyle={{ background: '#050505', border: '1px solid rgba(255,255,255,.15)', borderRadius: 16 }} /><Bar dataKey="orders" fill="rgba(255,255,255,.75)" radius={[8,8,0,0]} /></BarChart></ResponsiveContainer></div></Card>;
}
