import { useMemo, useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ChangelogFilters } from '../components/changelog/ChangelogFilters';
import { ChangelogTimeline } from '../components/changelog/ChangelogTimeline';
import { SectionHeader } from '../components/ui/SectionHeader';

export function ChangelogPage() {
  const { changelog } = useStore();
  const [search, setSearch] = useState('');
  const [type, setType] = useState('All');
  const visible = useMemo(() => changelog.filter((item) => type === 'All' || item.type === type).filter((item) => `${item.title} ${item.description} ${item.productName ?? ''}`.toLowerCase().includes(search.toLowerCase())), [changelog, search, type]);
  return <div className="mx-auto max-w-5xl px-4 py-10"><SectionHeader title="Changelog" description="Store updates, product updates, fixed issues, security notes, and removed features." /><ChangelogFilters search={search} type={type} onSearch={setSearch} onType={setType} /><div className="mt-6"><ChangelogTimeline items={visible} /></div></div>;
}
