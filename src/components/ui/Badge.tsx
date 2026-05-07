import { cn } from '../../lib/cn';

const tones = {
  default: 'border-white/15 bg-white/[0.05] text-white',
  success: 'border-green-400/20 bg-green-400/10 text-green-100',
  danger: 'border-red-400/20 bg-red-400/10 text-red-100',
  warning: 'border-amber-300/20 bg-amber-300/10 text-amber-100',
  info: 'border-blue-300/20 bg-blue-300/10 text-blue-100'
};

export function Badge({ children, tone = 'default', className }: { children: React.ReactNode; tone?: keyof typeof tones; className?: string }) {
  return <span className={cn('inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium', tones[tone], className)}>{children}</span>;
}
