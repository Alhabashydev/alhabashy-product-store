import type { Coupon } from '../types/coupon';

export const coupons: Coupon[] = [
  { id: 'coupon-black10', code: 'BLACK10', type: 'Percentage', value: 10, minimumOrderAmount: 25, usageLimit: 100, usedCount: 12, expiryDate: '2027-01-01', status: 'Active', applicableProductIds: [], applicableCategories: [] },
  { id: 'coupon-bundle15', code: 'BUNDLE15', type: 'Percentage', value: 15, minimumOrderAmount: 80, usageLimit: 50, usedCount: 5, expiryDate: '2027-01-01', status: 'Active', applicableProductIds: [], applicableCategories: ['Bundles'] },
  { id: 'coupon-fixed5', code: 'SAVE5', type: 'Fixed amount', value: 5, minimumOrderAmount: 20, usageLimit: 200, usedCount: 30, expiryDate: '2027-01-01', status: 'Active', applicableProductIds: [], applicableCategories: [] }
];
