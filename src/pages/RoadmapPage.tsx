import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';

export function RoadmapPage() {
  const items = [
    { title: 'Backend API integration', status: 'Planned', text: 'Replace localStorage actions with protected API endpoints.' },
    { title: 'Real checkout provider', status: 'Planned', text: 'Connect Tebex, Stripe, PayPal, or manual Discord ticket verification.' },
    { title: 'Customer auth', status: 'Future', text: 'Add login, order ownership, license keys, and download access.' }
  ];
  return <div className="mx-auto max-w-5xl px-4 py-10"><SectionHeader title="Roadmap" description="Optional roadmap page for future backend and product-store improvements." /><div className="grid gap-4">{items.map((item)=><Card key={item.title}><Badge>{item.status}</Badge><h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2><p className="mt-2 text-neutral-400">{item.text}</p></Card>)}</div></div>;
}
