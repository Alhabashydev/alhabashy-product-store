import { Link, useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { ChangelogTimeline } from '../components/changelog/ChangelogTimeline';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/EmptyState';
import { SectionHeader } from '../components/ui/SectionHeader';

export function ProductChangelogPage() {
  const { slug } = useParams();
  const { products, changelog } = useStore();
  const product = products.find((item) => item.slug === slug);
  const items = changelog.filter((item) => item.productSlug === slug);
  if (!product) return <div className="mx-auto max-w-5xl px-4 py-10"><EmptyState title="Product not found" message="No product exists for this changelog route." /></div>;
  return <div className="mx-auto max-w-5xl px-4 py-10"><SectionHeader title={`${product.name} changelog`} description="Product-specific version notes and update history." action={<Link to={`/products/${product.slug}`}><Button variant="secondary">Back to product</Button></Link>} />{items.length ? <ChangelogTimeline items={items} /> : <EmptyState title="No product changelogs" message="This product currently has only inline product changelog notes." />}</div>;
}
