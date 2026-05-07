import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { faqs } from '../data/faqs';
import { testimonials } from '../data/testimonials';
import { useStore } from '../context/StoreContext';
import { ProductGrid } from '../components/products/ProductGrid';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';

export function HomePage() {
  const { products, changelog } = useStore();
  const featured = products.filter((product) => product.isFeatured && product.status === 'Active').slice(0, 3);
  const best = products.filter((product) => product.isPopular && product.status === 'Active').slice(0, 3);
  const bundle = products.find((product) => product.isBundle);
  const categories = Array.from(new Set(products.map((product) => product.category)));
  return <div>
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div><Badge>MT Black digital store</Badge><h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">Premium products store for FiveM, Discord, and web builders.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400">Sell scripts, UI systems, bots, templates, bundles, services, and downloadable products with a clean black style that feels practical, fast, and trustworthy.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/products"><Button>Browse Products <ArrowRight className="h-4 w-4" /></Button></Link><Link to="/products?category=Bundles"><Button variant="secondary">View Bundles</Button></Link><Link to="/support"><Button variant="ghost">Contact Support</Button></Link></div></div>
        <Card className="relative overflow-hidden"><div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" /><p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Store snapshot</p><div className="mt-6 grid gap-4"><div className="rounded-3xl border border-white/10 bg-black/30 p-5"><p className="text-3xl font-semibold text-white">{products.length}+</p><p className="text-sm text-neutral-400">Demo products and bundles</p></div><div className="grid grid-cols-2 gap-4"><div className="rounded-3xl border border-white/10 bg-black/30 p-5"><p className="text-2xl font-semibold text-white">4.9</p><p className="text-sm text-neutral-400">Average rating</p></div><div className="rounded-3xl border border-white/10 bg-black/30 p-5"><p className="text-2xl font-semibold text-white">Fast</p><p className="text-sm text-neutral-400">No heavy 3D or particles</p></div></div></div></Card>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-10"><SectionHeader eyebrow="Featured" title="Featured products" description="Highlighted products with strong docs, clear requirements, and clean UI direction." action={<Link to="/products"><Button variant="secondary">All products</Button></Link>} /><ProductGrid products={featured} /></section>

    <section className="mx-auto max-w-7xl px-4 py-10"><SectionHeader eyebrow="Categories" title="Browse by product type" description="Customers can quickly find scripts, UI systems, tools, templates, bundles, bots, and websites." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category) => <Link key={category} to={`/products?category=${encodeURIComponent(category)}`}><Card className="transition hover:border-white/25 hover:bg-white/[0.07]"><Sparkles className="h-5 w-5 text-neutral-500" /><h3 className="mt-4 font-semibold text-white">{category}</h3><p className="mt-2 text-sm text-neutral-500">{products.filter((p)=>p.category===category).length} products</p></Card></Link>)}</div></section>

    <section className="mx-auto max-w-7xl px-4 py-10"><SectionHeader eyebrow="Best sellers" title="Popular with store owners" description="Products made for practical server and store workflows." /><ProductGrid products={best} /></section>

    {bundle ? <section className="mx-auto max-w-7xl px-4 py-10"><Card className="grid gap-6 md:grid-cols-[1fr_320px] md:items-center"><div><Badge tone="warning">Bundle highlight</Badge><h2 className="mt-4 text-3xl font-semibold text-white">{bundle.name}</h2><p className="mt-3 text-neutral-400">{bundle.longDescription}</p><div className="mt-5 flex flex-wrap gap-2">{bundle.features.map((feature)=><span key={feature} className="rounded-full border border-white/10 px-3 py-1 text-sm text-neutral-300">{feature}</span>)}</div></div><Link to={`/products/${bundle.slug}`}><Button className="w-full">View bundle</Button></Link></Card></section> : null}

    <section className="mx-auto max-w-7xl px-4 py-10"><SectionHeader eyebrow="Why choose us" title="Built for buyers who need clarity before checkout" /><div className="grid gap-4 md:grid-cols-3">{[{icon:ShieldCheck,title:'Requirements first',text:'Framework, inventory, target, dependencies, SQL, OneSync, setup time, and difficulty are visible before buying.'},{icon:Zap,title:'Fast frontend',text:'Minimal animations, no particles, no heavy 3D, and clean component structure.'},{icon:CheckCircle2,title:'Backend ready',text:'Mock data and localStorage actions are centralized so you can replace them with API calls later.'}].map((item)=> <Card key={item.title}><item.icon className="h-6 w-6 text-neutral-500" /><h3 className="mt-4 font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-400">{item.text}</p></Card>)}</div></section>

    <section className="mx-auto max-w-7xl px-4 py-10"><SectionHeader title="Reviews" description="Professional demo content that fits a real product store." /><div className="grid gap-4 md:grid-cols-3">{testimonials.map((item)=><Card key={item.name}><p className="text-sm leading-6 text-neutral-300">“{item.quote}”</p><p className="mt-4 font-semibold text-white">{item.name}</p><p className="text-sm text-neutral-500">{item.role}</p></Card>)}</div></section>

    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-2"><div><SectionHeader title="FAQ preview" /><div className="grid gap-3">{faqs.slice(0,3).map((faq)=><Card key={faq.question}><h3 className="font-semibold text-white">{faq.question}</h3><p className="mt-2 text-sm text-neutral-400">{faq.answer}</p></Card>)}</div></div><div><SectionHeader title="Latest changelog" /><div className="grid gap-3">{changelog.slice(0,3).map((item)=><Card key={item.id}><p className="text-xs text-neutral-500">{item.date} · v{item.version}</p><h3 className="mt-2 font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm text-neutral-400">{item.description}</p></Card>)}</div></div></section>
  </div>;
}
