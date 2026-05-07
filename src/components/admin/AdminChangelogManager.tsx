import { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useToast } from '../../hooks/useToast';
import type { ChangelogItem } from '../../types/changelog';
import { ChangelogTypeBadge } from '../changelog/ChangelogTypeBadge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ConfirmDialog } from '../ui/ConfirmDialog';
import { ChangelogEditorModal } from './ChangelogEditorModal';

export function AdminChangelogManager() {
  const { changelog, deleteChangelog } = useStore();
  const { showToast } = useToast();
  const [adding, setAdding] = useState(false);
  const [edit, setEdit] = useState<ChangelogItem | undefined>();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  return <Card><div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-semibold text-white">Changelog manager</h2><Button onClick={()=>setAdding(true)}>Add changelog</Button></div><div className="grid gap-3">{changelog.map((item)=><div key={item.id} className="rounded-3xl border border-white/10 p-4"><div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><div className="flex gap-2"><ChangelogTypeBadge type={item.type} /><span className="text-xs text-neutral-500">v{item.version}</span></div><p className="mt-2 font-semibold text-white">{item.title}</p><p className="text-sm text-neutral-500">{item.date} · {item.productName || 'Store update'}</p></div><div className="flex gap-2"><Button variant="secondary" onClick={()=>setEdit(item)}>Edit</Button><Button variant="danger" onClick={()=>setDeleteId(item.id)}>Delete</Button></div></div></div>)}</div><ChangelogEditorModal open={adding} onClose={()=>setAdding(false)} /><ChangelogEditorModal item={edit} open={Boolean(edit)} onClose={()=>setEdit(undefined)} /><ConfirmDialog open={Boolean(deleteId)} title="Delete changelog" message="This removes the changelog entry." onCancel={()=>setDeleteId(null)} onConfirm={()=>{ if(deleteId) deleteChangelog(deleteId); setDeleteId(null); showToast({ type:'warning', title:'Changelog deleted' }); }} /></Card>;
}
