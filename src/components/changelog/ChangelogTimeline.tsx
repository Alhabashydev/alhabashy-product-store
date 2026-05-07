import type { ChangelogItem as ChangelogType } from '../../types/changelog';
import { EmptyState } from '../ui/EmptyState';
import { ChangelogItem } from './ChangelogItem';

export function ChangelogTimeline({ items }: { items: ChangelogType[] }) {
  if (items.length === 0) return <EmptyState title="No changelog entries" message="Try another search or filter." />;
  return <div className="grid gap-4">{items.map((item) => <ChangelogItem key={item.id} item={item} />)}</div>;
}
