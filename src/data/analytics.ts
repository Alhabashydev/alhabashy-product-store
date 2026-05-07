import type { AnalyticsData } from '../types/analytics';

export const analytics: AnalyticsData = {
  totalRevenue: 18420,
  totalOrders: 312,
  totalCustomers: 221,
  conversionRate: 4.8,
  averageOrderValue: 59,
  refundRate: 1.6,
  revenueOverTime: [
    { label: 'Jan', revenue: 1900, orders: 34 }, { label: 'Feb', revenue: 2400, orders: 41 }, { label: 'Mar', revenue: 3100, orders: 55 },
    { label: 'Apr', revenue: 4800, orders: 82 }, { label: 'May', revenue: 6220, orders: 100 }
  ],
  ordersOverTime: [
    { label: 'Jan', revenue: 1900, orders: 34 }, { label: 'Feb', revenue: 2400, orders: 41 }, { label: 'Mar', revenue: 3100, orders: 55 },
    { label: 'Apr', revenue: 4800, orders: 82 }, { label: 'May', revenue: 6220, orders: 100 }
  ],
  salesByCategory: [
    { category: 'UI Systems', sales: 155 }, { category: 'Discord Bots', sales: 66 }, { category: 'Bundles', sales: 58 }, { category: 'Websites', sales: 33 }
  ],
  couponUsage: [{ code: 'BLACK10', used: 12 }, { code: 'BUNDLE15', used: 5 }, { code: 'SAVE5', used: 30 }],
  bundleSales: [{ name: 'Complete FiveM UI Bundle', sales: 40 }, { name: 'Admin Tools Bundle', sales: 14 }, { name: 'Website + Store Bundle', sales: 9 }]
};
