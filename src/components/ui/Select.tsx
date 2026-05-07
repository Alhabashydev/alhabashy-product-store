import type { SelectHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn('w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-white/35', className)}>{children}</select>;
}
