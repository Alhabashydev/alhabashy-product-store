import { createContext, useContext, useMemo } from 'react';
import { analytics as defaultAnalytics } from '../data/analytics';
import { announcement as defaultAnnouncement } from '../data/announcements';
import { changelog as defaultChangelog } from '../data/changelog';
import { coupons as defaultCoupons } from '../data/coupons';
import { orders as defaultOrders } from '../data/orders';
import { products as defaultProducts } from '../data/products';
import { siteConfig } from '../data/siteConfig';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Announcement } from '../types/announcement';
import type { StoreSettings } from '../types/admin';
import type { ChangelogItem } from '../types/changelog';
import type { Coupon } from '../types/coupon';
import type { Order, OrderStatus, PaymentStatus } from '../types/order';
import type { Product } from '../types/product';

interface StoreContextValue {
  products: Product[];
  coupons: Coupon[];
  orders: Order[];
  changelog: ChangelogItem[];
  announcement: Announcement;
  settings: StoreSettings;
  analytics: typeof defaultAnalytics;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  duplicateProduct: (id: string) => void;
  addBundle: (bundle: Product) => void;
  updateBundle: (bundle: Product) => void;
  deleteBundle: (id: string) => void;
  addCoupon: (coupon: Coupon) => void;
  updateCoupon: (coupon: Coupon) => void;
  deleteCoupon: (id: string) => void;
  createOrder: (order: Order) => void;
  updateOrderStatus: (id: string, orderStatus: OrderStatus, paymentStatus?: PaymentStatus) => void;
  updateOrder: (order: Order) => void;
  addChangelog: (item: ChangelogItem) => void;
  updateChangelog: (item: ChangelogItem) => void;
  deleteChangelog: (id: string) => void;
  updateAnnouncement: (announcement: Announcement) => void;
  updateSettings: (settings: StoreSettings) => void;
}

const StoreContext = createContext<StoreContextValue | null>(null);

function today() {
  return new Date().toISOString().slice(0, 10);
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useLocalStorage<Product[]>('alhabashy_products', defaultProducts);
  const [coupons, setCoupons] = useLocalStorage<Coupon[]>('alhabashy_coupons', defaultCoupons);
  const [orders, setOrders] = useLocalStorage<Order[]>('alhabashy_orders', defaultOrders);
  const [changelog, setChangelog] = useLocalStorage<ChangelogItem[]>('alhabashy_changelog', defaultChangelog);
  const [announcement, setAnnouncement] = useLocalStorage<Announcement>('alhabashy_announcement', defaultAnnouncement);
  const [settings, setSettings] = useLocalStorage<StoreSettings>('alhabashy_settings', siteConfig);

  const value = useMemo<StoreContextValue>(() => ({
    products,
    coupons,
    orders,
    changelog,
    announcement,
    settings,
    analytics: defaultAnalytics,
    addProduct: (product) => setProducts((current) => [product, ...current]),
    updateProduct: (product) => setProducts((current) => current.map((item) => item.id === product.id ? product : item)),
    deleteProduct: (id) => setProducts((current) => current.filter((item) => item.id !== id)),
    duplicateProduct: (id) => setProducts((current) => {
      const product = current.find((item) => item.id === id);
      if (!product) return current;
      const copy: Product = {
        ...product,
        id: crypto.randomUUID(),
        slug: `${product.slug}-copy-${Date.now().toString().slice(-4)}`,
        name: `${product.name} Copy`,
        status: 'Draft',
        isFeatured: false,
        isPopular: false,
        salesCount: 0
      };
      return [copy, ...current];
    }),
    addBundle: (bundle) => setProducts((current) => [{ ...bundle, isBundle: true, category: 'Bundles', type: 'Bundle' }, ...current]),
    updateBundle: (bundle) => setProducts((current) => current.map((item) => item.id === bundle.id ? { ...bundle, isBundle: true, category: 'Bundles', type: 'Bundle' } : item)),
    deleteBundle: (id) => setProducts((current) => current.filter((item) => item.id !== id)),
    addCoupon: (coupon) => setCoupons((current) => [coupon, ...current]),
    updateCoupon: (coupon) => setCoupons((current) => current.map((item) => item.id === coupon.id ? coupon : item)),
    deleteCoupon: (id) => setCoupons((current) => current.filter((item) => item.id !== id)),
    createOrder: (order) => {
      setOrders((current) => [order, ...current]);
      if (order.couponCode) {
        setCoupons((current) => current.map((coupon) => coupon.code === order.couponCode ? { ...coupon, usedCount: coupon.usedCount + 1 } : coupon));
      }
    },
    updateOrderStatus: (id, orderStatus, paymentStatus) => setOrders((current) => current.map((order) => order.id === id ? {
      ...order,
      orderStatus,
      paymentStatus: paymentStatus ?? order.paymentStatus,
      updatedAt: today(),
      timeline: [...order.timeline, { label: `Status changed to ${orderStatus}`, date: today(), note: 'Updated from admin panel.' }]
    } : order)),
    updateOrder: (order) => setOrders((current) => current.map((item) => item.id === order.id ? order : item)),
    addChangelog: (item) => setChangelog((current) => [item, ...current]),
    updateChangelog: (item) => setChangelog((current) => current.map((change) => change.id === item.id ? item : change)),
    deleteChangelog: (id) => setChangelog((current) => current.filter((change) => change.id !== id)),
    updateAnnouncement: (next) => setAnnouncement(next),
    updateSettings: (next) => setSettings(next)
  }), [products, coupons, orders, changelog, announcement, settings, setProducts, setCoupons, setOrders, setChangelog, setAnnouncement, setSettings]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used inside StoreProvider');
  return context;
}
