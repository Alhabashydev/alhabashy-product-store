import { BookOpen, LifeBuoy, RefreshCcw, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import { useStore } from '../context/StoreContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input, Label, Textarea } from '../components/ui/Input';
import { SectionHeader } from '../components/ui/SectionHeader';

export function SupportPage() {
  const { settings } = useStore();
  const cards = [
    { icon: LifeBuoy, title: 'Discord support', text: 'Open a support ticket with your order ID, product, framework, and error screenshot.' },
    { icon: BookOpen, title: 'Documentation', text: 'Read setup guides, dependencies, config examples, common errors, and update notes.' },
    { icon: ShieldCheck, title: 'License policy', text: 'Demo products use single-server/project license placeholders ready for backend enforcement.' },
    { icon: RefreshCcw, title: 'Update policy', text: 'Product pages show version, last update, changelog, and included support notes.' }
  ];
  return <div className="mx-auto max-w-7xl px-4 py-10"><SectionHeader title="Support & FAQ" description="Clear support information, policies, and a mock contact flow for future backend integration." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{cards.map((card)=><Card key={card.title}><card.icon className="h-6 w-6 text-neutral-500" /><h3 className="mt-4 font-semibold text-white">{card.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-400">{card.text}</p></Card>)}</div><div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]"><Card><h2 className="mb-4 text-xl font-semibold text-white">FAQ</h2><div className="grid gap-3">{faqs.map((faq)=><div key={faq.question} className="rounded-2xl border border-white/10 p-4"><p className="font-medium text-white">{faq.question}</p><p className="mt-2 text-sm text-neutral-400">{faq.answer}</p></div>)}</div></Card><Card><h2 className="text-xl font-semibold text-white">Contact form mock</h2><p className="mt-2 text-sm text-neutral-400">This does not send yet. Replace submit with backend ticket creation later.</p><div className="mt-5 grid gap-4"><div><Label>Name</Label><Input /></div><div><Label>Email</Label><Input type="email" /></div><div><Label>Order ID optional</Label><Input placeholder="ORD-000124" /></div><div><Label>Message</Label><Textarea /></div><Button type="button">Create mock ticket</Button><a href={settings.supportDiscordLink} target="_blank" rel="noreferrer"><Button variant="secondary" className="w-full">Open Discord support</Button></a><Link to="/docs"><Button variant="ghost" className="w-full">View documentation</Button></Link></div></Card></div><div className="mt-8 grid gap-4 md:grid-cols-3"><Card><h3 className="font-semibold text-white">Refund policy</h3><p className="mt-2 text-sm text-neutral-400">Digital product refunds are handled manually in this demo. Real stores should connect this to verified order status and delivery logs.</p></Card><Card><h3 className="font-semibold text-white">License policy</h3><p className="mt-2 text-sm text-neutral-400">License keys shown in account page are placeholders. Backend validation should generate and verify keys later.</p></Card><Card><h3 className="font-semibold text-white">Support ticket mock</h3><p className="mt-2 text-sm text-neutral-400">Add Discord ticket integration or backend ticket storage when moving beyond frontend demo.</p></Card></div></div>;
}
