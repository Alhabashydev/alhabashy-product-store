import { cn } from '../../lib/cn';

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-softWhite', className)}>{children}</div>;
}
