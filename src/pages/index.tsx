import type { FC, ComponentType } from "react";
export { PageLayout } from "./PageLayout";
export type { PageLayoutProps } from "./PageLayout";

import ProductOverviewPage from "./product/product-overview";
import DigitalBusinessCardsPage from "./product/digital-business-cards";
import QrCodeCardsPage from "./product/qr-code-cards";
import NfcSmartCardsPage from "./product/nfc-smart-cards";
import EmailSignaturesPage from "./product/email-signatures";
import VirtualBackgroundsPage from "./product/virtual-backgrounds";
import DigitalWalletCardsPage from "./product/digital-wallet-cards";
import ContactManagementPage from "./product/contact-management";
import LeadCaptureCrmPage from "./product/lead-capture-crm";
import ScanAnalyticsPage from "./product/scan-analytics";
import SolutionsOverviewPage from "./solutions/solutions-overview";
import ForIndividualsPage from "./solutions/for-individuals";
import ForFreelancersPage from "./solutions/for-freelancers";
import ForSmallBusinessPage from "./solutions/for-small-business";
import ForTeamsPage from "./solutions/for-teams";
import ForEnterprisePage from "./solutions/for-enterprise";
import ForSalesTeamsPage from "./solutions/for-sales-teams";
import RecruitersNetworkingPage from "./solutions/recruiters-networking";
import HowItWorksPage from "./platform/how-it-works";
import PricingPlansPage from "./platform/pricing-plans";
import CardTemplateStudioPage from "./platform/card-template-studio";
import WorkspaceAdminPage from "./platform/workspace-admin";
import SignInPage from "./platform/sign-in";
import CreateAccountPage from "./platform/create-account";
import ResourcesHubPage from "./resources/resources-hub";
import BlogStoriesPage from "./resources/blog-stories";
import GuidesTutorialsPage from "./resources/guides-tutorials";
import HelpCenterPage from "./resources/help-center";
import FaqPage from "./resources/faq";
import ContactSupportPage from "./resources/contact-support";
import CompanyOverviewPage from "./company/company-overview";
import AboutZuntraPage from "./company/about-zuntra";
import BookDemoPage from "./company/book-demo";
import Careers from "./company/careers";
import PrivacyPolicyPage from "./company/privacy-policy";
import TermsOfServicePage from "./company/terms-of-service";
import SecurityArchitecturePage from "./company/security-architecture";

export interface PageMetadata {
  slug: string;
  title: string;
  category: "Product" | "Solutions" | "Platform" | "Resources" | "Company";
  component: ComponentType<{ onBack?: () => void; onNavigate?: (slug: string) => void }>;
}

