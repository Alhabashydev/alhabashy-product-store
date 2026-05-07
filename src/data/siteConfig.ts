import type { StoreSettings } from '../types/admin';

export const siteConfig: StoreSettings = {
  storeName: 'Alhabashy Store',
  storeDescription: 'Premium digital products for FiveM servers, Discord stores, web templates, and professional server tooling.',
  supportDiscordLink: 'https://discord.gg/example',
  currency: 'USD',
  defaultProductStatus: 'Active',
  maintenanceMode: false,
  checkoutEnabled: true,
  announcementEnabled: true,
  documentationEnabled: true,
  changelogEnabled: true
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Docs', href: '/docs' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Support', href: '/support' }
];
