import { Copy } from 'lucide-react';
import { useToast } from '../../hooks/useToast';

export function CopyButton({ text }: { text: string }) {
  const { showToast } = useToast();
  return <button className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300 hover:bg-white/10" onClick={() => { navigator.clipboard.writeText(text); showToast({ type: 'success', title: 'Copied' }); }}><Copy className="mr-1 inline h-3 w-3" />Copy</button>;
}
