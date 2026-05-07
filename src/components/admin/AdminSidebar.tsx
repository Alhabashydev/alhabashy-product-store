import type { AdminTab } from '../../types/admin';
import { cn } from '../../lib/cn';

const tabs: AdminTab[] = ['Overview', 'Analytics', 'Products', 'Add Product', 'Bundles', 'Purchases', 'Coupons', 'Changelog', 'Announcement', 'Settings'];

export function AdminSidebar({ active, onChange }: { active: AdminTab; onChange: (tab: AdminTab) => void }) {
  return <aside className="sticky top-24 h-fit rounded-3xl border border-white/10 bg-white/[0.04] p-3"><p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Admin</p><div className="grid gap-1">{tabs.map((tab) => <button key={tab} onClick={() => onChange(tab)} className={cn('rounded-2xl px-3 py-2 text-left text-sm transition', active === tab ? 'bg-white text-black' : 'text-neutral-300 hover:bg-white/10 hover:text-white')}>{tab}</button>)}</div></aside>;
}
