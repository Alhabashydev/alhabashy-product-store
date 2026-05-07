import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

export function Button({ className, variant = 'primary', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  const styles: Record<ButtonVariant, string> = {
    primary: 'bg-white text-black hover:bg-neutral-200 border-white/90',
    secondary: 'bg-white/[0.04] text-white hover:bg-white/[0.08] border-white/15',
    ghost: 'bg-transparent text-white hover:bg-white/[0.06] border-transparent',
    danger: 'bg-red-500/12 text-red-100 hover:bg-red-500/18 border-red-400/30'
  };

  return (
    <button
      {...props}
      className={cn('inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]', styles[variant], className)}
    />
  );
}
