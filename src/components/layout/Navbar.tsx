import { Menu, ShoppingCart, UserRound } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../data/siteConfig';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { getTotalItems } = useCart();
  const count = getTotalItems();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-2xl border border-white/15 bg-white text-sm font-black text-black">A</span>
          <span className="font-semibold tracking-tight text-white">Alhabashy Store</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={({ isActive }) => `rounded-full px-3 py-2 text-sm transition ${isActive ? 'bg-white text-black' : 'text-neutral-300 hover:bg-white/10 hover:text-white'}`}>{link.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/account" className="hidden rounded-full border border-white/10 p-2 text-neutral-300 hover:bg-white/10 hover:text-white sm:inline-flex" aria-label="Account"><UserRound className="h-4 w-4" /></Link>
          <Link to="/cart" className="relative rounded-full border border-white/10 p-2 text-neutral-300 hover:bg-white/10 hover:text-white" aria-label="Cart"><ShoppingCart className="h-4 w-4" />{count > 0 ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-white px-1 text-[10px] font-bold text-black">{count}</span> : null}</Link>
          <Link to="/admin" className="hidden md:inline-flex"><Button variant="secondary">Admin</Button></Link>
          <button className="rounded-full border border-white/10 p-2 text-white md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu"><Menu className="h-4 w-4" /></button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
