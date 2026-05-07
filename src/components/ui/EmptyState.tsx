import { PackageSearch } from 'lucide-react';
import { Card } from './Card';

export function EmptyState({ title, message, action }: { title: string; message: string; action?: React.ReactNode }) {
  return (
    <Card className="flex flex-col items-center justify-center py-14 text-center">
      <PackageSearch className="mb-4 h-10 w-10 text-neutral-500" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-neutral-400">{message}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </Card>
  );
}
