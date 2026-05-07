import { Link, useParams } from 'react-router-dom';
import { docs } from '../data/docs';
import { DocsContent } from '../components/docs/DocsContent';
import { DocsLayout } from '../components/docs/DocsLayout';
import { EmptyState } from '../components/ui/EmptyState';
import { Button } from '../components/ui/Button';

export function DocsArticlePage() {
  const { slug } = useParams();
  const doc = docs.find((item) => item.slug === slug);
  return <DocsLayout>{doc ? <DocsContent doc={doc} /> : <EmptyState title="Doc not found" message="No documentation exists for this slug." action={<Link to="/docs"><Button>Back to docs</Button></Link>} />}</DocsLayout>;
}
