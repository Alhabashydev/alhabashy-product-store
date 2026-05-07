import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useStore } from '../../context/StoreContext';
import { Badge } from '../ui/Badge';

export function AnnouncementBar() {
  const { announcement, settings } = useStore();
  const [dismissed, setDismissed] = useLocalStorage<string[]>('alhabashy_dismissed_announcements', []);
  const active = announcement.enabled && settings.announcementEnabled && !dismissed.includes(announcement.id);
  if (!active) return null;

  return (
    <div className="border-b border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Badge>{announcement.type}</Badge>
          <span className="text-neutral-200">{announcement.text}</span>
          {announcement.buttonText ? <Link to={announcement.buttonLink} className="hidden rounded-full border border-white/15 px-3 py-1 text-xs text-white hover:bg-white/10 md:inline-flex">{announcement.buttonText}</Link> : null}
        </div>
        <button className="rounded-full p-1 text-neutral-400 hover:bg-white/10 hover:text-white" onClick={() => setDismissed([...dismissed, announcement.id])} aria-label="Dismiss announcement"><X className="h-4 w-4" /></button>
      </div>
    </div>
  );
}
