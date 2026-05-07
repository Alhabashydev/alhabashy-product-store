import { X } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { Toast } from '../../context/ToastContext';

const tone = {
  success: 'border-green-400/20 bg-green-400/10',
  error: 'border-red-400/20 bg-red-400/10',
  warning: 'border-amber-300/20 bg-amber-300/10',
  info: 'border-white/15 bg-white/[0.06]'
};

export function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  return (
    <div className={cn('rounded-2xl border p-4 text-sm shadow-softWhite backdrop-blur-md', tone[toast.type])}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-white">{toast.title}</p>
          {toast.message ? <p className="mt-1 text-neutral-300">{toast.message}</p> : null}
        </div>
        <button className="rounded-full p-1 text-neutral-400 hover:bg-white/10 hover:text-white" onClick={onClose} aria-label="Close toast"><X className="h-4 w-4" /></button>
      </div>
    </div>
  );
}
