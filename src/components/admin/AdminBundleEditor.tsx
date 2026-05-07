import { ProductEditorForm } from './ProductEditorForm';
import { AdminProductsTable } from './AdminProductsTable';
import { SectionHeader } from '../ui/SectionHeader';

export function AdminBundleEditor() {
  return <div className="space-y-8"><SectionHeader title="Bundles" description="Create bundle products, attach included product IDs, set savings, requirements, and bundle status." /><AdminProductsTable onlyBundles /><div><SectionHeader title="Add new bundle" description="This uses the same product model but forces category/type to Bundle." /><ProductEditorForm forceBundle /></div></div>;
}
