import type { ChangelogItem } from '../types/changelog';

export const changelog: ChangelogItem[] = [
  { id: 'change-store-101', title: 'Store frontend release', version: '1.0.1', date: '2026-05-06', type: 'Added', description: 'Initial premium storefront system with cart, checkout, docs, changelog, and admin demo tools.', changes: ['Added product browsing', 'Added admin panel', 'Added localStorage persistence'] },
  { id: 'change-banking-120', title: 'Banking UI transaction filters', version: '1.2.0', date: '2026-04-22', type: 'Changed', productSlug: 'premium-fivem-banking-ui', productName: 'Premium FiveM Banking UI', description: 'Improved transaction filtering and responsive card layout.', changes: ['Added filters', 'Improved mobile scaling', 'Reduced unnecessary motion'] },
  { id: 'change-boss-111', title: 'Boss menu wings preview', version: '1.1.1', date: '2026-04-18', type: 'Fixed', productSlug: 'boss-menu-ui-system', productName: 'Boss Menu UI System', description: 'Improved employee profile layout and wings summary.', changes: ['Fixed overflowing notes', 'Added wings card', 'Improved table spacing'] },
  { id: 'change-security-100', title: 'Checkout demo clarity', version: '1.0.0', date: '2026-05-04', type: 'Security', description: 'Added clearer warnings that checkout is frontend/demo only and does not process real payments.', changes: ['Added demo notice', 'Improved order success copy'] }
];
