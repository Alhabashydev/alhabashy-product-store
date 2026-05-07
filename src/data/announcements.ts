import type { Announcement } from '../types/announcement';

export const announcement: Announcement = {
  id: 'ann-release-sale',
  enabled: true,
  text: 'New MT Black products are live. Use BLACK10 for 10% off selected digital products.',
  buttonText: 'Browse products',
  buttonLink: '/products',
  type: 'Sale',
  startDate: '2026-01-01',
  endDate: '2027-01-01'
};
