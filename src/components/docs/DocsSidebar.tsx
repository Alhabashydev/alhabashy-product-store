import { Link } from 'react-router-dom';
import type { DocsArticle } from '../../types/docs';
import { Card } from '../ui/Card';

export function DocsSidebar({ docs }: { docs: DocsArticle[] }) {
  return <Card className="sticky top-24 h-fit"><h3 className="mb-4 font-semibold text-white">Documentation</h3><div className="grid gap-2">{docs.map((doc) => <Link key={doc.id} to={`/docs/${doc.slug}`} className="rounded-2xl px-3 py-2 text-sm text-neutral-400 hover:bg-white/10 hover:text-white">{doc.productName}</Link>)}</div><Link to="/support" className="mt-4 block rounded-2xl border border-white/10 px-3 py-2 text-sm text-neutral-300 hover:bg-white/10">Need support?</Link></Card>;
}
