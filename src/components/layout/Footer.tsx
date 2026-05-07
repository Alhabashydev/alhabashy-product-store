import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 px-4 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-2xl bg-white font-black text-black">A</span><span className="font-semibold text-white">Alhabashy Store</span></div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-400">Premium digital products, FiveM systems, UI resources, Discord bots, templates, and server tools built with clean practical UX.</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Store</h3>
          <div className="grid gap-2 text-sm text-neutral-400"><Link to="/products">Products</Link><Link to="/docs">Documentation</Link><Link to="/changelog">Changelog</Link></div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Support</h3>
          <div className="grid gap-2 text-sm text-neutral-400"><Link to="/support">FAQ & Support</Link><Link to="/account">Orders</Link><Link to="/admin">Admin Demo</Link></div>
        </div>
      </div>
    </footer>
  );
}
