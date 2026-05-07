import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingCart, Zap } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../lib/formatCurrency';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { ProductGallery } from '../components/products/ProductGallery';
import { QuantitySelector } from '../components/products/QuantitySelector';
import { RelatedProducts } from '../components/products/RelatedProducts';
import { RequirementsChecker } from '../components/requirements/RequirementsChecker';
import { BundleDetails } from '../components/bundles/BundleDetails';
import { BundleIncludedProducts } from '../components/bundles/BundleIncludedProducts';

export function ProductDetailsPage() {
  const { slug } = useParams();
  const { products } = useStore();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((item) => item.slug === slug);
  if (!product) return <div className="mx-auto max-w-7xl px-4 py-10"><EmptyState title="Product not found" message="The product slug does not exist in the demo data." action={<Link to="/products"><Button>Back to products</Button></Link>} /></div>;
  const related = products.filter((item) => item.id !== product.id && (item.category === product.category || item.isBundle === product.isBundle));
  const included = product.includedProductIds ? products.filter((item) => product.includedProductIds?.includes(item.id)) : [];

  if (product.isBundle) return <div className="mx-auto max-w-7xl px-4 py-10"><BundleDetails bundle={product} /><div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]"><BundleIncludedProducts products={included} /><RequirementsChecker product={product} /></div><RelatedProducts products={related} /></div>;

  return <div className="mx-auto max-w-7xl px-4 py-10"><div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"><ProductGallery images={product.images} title={product.name} /><div><div className="flex flex-wrap gap-2"><Badge>{product.badge}</Badge><Badge>{product.category}</Badge><Badge>{product.version}</Badge></div><h1 className="mt-5 text-4xl font-semibold tracking-tight text-white">{product.name}</h1><p className="mt-4 text-neutral-400">{product.longDescription}</p><div className="mt-5 flex items-center gap-3"><span className="text-3xl font-semibold text-white">{formatCurrency(product.price)}</span>{product.oldPrice ? <span className="text-lg text-neutral-500 line-through">{formatCurrency(product.oldPrice)}</span> : null}<span className="text-sm text-neutral-400">{product.rating} rating · {product.reviewCount} reviews</span></div><div className="mt-6 flex flex-wrap items-center gap-3"><QuantitySelector value={quantity} onChange={setQuantity} /><Button onClick={()=>addToCart(product.id, quantity)}><ShoppingCart className="h-4 w-4" />Add to cart</Button><Link to="/checkout"><Button variant="secondary" onClick={()=>addToCart(product.id, quantity)}>Buy now</Button></Link><Button variant="ghost">Save</Button></div><Card className="mt-6"><h2 className="mb-4 text-lg font-semibold text-white">Quick specs</h2><div className="grid gap-3 text-sm text-neutral-300 md:grid-cols-2"><p>Delivery: {product.deliveryType}</p><p>License: {product.license}</p><p>Support: {product.supportIncluded ? 'Included' : 'Not included'}</p><p>Last updated: {product.lastUpdated}</p><p>Setup: {product.setupTime}</p><p>Performance: {product.performanceRating}</p></div></Card></div></div><section className="mt-12 grid gap-6 lg:grid-cols-[1fr_360px]"><div className="grid gap-6"><Card><h2 className="text-xl font-semibold text-white">Overview</h2><p className="mt-3 text-sm leading-7 text-neutral-400">{product.longDescription}</p></Card><Card><h2 className="text-xl font-semibold text-white">Features</h2><ul className="mt-4 grid gap-2">{product.features.map((feature)=><li key={feature} className="flex gap-2 text-sm text-neutral-300"><Zap className="h-4 w-4 text-neutral-500" />{feature}</li>)}</ul></Card><Card><h2 className="text-xl font-semibold text-white">What's included</h2><ul className="mt-4 grid gap-2">{product.requirements.map((item)=><li key={item} className="rounded-2xl border border-white/10 p-3 text-sm text-neutral-300">{item}</li>)}</ul></Card><Card><h2 className="text-xl font-semibold text-white">Documentation / License / Support</h2><p className="mt-3 text-sm text-neutral-400">Read the setup docs, check changelog history, and contact support if your server setup needs extra help.</p><div className="mt-4 flex flex-wrap gap-3"><Link to={`/docs/${product.slug}`}><Button variant="secondary">Documentation</Button></Link><Link to={`/products/${product.slug}/changelog`}><Button variant="secondary">Changelog</Button></Link><Link to="/support"><Button variant="secondary">Support</Button></Link></div></Card></div><RequirementsChecker product={product} /></section><RelatedProducts products={related} /></div>;
}
