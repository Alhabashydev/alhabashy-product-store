import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn('w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition focus:border-white/35 focus:bg-black/60', className)} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn('min-h-28 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none transition focus:border-white/35 focus:bg-black/60', className)} />;
}

export function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">{children}</label>;
}
