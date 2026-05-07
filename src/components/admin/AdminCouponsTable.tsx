import { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useToast } from '../../hooks/useToast';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ConfirmDialog } from '../ui/ConfirmDialog';
import { Input } from '../ui/Input';
import { CouponStatusBadge } from '../coupons/CouponStatusBadge';
import type { Coupon } from '../../types/coupon';
import { CouponEditorModal } from './CouponEditorModal';

export function AdminCouponsTable() {
  const { coupons, deleteCoupon } = useStore();
  const { showToast } = useToast();
  const [search, setSearch] = useState('');
  const [edit, setEdit] = useState<Coupon | undefined>();
  const [adding, setAdding] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const visible = coupons.filter((coupon) => coupon.code.toLowerCase().includes(search.toLowerCase()));
  return <Card><div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><h2 className="text-xl font-semibold text-white">Coupons</h2><div className="flex gap-2"><Input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search coupons..." /><Button onClick={()=>setAdding(true)}>Add coupon</Button></div></div><div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-sm"><thead className="text-neutral-500"><tr><th className="py-2">Code</th><th>Type</th><th>Value</th><th>Usage</th><th>Expiry</th><th>Status</th><th>Actions</th></tr></thead><tbody>{visible.map((coupon)=><tr key={coupon.id} className="border-t border-white/10 text-neutral-300"><td className="py-3 font-semibold text-white">{coupon.code}</td><td>{coupon.type}</td><td>{coupon.type === 'Percentage' ? `${coupon.value}%` : `$${coupon.value}`}</td><td>{coupon.usedCount}/{coupon.usageLimit}</td><td>{coupon.expiryDate}</td><td><CouponStatusBadge status={coupon.status} /></td><td><div className="flex gap-2"><Button variant="secondary" onClick={()=>setEdit(coupon)}>Edit</Button><Button variant="danger" onClick={()=>setDeleteId(coupon.id)}>Delete</Button></div></td></tr>)}</tbody></table></div><CouponEditorModal open={adding} onClose={()=>setAdding(false)} /><CouponEditorModal coupon={edit} open={Boolean(edit)} onClose={()=>setEdit(undefined)} /><ConfirmDialog open={Boolean(deleteId)} title="Delete coupon" message="This removes the coupon from localStorage demo state." onCancel={()=>setDeleteId(null)} onConfirm={()=>{ if(deleteId) deleteCoupon(deleteId); setDeleteId(null); showToast({ type:'warning', title:'Coupon deleted' }); }} /></Card>;
}
