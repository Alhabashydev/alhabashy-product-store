import type { Product } from '../../types/product';
import { Card } from '../ui/Card';

export function TopProductsTable({ products }: { products: Product[] }) {
  return <Card><h3 className="mb-4 font-semibold text-white">Top selling products</h3><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="text-neutral-500"><tr><th className="py-2">Product</th><th>Category</th><th>Sales</th><th>Rating</th></tr></thead><tbody className="text-neutral-300">{products.slice().sort((a,b)=>b.salesCount-a.salesCount).slice(0,6).map((product)=><tr key={product.id} className="border-t border-white/10"><td className="py-3 text-white">{product.name}</td><td>{product.category}</td><td>{product.salesCount}</td><td>{product.rating}</td></tr>)}</tbody></table></div></Card>;
}
