import { CheckoutForm } from '../components/checkout/CheckoutForm';
import { SectionHeader } from '../components/ui/SectionHeader';

export function CheckoutPage() {
  return <div className="mx-auto max-w-7xl px-4 py-10"><SectionHeader title="Checkout" description="Frontend-only demo checkout. No real payment is processed." /><CheckoutForm /></div>;
}
