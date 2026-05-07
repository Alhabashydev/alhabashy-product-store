import type { OrderStatus } from '../../types/order';
import { Badge } from '../ui/Badge';

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const tone = status === 'Completed' || status === 'Delivered' || status === 'Paid' ? 'success' : status === 'Cancelled' || status === 'Failed' || status === 'Refunded' ? 'danger' : status === 'Processing' ? 'info' : 'warning';
  return <Badge tone={tone}>{status}</Badge>;
}
