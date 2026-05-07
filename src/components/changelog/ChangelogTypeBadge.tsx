import type { ChangelogType } from '../../types/changelog';
import { Badge } from '../ui/Badge';

export function ChangelogTypeBadge({ type }: { type: ChangelogType }) {
  const tone = type === 'Added' ? 'success' : type === 'Removed' ? 'danger' : type === 'Security' ? 'warning' : type === 'Changed' ? 'info' : 'default';
  return <Badge tone={tone}>{type}</Badge>;
}
