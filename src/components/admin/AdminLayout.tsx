import type { AdminTab } from '../../types/admin';
import { AdminSidebar } from './AdminSidebar';

export function AdminLayout({ active, onChange, children }: { active: AdminTab; onChange: (tab: AdminTab) => void; children: React.ReactNode }) {
  return <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-[240px_1fr]"><AdminSidebar active={active} onChange={onChange} /><section>{children}</section></div>;
}
