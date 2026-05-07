import { Link } from 'react-router-dom';
import type { DocsArticle } from '../../types/docs';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export function DocsArticleCard({ doc }: { doc: DocsArticle }) {
  return <Link to={`/docs/${doc.slug}`}><Card className="h-full transition hover:border-white/25 hover:bg-white/[0.06]"><Badge>{doc.category}</Badge><h3 className="mt-4 text-lg font-semibold text-white">{doc.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-400">{doc.overview}</p><div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500"><span>v{doc.version}</span><span>{doc.difficulty}</span><span>{doc.setupTime}</span></div></Card></Link>;
}
