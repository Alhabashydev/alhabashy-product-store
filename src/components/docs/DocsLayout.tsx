import { docs } from '../../data/docs';
import { DocsSidebar } from './DocsSidebar';

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-[280px_1fr]"><DocsSidebar docs={docs} /><div>{children}</div></div>;
}
