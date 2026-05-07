import { useMemo, useState } from 'react';
import { Copy, Edit, Trash2 } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { formatCurrency } from '../../lib/formatCurrency';
import type { Product } from '../../types/product';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ConfirmDialog } from '../ui/ConfirmDialog';
import { Input } from '../ui/Input';
import { Modal } from '../ui/Modal';
import { Select } from '../ui/Select';
import { Badge } from '../ui/Badge';
import { ProductEditorForm } from './ProductEditorForm';
import { useToast } from '../../hooks/useToast';

export function AdminProductsTable({ onlyBundles = false }: { onlyBundles?: boolean }) {
  const { products, deleteProduct, duplicateProduct, updateProduct } = useStore();
  const { showToast } = useToast();
  const [search, setSearch] = useState('');
  const [edit, setEdit] = useState<Product | undefined>();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const visible = useMemo(() => products.filter((p) => p.isBundle === onlyBundles).filter((p) => `${p.name} ${p.category} ${p.status}`.toLowerCase().includes(search.toLowerCase())), [products, search, onlyBundles]);
  return <Card><div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><h2 className="text-xl font-semibold text-white">{onlyBundles ? 'Bundle management' : 'Product management'}</h2><Input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search products..." className="md:max-w-sm" /></div><div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-sm"><thead className="text-neutral-500"><tr><th className="py-2">Product</th><th>Category</th><th>Type</th><th>Price</th><th>Status</th><th>Sales</th><th>Updated</th><th>Actions</th></tr></thead><tbody>{visible.map((product)=><tr key={product.id} className="border-t border-white/10 text-neutral-300"><td className="py-3"><div className="flex items-center gap-3"><div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/[0.06]" /><span className="font-medium text-white">{product.name}</span></div></td><td>{product.category}</td><td>{product.type}</td><td>{formatCurrency(product.price)}</td><td><Select value={product.status} onChange={(e)=>{ updateProduct({ ...product, status: e.target.value as Product['status'] }); showToast({ type:'success', title:'Status updated' }); }} className="py-2"><option>Active</option><option>Hidden</option><option>Draft</option><option>Archived</option><option>Coming Soon</option></Select></td><td>{product.salesCount}</td><td>{product.lastUpdated}</td><td><div className="flex gap-2"><Button variant="secondary" onClick={()=>setEdit(product)}><Edit className="h-4 w-4" /></Button><Button variant="secondary" onClick={()=>{ duplicateProduct(product.id); showToast({ type:'success', title:'Product duplicated' }); }}><Copy className="h-4 w-4" /></Button><Button variant="danger" onClick={()=>setDeleteId(product.id)}><Trash2 className="h-4 w-4" /></Button></div></td></tr>)}</tbody></table></div>{visible.length === 0 ? <p className="mt-4 text-sm text-neutral-500">No matching items.</p> : null}<Modal open={Boolean(edit)} title="Edit product" onClose={()=>setEdit(undefined)}>{edit ? <ProductEditorForm product={edit} onSaved={()=>setEdit(undefined)} forceBundle={onlyBundles} /> : null}</Modal><ConfirmDialog open={Boolean(deleteId)} title="Delete item" message="This removes the item from localStorage demo state." onCancel={()=>setDeleteId(null)} onConfirm={()=>{ if(deleteId) deleteProduct(deleteId); setDeleteId(null); showToast({ type:'warning', title:'Product deleted' }); }} /></Card>;
}
