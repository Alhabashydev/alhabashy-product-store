export type PaymentMethod = 'Card' | 'PayPal' | 'Crypto' | 'Tebex' | 'Manual Discord Ticket';
export type PaymentStatus = 'Pending' | 'Paid' | 'Failed' | 'Refunded';
export type OrderStatus = 'Pending' | 'Paid' | 'Processing' | 'Delivered' | 'Completed' | 'Cancelled' | 'Refunded' | 'Failed';

export interface OrderProduct {
  productId: string;
  name: string;
  slug: string;
  quantity: number;
  price: number;
}

export interface OrderTimelineItem {
  label: string;
  date: string;
  note: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  discordUsername: string;
  products: OrderProduct[];
  subtotal: number;
  discount: number;
  couponCode?: string;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  notes: string;
  internalNotes?: string[];
  timeline: OrderTimelineItem[];
  createdAt: string;
  updatedAt: string;
}
