import React from 'react';
import { BrandWordmark } from './BrandWordmark';

export const MarketingFooter: React.FC = () => {
  return (
    <footer className="marketing-footer-shell border-t border-charcoal bg-ink text-white py-16 px-6 lg:px-12 text-sm font-sans">
      <div className="marketing-footer-grid max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
        {/* Col 1: Product */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs tracking-wider uppercase font-mono">Product</h4>
          <ul className="space-y-2.5 text-xs text-muted">
            <li><a href="/product" className="hover:text-white transition-colors">Product Overview</a></li>
            <li><a href="/digital-business-cards" className="hover:text-white transition-colors">Digital Business Cards</a></li>
            <li><a href="/qr-business-cards" className="hover:text-white transition-colors">QR Code Cards</a></li>
            <li><a href="/nfc-business-cards" className="hover:text-white transition-colors">NFC Smart Cards</a></li>
            <li><a href="/email-signatures" className="hover:text-white transition-colors">Email Signatures</a></li>
            <li><a href="/virtual-backgrounds" className="hover:text-white transition-colors">Virtual Backgrounds</a></li>
            <li><a href="/digital-wallet" className="hover:text-white transition-colors">Digital Wallet Cards</a></li>
            <li><a href="/contact-management" className="hover:text-white transition-colors">Contact Management</a></li>
            <li><a href="/lead-capture" className="hover:text-white transition-colors">Lead Capture CRM</a></li>
            <li><a href="/analytics" className="hover:text-white transition-colors">Scan & View Analytics</a></li>
          </ul>
        </div>

        {/* Col 2: Solutions */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs tracking-wider uppercase font-mono">Solutions</h4>
          <ul className="space-y-2.5 text-xs text-muted">
            <li><a href="/solutions" className="hover:text-white transition-colors">Solutions Overview</a></li>
            <li><a href="/individuals" className="hover:text-white transition-colors">For Individuals</a></li>
            <li><a href="/freelancers" className="hover:text-white transition-colors">For Freelancers</a></li>
            <li><a href="/small-business" className="hover:text-white transition-colors">For Small Business</a></li>
            <li><a href="/teams" className="hover:text-white transition-colors">For Teams</a></li>
            <li><a href="/enterprise" className="hover:text-white transition-colors">For Enterprise</a></li>
            <li><a href="/sales-teams" className="hover:text-white transition-colors">For Sales Teams</a></li>
            <li><a href="/recruiters-and-networking" className="hover:text-white transition-colors">Recruiters & Networking</a></li>
          </ul>
        </div>

        {/* Col 3: Platform */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs tracking-wider uppercase font-mono">Platform</h4>
          <ul className="space-y-2.5 text-xs text-muted">
            <li><a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            <li><a href="/pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
            <li><a href="/design-studio" className="hover:text-white transition-colors">Card Template Studio</a></li>
            <li><a href="/admin" className="hover:text-white transition-colors">Workspace Admin</a></li>
            <li><a href="/login" className="hover:text-white transition-colors">Sign In to Dashboard</a></li>
            <li><a href="/signup" className="hover:text-white transition-colors">Create Free Account</a></li>
          </ul>
        </div>

        {/* Col 4: Resources */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs tracking-wider uppercase font-mono">Resources</h4>
          <ul className="space-y-2.5 text-xs text-muted">
            <li><a href="/resources" className="hover:text-white transition-colors">Resources Hub</a></li>
            <li><a href="/blog" className="hover:text-white transition-colors">Blog & Stories</a></li>
            <li><a href="/guides" className="hover:text-white transition-colors">Guides & Tutorials</a></li>
            <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact Support</a></li>
          </ul>
        </div>

        {/* Col 5: Company & Legal */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-xs tracking-wider uppercase font-mono">Company</h4>
          <ul className="space-y-2.5 text-xs text-muted">
            <li><a href="/company" className="hover:text-white transition-colors">Company Overview</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">About Zuntra</a></li>
            <li><a href="/contact-us" className="hover:text-white transition-colors">Book a Demo</a></li>
            <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="/security" className="hover:text-white transition-colors">Security Architecture</a></li>
          </ul>
        </div>
      </div>

      {/* Infrastructure & Legal Bar */}
      <div className="marketing-footer-bottom max-w-7xl mx-auto pt-8 border-t border-charcoal flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-steel">
        <div className="flex items-center gap-3">
          <BrandWordmark className="zuntra-wordmark-light" />
          <p>© {new Date().getFullYear()} Zuntra Cards. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1ba673] animate-pulse" />
            <span className="text-white text-xs font-medium">All Systems Operational</span>
          </div>
          <span>•</span>
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          <span>•</span>
          <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          <span>•</span>
          <a href="/security" className="hover:text-white transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
};
