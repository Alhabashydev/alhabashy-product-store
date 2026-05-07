import { Link } from 'react-router-dom';
import { navLinks } from '../../data/siteConfig';

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="border-t border-white/10 bg-black/95 p-4 md:hidden">
      <div className="grid gap-2">
        {navLinks.map((link) => <Link key={link.href} to={link.href} onClick={onClose} className="rounded-2xl px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white">{link.label}</Link>)}
        <Link to="/admin" onClick={onClose} className="rounded-2xl px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white">Admin</Link>
      </div>
    </div>
  );
}
