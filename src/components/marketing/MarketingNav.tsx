import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  CreditCard,
  QrCode,
  Wifi,
  Mail,
  Users,
  BarChart3,
  Building2,
  Briefcase,
  HelpCircle,
  BookOpen,
  FileText,
  Shield,
  Video,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../lib/auth';
import { BrandWordmark } from './BrandWordmark';

export const MarketingNav: React.FC = () => {
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
      if (!(e.target instanceof Element) || !navRef.current?.contains(e.target)) return;
      const anchor = e.target.closest<HTMLAnchorElement>('a[href]');
      const href = anchor?.getAttribute('href');
      if (href?.startsWith('/') && !href.startsWith('//')) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const primaryCtaHref = user ? '/admin' : '/signup';
  const primaryCtaText = user ? 'Open Workspace' : 'Create Your Card →';

  return (
    <header className="marketing-nav-shell border-b border-hairline bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-colors font-sans" ref={navRef}>
      <div className="marketing-nav-inner max-w-7xl mx-auto w-full px-6 lg:px-12 py-3.5 flex items-center justify-between">
        {/* Brand Lockup */}
        <div className="flex items-center gap-8">
          <a href="/" className="marketing-wordmark group" aria-label="Heyheyy home">
            <BrandWordmark />
          </a>

          {/* Desktop Navigation */}
          <nav className="marketing-nav-links hidden lg:flex items-center gap-1 text-sm font-medium text-slate">
            {/* 1. Product Mega Menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'product' ? null : 'product')}
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-full hover:text-ink hover:bg-surface transition-colors cursor-pointer ${activeDropdown === 'product' ? 'text-ink bg-surface font-semibold' : ''}`}
                aria-expanded={activeDropdown === 'product'}
              >
                <span>Product</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'product' && (
                <div className="marketing-nav-popover absolute top-full left-0 mt-2 w-[560px] p-6 bg-white border border-hairline rounded-[24px] shadow-xl grid grid-cols-2 gap-6 animate-fade-in z-50">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-steel">Create & Share</span>
                    <ul className="space-y-2">
                      <li>
                        <a href="/digital-business-cards" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface transition-colors">
                          <CreditCard size={18} className="text-brand-blue shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-ink">Digital Business Cards</div>
                            <div className="text-[11px] text-slate">Core profiles with 1-tap save</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/qr-business-cards" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface transition-colors">
                          <QrCode size={18} className="text-brand-blue shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-ink">QR Code Cards</div>
                            <div className="text-[11px] text-slate">High-contrast camera-ready QRs</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/nfc-business-cards" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface transition-colors">
                          <Wifi size={18} className="text-brand-blue shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-ink">NFC Cards</div>
                            <div className="text-[11px] text-slate">Hardware tap-to-share cards</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/studio" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface transition-colors">
                          <Sparkles size={18} className="text-brand-blue shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-ink">Design Studio</div>
                            <div className="text-[11px] text-slate">20+ native visual templates</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4 border-l border-hairline pl-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-steel">Connect & Manage</span>
                    <ul className="space-y-2">
                      <li>
                        <a href="/lead-capture" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface transition-colors">
                          <Users size={18} className="text-brand-blue shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-ink">Lead Capture</div>
                            <div className="text-[11px] text-slate">Two-way contact exchange</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/email-signatures" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface transition-colors">
                          <Mail size={18} className="text-brand-blue shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-ink">Email Signatures</div>
                            <div className="text-[11px] text-slate">Branded signatures with QR code</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/virtual-backgrounds" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface transition-colors">
                          <Video size={18} className="text-brand-blue shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-ink">Virtual Backgrounds</div>
                            <div className="text-[11px] text-slate">Zoom & Teams wallpaper with QR</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/analytics" className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-surface transition-colors">
                          <BarChart3 size={18} className="text-brand-blue shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-bold text-ink">Analytics</div>
                            <div className="text-[11px] text-slate">Scans, views & attribution</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div className="pt-2 border-t border-hairline">
                      <a href="/product" className="text-xs font-bold text-brand-blue hover:underline inline-flex items-center gap-1">
                        <span>All Products Overview</span>
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Solutions Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-full hover:text-ink hover:bg-surface transition-colors cursor-pointer ${activeDropdown === 'solutions' ? 'text-ink bg-surface font-semibold' : ''}`}
                aria-expanded={activeDropdown === 'solutions'}
              >
                <span>Solutions</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="marketing-nav-popover absolute top-full left-0 mt-2 w-72 p-4 bg-white border border-hairline rounded-[24px] shadow-xl space-y-1 animate-fade-in z-50">
                  <span className="block px-3 py-1 text-[10px] font-mono uppercase tracking-wider font-bold text-steel">By Audience</span>
                  <a href="/individuals" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-surface text-xs font-semibold text-ink transition-colors">
                    <Users size={16} className="text-brand-blue" />
                    <span>For Individuals</span>
                  </a>
                  <a href="/freelancers" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-surface text-xs font-semibold text-ink transition-colors">
                    <Briefcase size={16} className="text-brand-blue" />
                    <span>For Freelancers</span>
                  </a>
                  <a href="/teams" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-surface text-xs font-semibold text-ink transition-colors">
                    <Building2 size={16} className="text-brand-blue" />
                    <span>For Teams & Small Business</span>
                  </a>
                  <a href="/enterprise" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-surface text-xs font-semibold text-ink transition-colors">
                    <Shield size={16} className="text-brand-blue" />
                    <span>For Enterprise</span>
                  </a>
                  <a href="/sales-teams" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-surface text-xs font-semibold text-ink transition-colors">
                    <BarChart3 size={16} className="text-brand-blue" />
                    <span>For Sales Teams</span>
                  </a>
                  <div className="pt-2 border-t border-hairline px-3">
                    <a href="/solutions" className="text-xs font-bold text-brand-blue hover:underline inline-flex items-center gap-1">
                      <span>Explore all solutions</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Direct Links */}
            <a href="/how-it-works" className="px-3 py-2 rounded-full hover:text-ink hover:bg-surface transition-colors">
              How It Works
            </a>
            <a href="/pricing" className="px-3 py-2 rounded-full hover:text-ink hover:bg-surface transition-colors">
              Pricing
            </a>

            {/* 4. Resources Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-full hover:text-ink hover:bg-surface transition-colors cursor-pointer ${activeDropdown === 'resources' ? 'text-ink bg-surface font-semibold' : ''}`}
                aria-expanded={activeDropdown === 'resources'}
              >
                <span>Resources</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'resources' && (
                <div className="marketing-nav-popover absolute top-full left-0 mt-2 w-64 p-4 bg-white border border-hairline rounded-[24px] shadow-xl space-y-1 animate-fade-in z-50">
                  <a href="/blog" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-surface text-xs font-semibold text-ink transition-colors">
                    <BookOpen size={16} className="text-brand-blue" />
                    <span>Blog & Insights</span>
                  </a>
                  <a href="/guides" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-surface text-xs font-semibold text-ink transition-colors">
                    <FileText size={16} className="text-brand-blue" />
                    <span>Guides & Best Practices</span>
                  </a>
                  <a href="/help" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-surface text-xs font-semibold text-ink transition-colors">
                    <HelpCircle size={16} className="text-brand-blue" />
                    <span>Help Center</span>
                  </a>
                  <a href="/faq" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-surface text-xs font-semibold text-ink transition-colors">
                    <HelpCircle size={16} className="text-brand-blue" />
                    <span>Frequently Asked Questions</span>
                  </a>
                  <a href="/contact" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-surface text-xs font-semibold text-ink transition-colors">
                    <Mail size={16} className="text-brand-blue" />
                    <span>Contact Support</span>
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="marketing-nav-actions flex items-center gap-3">
          <a
            href="/contact-us"
            className="hidden sm:inline-flex text-xs font-semibold text-slate hover:text-ink transition-colors px-3 py-2"
          >
            Book a Demo
          </a>

          {!user && (
            <a
              href="/login"
              className="marketing-login-link px-3 py-2 text-xs font-semibold text-ink hover:text-brand-blue transition-colors cursor-pointer"
            >
              Log In
            </a>
          )}

          <a
            href={primaryCtaHref}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-ink hover:bg-charcoal rounded-full transition-all shadow-xs cursor-pointer"
          >
            <span>{primaryCtaText}</span>
          </a>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-ink hover:bg-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="marketing-mobile-menu lg:hidden border-t border-hairline bg-white px-6 py-6 space-y-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-steel">Products</span>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-ink">
              <a href="/digital-business-cards" className="p-2 rounded-lg bg-surface">Digital Cards</a>
              <a href="/qr-business-cards" className="p-2 rounded-lg bg-surface">QR Code Cards</a>
              <a href="/nfc-business-cards" className="p-2 rounded-lg bg-surface">NFC Smart Cards</a>
              <a href="/email-signatures" className="p-2 rounded-lg bg-surface">Signatures</a>
              <a href="/virtual-backgrounds" className="p-2 rounded-lg bg-surface">Virtual Backgrounds</a>
              <a href="/studio" className="p-2 rounded-lg bg-surface">Design Studio</a>
              <a href="/lead-capture" className="p-2 rounded-lg bg-surface">Lead Capture</a>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-steel">Solutions</span>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-ink">
              <a href="/individuals" className="p-2 rounded-lg bg-surface">Individuals</a>
              <a href="/freelancers" className="p-2 rounded-lg bg-surface">Freelancers</a>
              <a href="/teams" className="p-2 rounded-lg bg-surface">Teams & Small Business</a>
              <a href="/enterprise" className="p-2 rounded-lg bg-surface">Enterprise</a>
            </div>
          </div>

          <div className="pt-2 border-t border-hairline flex flex-col gap-3">
            <a href="/how-it-works" className="text-sm font-semibold text-ink">How It Works</a>
            <a href="/pricing" className="text-sm font-semibold text-ink">Pricing</a>
            <a href="/faq" className="text-sm font-semibold text-ink">FAQs</a>
            <a href="/contact-us" className="text-sm font-semibold text-ink">Book a Demo</a>
            {!user && <a href="/login" className="text-sm font-semibold text-brand-blue">Log In</a>}
          </div>
        </div>
      )}
    </header>
  );
};
