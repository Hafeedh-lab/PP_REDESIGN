import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import ProductSelectorModal from './components/ProductSelectorModal';
import HomePage from './pages/HomePage';
import { ProductSelectorProvider } from './contexts/ProductSelectorContext';

const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Traction = lazy(() => import('./pages/Traction'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-teal/30 border-t-teal rounded-full animate-spin" aria-label="Loading" />
    </div>
  );
}

export default function App() {
  return (
    <ProductSelectorProvider>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-white focus:text-ink focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <Navigation />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/traction" element={<Traction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          {/* Legacy redirects */}
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/tax-services" element={<Navigate to="/" replace />} />
          <Route path="/bookkeeping-services" element={<Navigate to="/" replace />} />
          <Route path="/inventory-management" element={<Navigate to="/" replace />} />
          <Route path="/careers" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppFloat />
      <ProductSelectorModal />
    </ProductSelectorProvider>
  );
}
