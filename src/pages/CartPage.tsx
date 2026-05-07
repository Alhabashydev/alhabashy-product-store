import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { CartItem } from '../components/cart/CartItem';
import { CartSummary } from '../components/cart/CartSummary';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/EmptyState';
import { SectionHeader } from '../components/ui/SectionHeader';

export function CartPage() {
  const { lines, clearCart } = useCart();
  return <div className="mx-auto max-w-7xl px-4 py-10"><SectionHeader title="Cart" description="Review products, adjust quantities, apply coupons, and continue to the mock checkout." action={lines.length ? <Button variant="danger" onClick={clearCart}>Clear cart</Button> : null} />{lines.length === 0 ? <EmptyState title="Your cart is empty" message="Add products or bundles to start a demo order." action={<Link to="/products"><Button>Browse products</Button></Link>} /> : <div className="grid gap-6 lg:grid-cols-[1fr_360px]"><div className="grid gap-3">{lines.map((line)=><CartItem key={line.productId} line={line} />)}</div><CartSummary /></div>}</div>;
}
