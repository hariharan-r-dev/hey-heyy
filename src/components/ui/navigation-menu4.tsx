import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { getAppUrl } from "@/utils/app-url";

const assetPathPrefix = "/assets";

type FeaturedItem = {
  title: string;
  description: string;
  href: string;
  tone: string;
  isExternal?: boolean;
};

type ToolItem = readonly [
  title: string,
  description: string,
  href: string,
  icon: string,
  isExternal?: boolean,
];

type MenuDefinition = {
  label: string;
  featuredLabel: string;
  toolsLabel: string;
  featured: readonly FeaturedItem[];
  tools: readonly ToolItem[];
};

export default function NavigationMenu4({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const menus: readonly MenuDefinition[] = [
    {
      label: "Product",
      featuredLabel: "Featured Models",
      toolsLabel: "Products & Tools",
      featured: [
        {
          title: "Product Overview",
          description: "Explore Zuntra’s four connected identity products.",
          href: "/product",
          tone: "bg-[#eaf6ff]",
        },
        {
          title: "Digital Business Cards",
          description: "Experience the live executive smart card with instant vCard save.",
          href: "/digital-business-cards",
          tone: "bg-[#ffb8e7]",
        },
        {
          title: "Summit Pass & Check-In",
          description: "Preview live attendee registration and door scanner.",
          href: getAppUrl("/event/apex-2026"),
          tone: "bg-[#f0fdb3]",
          isExternal: true,
        },
      ],
      tools: [
        ["Live B2B Card Demo", "Preview live executive smart card.", getAppUrl("/card/praneeth-sivala"), "b6887.svg", true],
        ["Showcase Card", "Preview live ultra-luxury architectural listing.", getAppUrl("/card/villa-bellagio"), "eac73.svg", true],
        ["Creator 3D Card", "Preview live 3D artist spatial portfolio.", getAppUrl("/card/julian-reed"), "b9f6f.svg", true],
        ["Staff Check-In Scanner", "Test mobile door check-in camera scanner.", getAppUrl("/checkin/apex-2026"), "b6887.svg", true],
        ["QR Business Cards", "Dynamic codes with custom branding and logos.", "/qr-business-cards", "eac73.svg", false],
        ["NFC Smart Cards", "Tap to share with physical cards and keyfobs.", "/nfc-business-cards", "b9f6f.svg", false],
        ["Email & Meeting Assets", "Generate matching virtual backgrounds and signatures.", "/email-signatures", "eac73.svg", false],
        ["Two-Way Lead CRM", "Automatically capture inbound contact details.", "/lead-capture", "b9f6f.svg", false],
        ["Scan & View Telemetry", "Audit views, scans, and vCard saves in real time.", "/analytics", "b6887.svg", false],
      ],
    },
    {
      label: "Solutions",
      featuredLabel: "Start here",
      toolsLabel: "Built for",
      featured: [
        {
          title: "Solutions Overview",
          description: "Find the right workflow for people, teams, and events.",
          href: "/solutions",
          tone: "bg-[#eaf6ff]",
        },
        {
          title: "For Individuals",
          description: "Make every introduction easy to remember and save.",
          href: "/individuals",
          tone: "bg-[#ffb8e7]",
        },
        {
          title: "For Teams",
          description: "Manage brand, people, cards, leads, and insights.",
          href: "/teams",
          tone: "bg-[#f0fdb3]",
        },
      ],
      tools: [
        ["For Enterprise", "Govern departments, roles, brands, and identities.", "/enterprise", "b9f6f.svg", false],
        ["For Sales Teams", "Capture and organize leads from every client meeting.", "/sales-teams", "eac73.svg", false],
        ["For Freelancers", "Professional presence for independent specialists.", "/freelancers", "b6887.svg", false],
        ["For Small Business", "Fast setup for local teams and practices.", "/small-business", "eac73.svg", false],
        ["Recruiters & Networking", "Accelerate candidate and partnership connections.", "/recruiters-and-networking", "b9f6f.svg", false],
        ["Admin Workspace Console", "Centralize user cards, billing, and permissions.", getAppUrl("/admin"), "b6887.svg", true],
      ],
    },
    {
      label: "Resources",
      featuredLabel: "Learn",
      toolsLabel: "Support & Company",
      featured: [
        {
          title: "Frequently Asked Questions",
          description: "Everything about NFC cards, privacy, and CRM sync.",
          href: "/faq",
          tone: "bg-[#eaf6ff]",
        },
        {
          title: "How It Works",
          description: "From setup to your first scan in under 3 minutes.",
          href: "/how-it-works",
          tone: "bg-[#eaf6ff]",
        },
        {
          title: "Pricing & Tiers",
          description: "Transparent pricing for individuals, teams, and summits.",
          href: "/pricing",
          tone: "bg-[#eaf6ff]",
        },
      ],
      tools: [
        ["Blog & Articles", "Read tactical playbooks and product release notes.", "/blog", "eac73.svg", false],
        ["About Zuntra", "Our company mission, values, and story.", "/about", "b6887.svg", false],
        ["Contact Support", "Reach our customer engineering team anytime.", "/contact", "b9f6f.svg", false],
        ["Book a Demo", "Personalized walkthrough with an identity specialist.", "/book-a-demo", "eac73.svg", false],
        ["Sign In to Dashboard", "Access your active workspaces and cards.", getAppUrl("/login"), "b6887.svg", true],
        ["Create Free Account", "Start building your digital business card now.", getAppUrl("/signup"), "b9f6f.svg", true],
      ],
    },
  ];

  return (
    <>
    <NavigationMenu className="product-navigation desktop-product-navigation">
      <NavigationMenuList className="flex items-center gap-1">
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.label}>
            <NavigationMenuTrigger className="product-trigger">
              {menu.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-4 sm:p-6 md:w-[720px] lg:w-[840px] bg-white rounded-3xl shadow-2xl border border-[#e5e7eb]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-5 space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#8e8e93] font-bold">
                    {menu.featuredLabel}
                  </span>
                  <div className="space-y-2.5">
                    {menu.featured.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noreferrer" : undefined}
                        onClick={onNavigate}
                        className={`block p-3.5 rounded-2xl ${item.tone} hover:opacity-90 transition-all border border-black/5 group`}
                      >
                        <div className="flex items-center justify-between">
                          <strong className="text-sm font-semibold text-[#12141b] block group-hover:translate-x-0.5 transition-transform">
                            {item.title}
                          </strong>
                          {item.isExternal && <span className="text-[11px] text-[#5f5f5f]">↗</span>}
                        </div>
                        <p className="text-xs text-[#515148] mt-1 leading-snug">
                          {item.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-7 space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#8e8e93] font-bold">
                    {menu.toolsLabel}
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {menu.tools.map(([title, description, href, icon, isExternal]) => (
                      <a
                        key={title}
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        onClick={onNavigate}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f7f8fa] transition-colors group"
                      >
                        <img
                          src={`${assetPathPrefix}/${icon}`}
                          alt=""
                          className="w-5 h-5 shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-semibold text-[#12141b] group-hover:text-[#005bc5] transition-colors">
                              {title}
                            </span>
                            {isExternal && <span className="text-[10px] text-[#8e8e93]">↗</span>}
                          </div>
                          <span className="text-[11px] text-[#67675e] block leading-tight truncate">
                            {description}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuLink
            className="header-menu-link"
            href="/how-it-works"
            onClick={onNavigate}
          >
            How It Works
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className="header-menu-link"
            href="/pricing"
            onClick={onNavigate}
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <div className="mobile-product-navigation" aria-label="Mobile navigation">
      <div className="mobile-nav-group">
        <button type="button" aria-expanded={mobileSection === 'product'} onClick={() => setMobileSection(mobileSection === 'product' ? null : 'product')}>Product</button>
        {mobileSection === 'product' && (
          <div className="mobile-nav-submenu">
            <a href="/product" onClick={onNavigate}>Product Overview</a>
            <a href="/digital-business-cards" onClick={onNavigate}>Digital Business Cards</a>
            <a href="/qr-business-cards" onClick={onNavigate}>QR Business Cards</a>
            <a href="/nfc-business-cards" onClick={onNavigate}>NFC Smart Cards</a>
            <a href="/email-signatures" onClick={onNavigate}>Email Signatures</a>
            <a href="/virtual-backgrounds" onClick={onNavigate}>Virtual Backgrounds</a>
            <a href="/lead-capture" onClick={onNavigate}>Lead Capture</a>
            <a href="/analytics" onClick={onNavigate}>Analytics</a>
          </div>
        )}
      </div>
      <div className="mobile-nav-group">
        <button type="button" aria-expanded={mobileSection === 'solutions'} onClick={() => setMobileSection(mobileSection === 'solutions' ? null : 'solutions')}>Solutions</button>
        {mobileSection === 'solutions' && (
          <div className="mobile-nav-submenu">
            <a href="/solutions" onClick={onNavigate}>Solutions Overview</a>
            <a href="/individuals" onClick={onNavigate}>For Individuals</a>
            <a href="/freelancers" onClick={onNavigate}>For Freelancers</a>
            <a href="/small-business" onClick={onNavigate}>For Small Business</a>
            <a href="/teams" onClick={onNavigate}>For Teams</a>
            <a href="/enterprise" onClick={onNavigate}>For Enterprise</a>
            <a href="/sales-teams" onClick={onNavigate}>For Sales Teams</a>
          </div>
        )}
      </div>
      <div className="mobile-nav-group">
        <button type="button" aria-expanded={mobileSection === 'resources'} onClick={() => setMobileSection(mobileSection === 'resources' ? null : 'resources')}>Resources</button>
        {mobileSection === 'resources' && (
          <div className="mobile-nav-submenu">
            <a href="/blog" onClick={onNavigate}>Blog & Articles</a>
            <a href="/faq" onClick={onNavigate}>Frequently Asked Questions</a>
            <a href="/contact" onClick={onNavigate}>Contact Support</a>
            <a href="/book-a-demo" onClick={onNavigate}>Book a Demo</a>
          </div>
        )}
      </div>
      <div className="mobile-nav-group">
        <button type="button" aria-expanded={mobileSection === 'company'} onClick={() => setMobileSection(mobileSection === 'company' ? null : 'company')}>Company</button>
        {mobileSection === 'company' && (
          <div className="mobile-nav-submenu">
            <a href="/about" onClick={onNavigate}>About Zuntra</a>
            <a href="/how-it-works" onClick={onNavigate}>How It Works</a>
            <a href="/careers" onClick={onNavigate}>Careers</a>
            <a href="/security" onClick={onNavigate}>Security</a>
            <a href="/privacy" onClick={onNavigate}>Privacy Policy</a>
            <a href="/terms" onClick={onNavigate}>Terms of Service</a>
          </div>
        )}
      </div>
      <a href="/pricing" onClick={onNavigate}>Pricing</a>
      <div className="mobile-nav-actions">
        <a className="mobile-nav-login" href={getAppUrl('/login')} onClick={onNavigate}>Log in</a>
        <a className="mobile-nav-cta" href={getAppUrl('/signup')} onClick={onNavigate}><span>Start free trial</span><span aria-hidden="true">&#8594;</span></a>
      </div>
    </div>
    </>
  );
}
