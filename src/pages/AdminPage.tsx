import { useState } from 'react';
import type { AdminTab } from '../types/admin';
import { AdminLayout } from '../components/admin/AdminLayout';
import { AdminOverview } from '../components/admin/AdminOverview';
import { AdminAnalytics } from '../components/admin/AdminAnalytics';
import { AdminProductsTable } from '../components/admin/AdminProductsTable';
import { ProductEditorForm } from '../components/admin/ProductEditorForm';
import { AdminBundleEditor } from '../components/admin/AdminBundleEditor';
import { AdminOrdersTable } from '../components/admin/AdminOrdersTable';
import { AdminCouponsTable } from '../components/admin/AdminCouponsTable';
import { AdminChangelogManager } from '../components/admin/AdminChangelogManager';
import { AdminAnnouncementSettings } from '../components/admin/AdminAnnouncementSettings';
import { AdminSettings } from '../components/admin/AdminSettings';
import { SectionHeader } from '../components/ui/SectionHeader';

export function AdminPage() {
  const [active, setActive] = useState<AdminTab>('Overview');
  return <AdminLayout active={active} onChange={setActive}>{active === 'Overview' && <AdminOverview />}{active === 'Analytics' && <AdminAnalytics />}{active === 'Products' && <><SectionHeader title="Products" description="Search, edit, duplicate, delete, and change product status." /><AdminProductsTable /></>}{active === 'Add Product' && <><SectionHeader title="Add product" description="Create a product with pricing, flags, requirements, docs-ready details, and live card preview." /><ProductEditorForm /></>}{active === 'Bundles' && <AdminBundleEditor />}{active === 'Purchases' && <><SectionHeader title="Purchases" description="Review localStorage orders and update demo statuses." /><AdminOrdersTable /></>}{active === 'Coupons' && <><SectionHeader title="Coupons" description="Create and manage customer coupon codes." /><AdminCouponsTable /></>}{active === 'Changelog' && <><SectionHeader title="Changelog" description="Create product or store update entries." /><AdminChangelogManager /></>}{active === 'Announcement' && <><SectionHeader title="Announcement" description="Edit the customer-facing top announcement bar." /><AdminAnnouncementSettings /></>}{active === 'Settings' && <><SectionHeader title="Settings" description="Store-level localStorage settings ready to replace with backend config later." /><AdminSettings /></>}</AdminLayout>;
}
