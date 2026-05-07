export interface AnalyticsPoint {
  label: string;
  revenue: number;
  orders: number;
}

export interface CategorySale {
  category: string;
  sales: number;
}

export interface AnalyticsData {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  conversionRate: number;
  averageOrderValue: number;
  refundRate: number;
  revenueOverTime: AnalyticsPoint[];
  ordersOverTime: AnalyticsPoint[];
  salesByCategory: CategorySale[];
  couponUsage: { code: string; used: number }[];
  bundleSales: { name: string; sales: number }[];
}
