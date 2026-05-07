import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from '../../hooks/useToast';
import { ToastItem } from './ToastItem';

export function ToastContainer() {
  const { toasts, removeToast } = useToast();
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-[80] flex w-[min(92vw,380px)] flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div key={toast.id} className="pointer-events-auto" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }}>
            <ToastItem toast={toast} onClose={() => removeToast(toast.id)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
