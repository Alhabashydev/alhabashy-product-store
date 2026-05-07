import { Link } from 'react-router-dom';
import type { Order } from '../../types/order';
import { formatCurrency } from '../../lib/formatCurrency';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';

export function CheckoutSuccessModal({ order, open, onClose }: { order?: Order; open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} title="Order created" onClose={onClose}>
      {order ? <div className="space-y-4"><p className="text-neutral-300">Your frontend demo order <span className="font-semibold text-white">{order.id}</span> was saved to localStorage. No real payment was processed.</p><div className="rounded-3xl border border-white/10 bg-black/30 p-4"><p className="font-semibold text-white">Purchased products</p>{order.products.map((item) => <p key={item.productId} className="mt-2 text-sm text-neutral-400">{item.quantity}× {item.name}</p>)}<p className="mt-4 text-lg font-semibold text-white">Total: {formatCurrency(order.total)}</p></div><div className="flex flex-wrap gap-3"><Link to="/products"><Button>Back to products</Button></Link><Link to="/account"><Button variant="secondary">View orders</Button></Link></div></div> : null}
    </Modal>
  );
}