export const FOOTER_PAGES_REGISTRY: Record<string, PageMetadata> = {
  "product-overview": {
    slug: "product-overview",
    title: "Product Overview",
    category: "Product",
    component: ProductOverviewPage,
  },
  "digital-business-cards": {
    slug: "digital-business-cards",
    title: "Digital Business Cards",
    category: "Product",
    component: DigitalBusinessCardsPage,
  },
  "qr-code-cards": {
    slug: "qr-code-cards",
    title: "QR Code Cards",
    category: "Product",
    component: QrCodeCardsPage,
  },
  "nfc-smart-cards": {
    slug: "nfc-smart-cards",
    title: "NFC Smart Cards",
    category: "Product",
    component: NfcSmartCardsPage,
  },
  "email-signatures": {
    slug: "email-signatures",
    title: "Email Signatures",
    category: "Product",
    component: EmailSignaturesPage,
  },
  "virtual-backgrounds": {
    slug: "virtual-backgrounds",
    title: "Virtual Backgrounds",
    category: "Product",
    component: VirtualBackgroundsPage,
  },
  "digital-wallet-cards": {
    slug: "digital-wallet-cards",
    title: "Digital Wallet Cards",
    category: "Product",
    component: DigitalWalletCardsPage,
  },
  "contact-management": {
    slug: "contact-management",
    title: "Contact Management",
    category: "Product",
    component: ContactManagementPage,
  },
  "lead-capture-crm": {
    slug: "lead-capture-crm",
    title: "Lead Capture CRM",
    category: "Product",
    component: LeadCaptureCrmPage,
  },
  "scan-analytics": {
    slug: "scan-analytics",
    title: "Scan & View Analytics",
    category: "Product",
    component: ScanAnalyticsPage,
  },
  "solutions-overview": {
    slug: "solutions-overview",
    title: "Solutions Overview",
    category: "Solutions",
    component: SolutionsOverviewPage,
  },
  "for-individuals": {
    slug: "for-individuals",
    title: "For Individuals",
    category: "Solutions",
    component: ForIndividualsPage,
  },
  "for-freelancers": {
    slug: "for-freelancers",
    title: "For Freelancers",
    category: "Solutions",
    component: ForFreelancersPage,
  },
  "for-small-business": {
    slug: "for-small-business",
    title: "For Small Business",
    category: "Solutions",
    component: ForSmallBusinessPage,
  },
  "for-teams": {
    slug: "for-teams",
    title: "For Teams",
    category: "Solutions",
    component: ForTeamsPage,
  },
  "for-enterprise": {
    slug: "for-enterprise",
    title: "For Enterprise",
    category: "Solutions",
    component: ForEnterprisePage,
  },
  "for-sales-teams": {
    slug: "for-sales-teams",
    title: "For Sales Teams",
    category: "Solutions",
    component: ForSalesTeamsPage,
  },
  "recruiters-networking": {
    slug: "recruiters-networking",
    title: "Recruiters & Networking",
    category: "Solutions",
    component: RecruitersNetworkingPage,
  },
  "how-it-works": {
    slug: "how-it-works",
    title: "How It Works",
    category: "Platform",
    component: HowItWorksPage,
  },
  "pricing-plans": {
    slug: "pricing-plans",
    title: "Pricing Plans",
    category: "Platform",
    component: PricingPlansPage,
  },
  "card-template-studio": {
    slug: "card-template-studio",
    title: "Card Template Studio",
    category: "Platform",
    component: CardTemplateStudioPage,
  },
  "workspace-admin": {
    slug: "workspace-admin",
    title: "Workspace Admin",
    category: "Platform",
    component: WorkspaceAdminPage,
  },
  "sign-in": {
    slug: "sign-in",
    title: "Sign In to Dashboard",
    category: "Platform",
    component: SignInPage,
  },
  "create-account": {
    slug: "create-account",
    title: "Create Free Account",
    category: "Platform",
    component: CreateAccountPage,
  },
  "resources-hub": {
    slug: "resources-hub",
    title: "Resources Hub",
    category: "Resources",
    component: ResourcesHubPage,
  },
  "blog-stories": {
    slug: "blog-stories",
    title: "Blog & Stories",
    category: "Resources",
    component: BlogStoriesPage,
  },
  "guides-tutorials": {
    slug: "guides-tutorials",
    title: "Guides & Tutorials",
    category: "Resources",
    component: GuidesTutorialsPage,
  },
  "help-center": {
    slug: "help-center",
    title: "Help Center",
    category: "Resources",
    component: HelpCenterPage,
  },
  "faq": {
    slug: "faq",
    title: "Frequently Asked Questions",
    category: "Resources",
    component: FaqPage,
  },
  "contact-support": {
    slug: "contact-support",
    title: "Contact Support",
    category: "Resources",
    component: ContactSupportPage,
  },
  "company-overview": {
    slug: "company-overview",
    title: "Company Overview",
    category: "Company",
    component: CompanyOverviewPage,
  },
  "about-zuntra": {
    slug: "about-zuntra",
    title: "About Zuntra",
    category: "Company",
    component: AboutZuntraPage,
  },
  "book-demo": {
    slug: "book-demo",
    title: "Book a Demo",
    category: "Company",
    component: BookDemoPage,
  },
  "careers": {
    slug: "careers",
    title: "Careers",
    category: "Company",
    component: Careers,
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    category: "Company",
    component: PrivacyPolicyPage,
  },
  "terms-of-service": {
    slug: "terms-of-service",
    title: "Terms of Service",
    category: "Company",
    component: TermsOfServicePage,
  },
  "security-architecture": {
    slug: "security-architecture",
    title: "Security Architecture",
    category: "Company",
    component: SecurityArchitecturePage,
  },
};

/**
 * Normalized helper to look up a page by title or slug
 */
export function getFooterPage(identifier: string): PageMetadata | undefined {
  if (!identifier) return undefined;
  const normalized = identifier.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (FOOTER_PAGES_REGISTRY[normalized]) {
    return FOOTER_PAGES_REGISTRY[normalized];
  }
  // Try matching by exact title
  const match = Object.values(FOOTER_PAGES_REGISTRY).find(
    p => p.title.toLowerCase() === identifier.toLowerCase()
  );
  return match;
}

/**
 * All 37 footer pages by category
 */
export const FOOTER_PAGES_BY_CATEGORY = {
  Product: [
    "product-overview",
    "digital-business-cards",
    "qr-code-cards",
    "nfc-smart-cards",
    "email-signatures",
    "virtual-backgrounds",
    "digital-wallet-cards",
    "contact-management",
    "lead-capture-crm",
    "scan-analytics",
  ],
  Solutions: [
    "solutions-overview",
    "for-individuals",
    "for-freelancers",
    "for-small-business",
    "for-teams",
    "for-enterprise",
    "for-sales-teams",
    "recruiters-networking",
  ],
  Platform: [
    "how-it-works",
    "pricing-plans",
    "card-template-studio",
    "workspace-admin",
    "sign-in",
    "create-account",
  ],
  Resources: [
    "resources-hub",
    "blog-stories",
    "guides-tutorials",
    "help-center",
    "faq",
    "contact-support",
  ],
  Company: [
    "company-overview",
    "about-zuntra",
    "book-demo",
    "careers",
    "privacy-policy",
    "terms-of-service",
    "security-architecture",
  ],
};

/**
 * Dedicated Page Viewer component that can be used directly anywhere
 */
export const FooterPageView: FC<{
  pageSlug: string;
  onBack: () => void;
  onNavigate?: (slug: string) => void;
}> = ({ pageSlug, onBack, onNavigate }) => {
  const page = getFooterPage(pageSlug);
  if (!page) {
    return (
      <div className="min-h-screen bg-[#0d0f15] text-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-[#8e95a8] mb-8">The requested page "{pageSlug}" does not exist.</p>
        <button
          onClick={onBack}
          className="px-6 py-2.5 rounded-full bg-[#8ef087] text-[#0d0f15] font-semibold text-sm cursor-pointer"
        >
          Return to Home
        </button>
      </div>
    );
  }

  const Component = page.component;
  return <Component onBack={onBack} onNavigate={onNavigate} />;
};
