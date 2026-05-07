import { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useToast } from '../../hooks/useToast';
import type { Coupon } from '../../types/coupon';
import { Button } from '../ui/Button';
import { Input, Label } from '../ui/Input';
import { Modal } from '../ui/Modal';
import { Select } from '../ui/Select';

function blankCoupon(): Coupon { return { id: crypto.randomUUID(), code: 'NEWCODE', type: 'Percentage', value: 10, minimumOrderAmount: 20, usageLimit: 100, usedCount: 0, expiryDate: '2027-01-01', status: 'Active', applicableProductIds: [], applicableCategories: [] }; }

export function CouponEditorModal({ coupon, open, onClose }: { coupon?: Coupon; open: boolean; onClose: () => void }) {
  const { addCoupon, updateCoupon } = useStore();
  const { showToast } = useToast();
  const [draft, setDraft] = useState<Coupon>(coupon ?? blankCoupon());
  function save() { coupon ? updateCoupon(draft) : addCoupon(draft); showToast({ type:'success', title:'Coupon saved' }); onClose(); }
  return <Modal open={open} title={coupon ? 'Edit coupon' : 'Add coupon'} onClose={onClose}><div className="grid gap-4 md:grid-cols-2"><div><Label>Code</Label><Input value={draft.code} onChange={(e)=>setDraft({ ...draft, code: e.target.value.toUpperCase() })} /></div><div><Label>Type</Label><Select value={draft.type} onChange={(e)=>setDraft({ ...draft, type: e.target.value as Coupon['type'] })}><option>Percentage</option><option>Fixed amount</option></Select></div><div><Label>Value</Label><Input type="number" value={draft.value} onChange={(e)=>setDraft({ ...draft, value: Number(e.target.value) })} /></div><div><Label>Minimum order</Label><Input type="number" value={draft.minimumOrderAmount} onChange={(e)=>setDraft({ ...draft, minimumOrderAmount: Number(e.target.value) })} /></div><div><Label>Usage limit</Label><Input type="number" value={draft.usageLimit} onChange={(e)=>setDraft({ ...draft, usageLimit: Number(e.target.value) })} /></div><div><Label>Used count</Label><Input type="number" value={draft.usedCount} onChange={(e)=>setDraft({ ...draft, usedCount: Number(e.target.value) })} /></div><div><Label>Expiry date</Label><Input type="date" value={draft.expiryDate} onChange={(e)=>setDraft({ ...draft, expiryDate: e.target.value })} /></div><div><Label>Status</Label><Select value={draft.status} onChange={(e)=>setDraft({ ...draft, status: e.target.value as Coupon['status'] })}><option>Active</option><option>Disabled</option><option>Expired</option></Select></div><div className="md:col-span-2"><Label>Applicable categories comma separated</Label><Input value={draft.applicableCategories.join(', ')} onChange={(e)=>setDraft({ ...draft, applicableCategories: e.target.value.split(',').map(i=>i.trim()).filter(Boolean) })} /></div><div className="md:col-span-2"><Label>Applicable product IDs comma separated</Label><Input value={draft.applicableProductIds.join(', ')} onChange={(e)=>setDraft({ ...draft, applicableProductIds: e.target.value.split(',').map(i=>i.trim()).filter(Boolean) })} /></div></div><div className="mt-6 flex justify-end gap-3"><Button variant="secondary" onClick={onClose}>Cancel</Button><Button onClick={save}>Save coupon</Button></div></Modal>;
}
