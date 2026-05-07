import { useMemo, useState } from 'react';
import { docs } from '../data/docs';
import { DocsArticleCard } from '../components/docs/DocsArticleCard';
import { DocsLayout } from '../components/docs/DocsLayout';
import { DocsSearch } from '../components/docs/DocsSearch';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

export function DocsPage() {
  const [query, setQuery] = useState('');
  const visible = useMemo(() => docs.filter((doc) => `${doc.title} ${doc.productName} ${doc.category}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <DocsLayout><SectionHeader title="Documentation" description="Product setup guides, config examples, common errors, troubleshooting, and update notes." /><DocsSearch value={query} onChange={setQuery} /><Card className="my-6"><h2 className="font-semibold text-white">Getting started</h2><p className="mt-2 text-sm leading-6 text-neutral-400">Open a product doc, check dependencies first, copy config examples, and read common errors before installation.</p></Card><div className="grid gap-4 md:grid-cols-2">{visible.map((doc)=><DocsArticleCard key={doc.id} doc={doc} />)}</div></DocsLayout>;
}
