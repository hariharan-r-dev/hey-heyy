import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AuthProvider } from './lib/auth';
import { getAppUrl } from './utils/app-url';

// Core Landing & Overview Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Product Pages
const DigitalBusinessCardsPage = lazy(() => import('./pages/product/DigitalBusinessCardsPage'));
const QrBusinessCardsPage = lazy(() => import('./pages/product/QrBusinessCardsPage'));
const NfcBusinessCardsPage = lazy(() => import('./pages/product/NfcBusinessCardsPage'));
const EmailSignaturesPage = lazy(() => import('./pages/product/EmailSignaturesPage'));
const VirtualBackgroundsPage = lazy(() => import('./pages/product/VirtualBackgroundsPage'));
const DigitalWalletPage = lazy(() => import('./pages/product/DigitalWalletPage'));
const ContactManagementPage = lazy(() => import('./pages/product/ContactManagementPage'));
const LeadCapturePage = lazy(() => import('./pages/product/LeadCapturePage'));
const AnalyticsPage = lazy(() => import('./pages/product/AnalyticsPage'));

// Solutions Pages
const IndividualsPage = lazy(() => import('./pages/solutions/IndividualsPage'));
const FreelancersPage = lazy(() => import('./pages/solutions/FreelancersPage'));
const SmallBusinessPage = lazy(() => import('./pages/solutions/SmallBusinessPage'));
const TeamsPage = lazy(() => import('./pages/solutions/TeamsPage'));
const EnterprisePage = lazy(() => import('./pages/solutions/EnterprisePage'));
const SalesTeamsPage = lazy(() => import('./pages/solutions/SalesTeamsPage'));
const RecruitersPage = lazy(() => import('./pages/solutions/RecruitersPage'));

// Company & Resource Pages
const HowItWorksPage = lazy(() => import('./pages/company/HowItWorksPage'));
const FaqPage = lazy(() => import('./pages/company/FaqPage'));
const CareersPage = lazy(() => import('./pages/company/CareersPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/company/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/company/TermsOfServicePage'));
const SecurityPage = lazy(() => import('./pages/company/SecurityPage'));
const BookDemoPage = lazy(() => import('./pages/company/BookDemoPage'));

const APP_ROUTES = new Set([
  'admin',
  'login',
  'signup',
  'studio',
  'design-studio',
  'reset-password',
  'recover-data',
  'card',
  'p',
  'event',
  'checkin',
]);

const MarketingRouter: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    const handleLinkClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (!(e.target instanceof Element)) return;
      const target = e.target.closest<HTMLAnchorElement>('a[href]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href.startsWith('//') || target.target.toLowerCase() === '_blank' || target.hasAttribute('download')) return;

      // Check if this is an app route
      const cleanHref = href.startsWith('/') ? href.slice(1) : href;
      const firstSegment = cleanHref.split('/')[0];
      if (APP_ROUTES.has(firstSegment)) {
        const appUrl = getAppUrl(href);
        if (appUrl !== href) {
          e.preventDefault();
          window.location.href = appUrl;
          return;
        }
        return;
      }

      if (!href.startsWith('/')) return;
      const destination = new URL(href, window.location.origin);
      if (destination.origin !== window.location.origin) return;

      e.preventDefault();
      const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (currentUrl !== href) {
        window.history.pushState({}, '', href);
      }
      setCurrentPath(destination.pathname);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleLinkClick);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  try { decodeURIComponent(currentPath); } catch {
    return (
      <main className="max-w-lg mx-auto p-8 space-y-4">
        <h1 className="text-2xl font-bold">Invalid link</h1>
        <p className="text-slate">This link contains invalid characters.</p>
        <a href="/" className="text-brand-blue font-semibold hover:underline">Return home</a>
      </main>
    );
  }

  if (currentPath === '/') return <HomePage />;

  const slug = (currentPath.startsWith('/') ? currentPath.slice(1) : currentPath).toLowerCase();

  // Core Pages
  if (slug === 'pricing') return <PricingPage />;
  if (slug === 'product') return <ProductPage />;
  if (slug === 'solutions') return <SolutionsPage />;
  if (slug === 'blog') return <BlogPage />;
  if (slug === 'about' || slug === 'about-us' || slug === 'company') return <AboutPage />;
  if (slug === 'contact' || slug === 'contact-us' || slug === 'contact-support') return <ContactPage />;

  // Product Feature Pages
  if (slug === 'digital-business-cards') return <DigitalBusinessCardsPage />;
  if (slug === 'qr-business-cards') return <QrBusinessCardsPage />;
  if (slug === 'nfc-business-cards') return <NfcBusinessCardsPage />;
  if (slug === 'email-signatures') return <EmailSignaturesPage />;
  if (slug === 'virtual-backgrounds') return <VirtualBackgroundsPage />;
  if (slug === 'digital-wallet' || slug === 'wallet') return <DigitalWalletPage />;
  if (slug === 'contact-management') return <ContactManagementPage />;
  if (slug === 'lead-capture') return <LeadCapturePage />;
  if (slug === 'analytics') return <AnalyticsPage />;

  // Solutions Pages
  if (slug === 'individuals' || slug === 'for-individuals') return <IndividualsPage />;
  if (slug === 'freelancers' || slug === 'for-freelancers') return <FreelancersPage />;
  if (slug === 'small-business' || slug === 'for-small-businesses') return <SmallBusinessPage />;
  if (slug === 'teams' || slug === 'for-teams' || slug === 'business') return <TeamsPage />;
  if (slug === 'enterprise' || slug === 'for-enterprise' || slug === 'for-enterprises') return <EnterprisePage />;
  if (slug === 'sales-teams') return <SalesTeamsPage />;
  if (slug === 'recruiters-and-networking') return <RecruitersPage />;

  // Company & Resources Pages
  if (slug === 'how-it-works') return <HowItWorksPage />;
  if (slug === 'faq' || slug === 'faqs' || slug === 'help' || slug === 'help-center' || slug === 'guides' || slug === 'resources') return <FaqPage />;
  if (slug === 'careers') return <CareersPage />;
  if (slug === 'privacy') return <PrivacyPolicyPage />;
  if (slug === 'terms') return <TermsOfServicePage />;
  if (slug === 'security') return <SecurityPage />;
  if (slug === 'book-a-demo' || slug === 'demo') return <BookDemoPage />;

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-surface font-sans">
      <section className="bg-white border border-hairline p-8 rounded-2xl shadow-sm max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-ink">Page Not Found</h1>
        <p className="text-slate text-sm">We couldn't find the page you're looking for. Check the URL or return home.</p>
        <a className="inline-block px-5 py-2.5 rounded-full bg-ink text-white text-xs font-semibold hover:bg-charcoal transition-colors" href="/">
          Return Home
        </a>
      </section>
    </main>
  );
};

export function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<main className="min-h-screen flex items-center justify-center bg-surface font-sans"><p className="text-slate text-sm font-medium">Opening Zuntra…</p></main>}>
        <MarketingRouter />
      </Suspense>
    </AuthProvider>
  );
}
export default App;
