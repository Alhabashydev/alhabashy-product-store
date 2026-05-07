import type { Order } from '../types/order';

export const orders: Order[] = [
  {
    id: 'ORD-000121', customerName: 'Demo Customer', customerEmail: 'customer@example.com', discordUsername: 'demo#0001',
    products: [{ productId: 'prod-banking-ui', name: 'Premium FiveM Banking UI', slug: 'premium-fivem-banking-ui', quantity: 1, price: 39 }],
    subtotal: 39, discount: 0, total: 39, paymentMethod: 'Manual Discord Ticket', paymentStatus: 'Paid', orderStatus: 'Delivered', notes: 'Please send setup notes.',
    timeline: [
      { label: 'Order created', date: '2026-05-01', note: 'Customer placed order.' },
      { label: 'Payment confirmed', date: '2026-05-01', note: 'Manual payment marked paid.' },
      { label: 'Product delivered', date: '2026-05-02', note: 'Download access prepared.' }
    ],
    createdAt: '2026-05-01', updatedAt: '2026-05-02'
  },
  {
    id: 'ORD-000122', customerName: 'Server Owner', customerEmail: 'owner@example.com', discordUsername: 'serverowner',
    products: [{ productId: 'bundle-ui-complete', name: 'Complete FiveM UI Bundle', slug: 'complete-fivem-ui-bundle', quantity: 1, price: 99 }],
    subtotal: 99, discount: 10, couponCode: 'BLACK10', total: 89, paymentMethod: 'Tebex', paymentStatus: 'Pending', orderStatus: 'Processing', notes: 'Need QBCore setup.',
    timeline: [{ label: 'Order created', date: '2026-05-03', note: 'Bundle checkout created.' }], createdAt: '2026-05-03', updatedAt: '2026-05-03'
  }
];
