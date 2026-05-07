import { Badge } from '../ui/Badge';

export function CompatibilityBadge({ status }: { status: 'Compatible' | 'Partially compatible' | 'Not compatible' }) {
  const tone = status === 'Compatible' ? 'success' : status === 'Partially compatible' ? 'warning' : 'danger';
  return <Badge tone={tone}>{status}</Badge>;
}
