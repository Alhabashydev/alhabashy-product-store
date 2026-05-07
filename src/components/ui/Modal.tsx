import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export function Modal({ open, title, children, onClose }: { open: boolean; title: string; children: React.ReactNode; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={title}>
      <motion.div initial={{ opacity: 0, scale: 0.98, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl border border-white/15 bg-[#050505] p-5 shadow-softWhite">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <Button variant="ghost" onClick={onClose} aria-label="Close modal"><X className="h-4 w-4" /></Button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
