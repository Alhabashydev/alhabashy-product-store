export type CouponType = 'Percentage' | 'Fixed amount';
export type CouponStatus = 'Active' | 'Disabled' | 'Expired';

export interface Coupon {
  id: string;
  code: string;
  type: CouponType;
  value: number;
  minimumOrderAmount: number;
  usageLimit: number;
  usedCount: number;
  expiryDate: string;
  status: CouponStatus;
  applicableProductIds: string[];
  applicableCategories: string[];
}
