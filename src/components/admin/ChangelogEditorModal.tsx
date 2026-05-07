import { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useToast } from '../../hooks/useToast';
import type { ChangelogItem } from '../../types/changelog';
import { Button } from '../ui/Button';
import { Input, Label, Textarea } from '../ui/Input';
import { Modal } from '../ui/Modal';
import { Select } from '../ui/Select';

function blankChange(): ChangelogItem { return { id: crypto.randomUUID(), title: 'New changelog entry', version: '1.0.0', date: new Date().toISOString().slice(0,10), type: 'Added', productSlug: '', productName: '', description: 'Describe the update clearly.', changes: ['Added a useful change'] }; }

export function ChangelogEditorModal({ item, open, onClose }: { item?: ChangelogItem; open: boolean; onClose: () => void }) {
  const { addChangelog, updateChangelog } = useStore();
  const { showToast } = useToast();
  const [draft, setDraft] = useState<ChangelogItem>(item ?? blankChange());
  function save() { item ? updateChangelog(draft) : addChangelog(draft); showToast({ type:'success', title:'Changelog saved' }); onClose(); }
  return <Modal open={open} title={item ? 'Edit changelog' : 'Add changelog'} onClose={onClose}><div className="grid gap-4 md:grid-cols-2"><div><Label>Title</Label><Input value={draft.title} onChange={(e)=>setDraft({ ...draft, title: e.target.value })} /></div><div><Label>Version</Label><Input value={draft.version} onChange={(e)=>setDraft({ ...draft, version: e.target.value })} /></div><div><Label>Date</Label><Input type="date" value={draft.date} onChange={(e)=>setDraft({ ...draft, date: e.target.value })} /></div><div><Label>Type</Label><Select value={draft.type} onChange={(e)=>setDraft({ ...draft, type: e.target.value as ChangelogItem['type'] })}><option>Added</option><option>Changed</option><option>Fixed</option><option>Removed</option><option>Security</option></Select></div><div><Label>Product slug optional</Label><Input value={draft.productSlug ?? ''} onChange={(e)=>setDraft({ ...draft, productSlug: e.target.value })} /></div><div><Label>Product name optional</Label><Input value={draft.productName ?? ''} onChange={(e)=>setDraft({ ...draft, productName: e.target.value })} /></div><div className="md:col-span-2"><Label>Description</Label><Textarea value={draft.description} onChange={(e)=>setDraft({ ...draft, description: e.target.value })} /></div><div className="md:col-span-2"><Label>Changes comma separated</Label><Input value={draft.changes.join(', ')} onChange={(e)=>setDraft({ ...draft, changes: e.target.value.split(',').map(i=>i.trim()).filter(Boolean) })} /></div></div><div className="mt-6 flex justify-end gap-3"><Button variant="secondary" onClick={onClose}>Cancel</Button><Button onClick={save}>Save changelog</Button></div></Modal>;
}
