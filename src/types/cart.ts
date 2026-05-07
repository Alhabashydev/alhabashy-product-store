import type { Coupon } from './coupon';
import type { Product } from './product';

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartLine extends CartItem {
  product: Product;
  lineTotal: number;
}

export interface CouponResult {
  valid: boolean;
  message: string;
  coupon?: Coupon;
}
