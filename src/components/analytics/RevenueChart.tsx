import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import type { AnalyticsPoint } from '../../types/analytics';
import { Card } from '../ui/Card';

export function RevenueChart({ data }: { data: AnalyticsPoint[] }) {
  return <Card><h3 className="mb-4 font-semibold text-white">Revenue over time</h3><div className="h-64"><ResponsiveContainer width="100%" height="100%"><LineChart data={data}><XAxis dataKey="label" stroke="rgba(255,255,255,.45)" /><YAxis stroke="rgba(255,255,255,.45)" /><Tooltip contentStyle={{ background: '#050505', border: '1px solid rgba(255,255,255,.15)', borderRadius: 16 }} /><Line type="monotone" dataKey="revenue" stroke="rgba(255,255,255,.9)" strokeWidth={2} dot={false} /></LineChart></ResponsiveContainer></div></Card>;
}
