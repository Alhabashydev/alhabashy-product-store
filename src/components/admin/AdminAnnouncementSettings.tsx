import { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useToast } from '../../hooks/useToast';
import type { Announcement } from '../../types/announcement';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input, Label } from '../ui/Input';
import { Select } from '../ui/Select';

export function AdminAnnouncementSettings() {
  const { announcement, updateAnnouncement } = useStore();
  const { showToast } = useToast();
  const [draft, setDraft] = useState<Announcement>(announcement);
  return <Card><h2 className="mb-5 text-xl font-semibold text-white">Announcement settings</h2><div className="grid gap-4 md:grid-cols-2"><label className="flex items-center gap-2 rounded-2xl border border-white/10 p-3 text-sm text-neutral-300"><input type="checkbox" checked={draft.enabled} onChange={(e)=>setDraft({ ...draft, enabled: e.target.checked })} /> Enabled</label><div><Label>Type</Label><Select value={draft.type} onChange={(e)=>setDraft({ ...draft, type: e.target.value as Announcement['type'] })}><option>Info</option><option>Sale</option><option>Warning</option><option>Maintenance</option><option>Release</option></Select></div><div className="md:col-span-2"><Label>Text</Label><Input value={draft.text} onChange={(e)=>setDraft({ ...draft, text: e.target.value })} /></div><div><Label>Button text</Label><Input value={draft.buttonText} onChange={(e)=>setDraft({ ...draft, buttonText: e.target.value })} /></div><div><Label>Button link</Label><Input value={draft.buttonLink} onChange={(e)=>setDraft({ ...draft, buttonLink: e.target.value })} /></div><div><Label>Start date</Label><Input type="date" value={draft.startDate} onChange={(e)=>setDraft({ ...draft, startDate: e.target.value })} /></div><div><Label>End date</Label><Input type="date" value={draft.endDate} onChange={(e)=>setDraft({ ...draft, endDate: e.target.value })} /></div></div><Button className="mt-6" onClick={()=>{ updateAnnouncement(draft); showToast({ type:'success', title:'Announcement saved' }); }}>Save announcement</Button></Card>;
}
