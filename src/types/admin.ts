export type AdminTab = 'Overview' | 'Analytics' | 'Products' | 'Add Product' | 'Bundles' | 'Purchases' | 'Coupons' | 'Changelog' | 'Announcement' | 'Settings';

export interface StoreSettings {
  storeName: string;
  storeDescription: string;
  supportDiscordLink: string;
  currency: string;
  defaultProductStatus: string;
  maintenanceMode: boolean;
  checkoutEnabled: boolean;
  announcementEnabled: boolean;
  documentationEnabled: boolean;
  changelogEnabled: boolean;
}
