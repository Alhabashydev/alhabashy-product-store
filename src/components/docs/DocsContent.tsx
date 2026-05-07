import type { DocsArticle } from '../../types/docs';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { CodeBlock } from './CodeBlock';

function List({ items }: { items: string[] }) {
  return <ol className="grid gap-2">{items.map((item, index) => <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm leading-6 text-neutral-300"><span className="mr-2 text-neutral-500">{index + 1}.</span>{item}</li>)}</ol>;
}

export function DocsContent({ doc }: { doc: DocsArticle }) {
  return (
    <article className="space-y-6">
      <Card>
        <div className="flex flex-wrap gap-2"><Badge>{doc.category}</Badge><Badge>{doc.difficulty}</Badge><Badge>v{doc.version}</Badge></div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white">{doc.title}</h1>
        <p className="mt-3 text-sm leading-6 text-neutral-400">{doc.overview}</p>
        <div className="mt-5 grid gap-3 text-sm text-neutral-300 md:grid-cols-3"><p>Updated: {doc.lastUpdated}</p><p>Setup: {doc.setupTime}</p><p>Dependencies: {doc.dependencies.join(', ') || 'None'}</p></div>
      </Card>
      <Card><h2 className="mb-4 text-xl font-semibold text-white">Installation guide</h2><List items={doc.installation} /></Card>
      <Card><h2 className="mb-4 text-xl font-semibold text-white">Configuration guide</h2><List items={doc.configuration} /><div className="mt-5"><CodeBlock code={doc.configExample} /></div></Card>
      <Card><h2 className="mb-4 text-xl font-semibold text-white">Common errors</h2><List items={doc.commonErrors} /></Card>
      <Card><h2 className="mb-4 text-xl font-semibold text-white">Troubleshooting</h2><List items={doc.troubleshooting} /></Card>
      <Card><h2 className="mb-4 text-xl font-semibold text-white">Update guide</h2><List items={doc.updateGuide} /></Card>
      <Card><h2 className="mb-4 text-xl font-semibold text-white">FAQ</h2><div className="grid gap-3">{doc.faq.map((item) => <div key={item.question} className="rounded-2xl border border-white/10 p-4"><p className="font-medium text-white">{item.question}</p><p className="mt-2 text-sm text-neutral-400">{item.answer}</p></div>)}</div></Card>
    </article>
  );
}
