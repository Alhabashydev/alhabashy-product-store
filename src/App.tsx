import { Navigate, Route, Routes } from 'react-router-dom';
import { PageShell } from './components/layout/PageShell';
import { AccountPage } from './pages/AccountPage';
import { AdminPage } from './pages/AdminPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { DocsArticlePage } from './pages/DocsArticlePage';
import { DocsPage } from './pages/DocsPage';
import { HomePage } from './pages/HomePage';
import { ProductChangelogPage } from './pages/ProductChangelogPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ProductsPage } from './pages/ProductsPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { SupportPage } from './pages/SupportPage';

export default function App() {
  return <Routes><Route element={<PageShell />}><Route path="/" element={<HomePage />} /><Route path="/products" element={<ProductsPage />} /><Route path="/products/:slug" element={<ProductDetailsPage />} /><Route path="/products/:slug/changelog" element={<ProductChangelogPage />} /><Route path="/cart" element={<CartPage />} /><Route path="/checkout" element={<CheckoutPage />} /><Route path="/docs" element={<DocsPage />} /><Route path="/docs/:slug" element={<DocsArticlePage />} /><Route path="/changelog" element={<ChangelogPage />} /><Route path="/support" element={<SupportPage />} /><Route path="/account" element={<AccountPage />} /><Route path="/roadmap" element={<RoadmapPage />} /><Route path="/admin" element={<AdminPage />} /><Route path="*" element={<Navigate to="/" replace />} /></Route></Routes>;
}
