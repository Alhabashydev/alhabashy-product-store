import { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useToast } from '../../hooks/useToast';
import type { StoreSettings } from '../../types/admin';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input, Label, Textarea } from '../ui/Input';

export function AdminSettings() {
  const { settings, updateSettings } = useStore();
  const { showToast } = useToast();
  const [draft, setDraft] = useState<StoreSettings>(settings);
  const toggles: Array<keyof Pick<StoreSettings, 'maintenanceMode' | 'checkoutEnabled' | 'announcementEnabled' | 'documentationEnabled' | 'changelogEnabled'>> = ['maintenanceMode', 'checkoutEnabled', 'announcementEnabled', 'documentationEnabled', 'changelogEnabled'];
  return <Card><h2 className="mb-5 text-xl font-semibold text-white">Store settings</h2><div className="grid gap-4 md:grid-cols-2"><div><Label>Store name</Label><Input value={draft.storeName} onChange={(e)=>setDraft({ ...draft, storeName: e.target.value })} /></div><div><Label>Currency</Label><Input value={draft.currency} onChange={(e)=>setDraft({ ...draft, currency: e.target.value.toUpperCase() })} /></div><div className="md:col-span-2"><Label>Description</Label><Textarea value={draft.storeDescription} onChange={(e)=>setDraft({ ...draft, storeDescription: e.target.value })} /></div><div><Label>Support Discord link</Label><Input value={draft.supportDiscordLink} onChange={(e)=>setDraft({ ...draft, supportDiscordLink: e.target.value })} /></div><div><Label>Default product status</Label><Input value={draft.defaultProductStatus} onChange={(e)=>setDraft({ ...draft, defaultProductStatus: e.target.value })} /></div></div><div className="mt-5 grid gap-3 md:grid-cols-3">{toggles.map((key)=><label key={key} className="flex items-center gap-2 rounded-2xl border border-white/10 p-3 text-sm text-neutral-300"><input type="checkbox" checked={Boolean(draft[key])} onChange={(e)=>setDraft({ ...draft, [key]: e.target.checked })} />{key}</label>)}</div><Button className="mt-6" onClick={()=>{ updateSettings(draft); showToast({ type:'success', title:'Settings saved' }); }}>Save settings</Button></Card>;
}
