import { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useToast } from '../hooks/useToast';
import type { CartItem, CartLine, CouponResult } from '../types/cart';
import type { Coupon } from '../types/coupon';
import { useStore } from './StoreContext';

interface CartContextValue {
  items: CartItem[];
  couponCode: string | null;
  lines: CartLine[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTotalItems: () => number;
  applyCoupon: (code: string) => CouponResult;
  removeCoupon: () => void;
  getDiscount: () => number;
  getTotal: () => number;
  appliedCoupon?: Coupon;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { products, coupons } = useStore();
  const { showToast } = useToast();
  const [items, setItems] = useLocalStorage<CartItem[]>('alhabashy_cart', []);
  const [couponCode, setCouponCode] = useLocalStorage<string | null>('alhabashy_cart_coupon', null);

  const lines = useMemo<CartLine[]>(() => items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return product ? { ...item, product, lineTotal: product.price * item.quantity } : null;
    })
    .filter(Boolean) as CartLine[], [items, products]);

  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  const appliedCoupon = couponCode ? coupons.find((coupon) => coupon.code.toLowerCase() === couponCode.toLowerCase()) : undefined;

  function validateCoupon(code: string): CouponResult {
    const coupon = coupons.find((item) => item.code.toLowerCase() === code.trim().toLowerCase());
    if (!coupon) return { valid: false, message: 'Invalid coupon code.' };
    if (coupon.status !== 'Active') return { valid: false, message: 'This coupon is not active.' };
    if (new Date(coupon.expiryDate) < new Date()) return { valid: false, message: 'This coupon has expired.' };
    if (coupon.usedCount >= coupon.usageLimit) return { valid: false, message: 'Coupon usage limit reached.' };
    if (subtotal < coupon.minimumOrderAmount) return { valid: false, message: `Minimum order is $${coupon.minimumOrderAmount}.` };
    if (coupon.applicableCategories.length > 0) {
      const hasCategory = lines.some((line) => coupon.applicableCategories.includes(line.product.category));
      if (!hasCategory) return { valid: false, message: 'Coupon does not apply to these product categories.' };
    }
    if (coupon.applicableProductIds.length > 0) {
      const hasProduct = lines.some((line) => coupon.applicableProductIds.includes(line.product.id));
      if (!hasProduct) return { valid: false, message: 'Coupon does not apply to these products.' };
    }
    return { valid: true, message: 'Coupon applied.', coupon };
  }

  const getDiscountValue = (coupon?: Coupon) => {
    if (!coupon) return 0;
    const value = coupon.type === 'Percentage' ? subtotal * (coupon.value / 100) : coupon.value;
    return Math.min(value, subtotal);
  };

  const value = useMemo<CartContextValue>(() => ({
    items,
    couponCode,
    lines,
    appliedCoupon,
    addToCart: (productId, quantity = 1) => {
      setItems((current) => {
        const existing = current.find((item) => item.productId === productId);
        if (existing) return current.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item);
        return [...current, { productId, quantity }];
      });
      showToast({ type: 'success', title: 'Added to cart', message: 'Product was added to your cart.' });
    },
    removeFromCart: (productId) => {
      setItems((current) => current.filter((item) => item.productId !== productId));
      showToast({ type: 'info', title: 'Removed from cart' });
    },
    updateQuantity: (productId, quantity) => {
      if (quantity <= 0) {
        setItems((current) => current.filter((item) => item.productId !== productId));
        return;
      }
      setItems((current) => current.map((item) => item.productId === productId ? { ...item, quantity } : item));
    },
    clearCart: () => {
      setItems([]);
      setCouponCode(null);
      showToast({ type: 'warning', title: 'Cart cleared' });
    },
    getSubtotal: () => subtotal,
    getTotalItems: () => items.reduce((sum, item) => sum + item.quantity, 0),
    applyCoupon: (code) => {
      const result = validateCoupon(code);
      if (result.valid) {
        setCouponCode(result.coupon?.code ?? code);
        showToast({ type: 'success', title: 'Coupon applied', message: result.message });
      } else {
        showToast({ type: 'error', title: 'Coupon failed', message: result.message });
      }
      return result;
    },
    removeCoupon: () => {
      setCouponCode(null);
      showToast({ type: 'info', title: 'Coupon removed' });
    },
    getDiscount: () => getDiscountValue(appliedCoupon),
    getTotal: () => Math.max(0, subtotal - getDiscountValue(appliedCoupon))
  }), [items, couponCode, lines, appliedCoupon, setItems, setCouponCode, showToast, subtotal]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCartContext must be used inside CartProvider');
  return context;
}
