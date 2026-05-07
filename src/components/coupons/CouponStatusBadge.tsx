import type { CouponStatus } from '../../types/coupon';
import { Badge } from '../ui/Badge';

export function CouponStatusBadge({ status }: { status: CouponStatus }) {
  return <Badge tone={status === 'Active' ? 'success' : status === 'Expired' ? 'danger' : 'warning'}>{status}</Badge>;
}
