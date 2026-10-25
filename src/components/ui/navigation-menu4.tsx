import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const assetPathPrefix = "/assets";
const APP_URL = (import.meta as any).env?.VITE_APP_URL || "http://localhost:5180";

type FeaturedItem = {
  eyebrow: string;
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

const menus: readonly MenuDefinition[] = [
  {
    label: "Product",
    featuredLabel: "Featured Models",
    toolsLabel: "Live Demos & Tools",
    featured: [
      {
        eyebrow: "Platform",
        title: "Product Overview",
        description: "Explore Zuntra’s four connected identity products.",
        href: "#page=product-overview",
        tone: "bg-[#eaf6ff]",
      },
      {
        eyebrow: "Corporate B2B",
        title: "Digital Business Cards",
        description: "Experience the live executive smart card with instant vCard save.",
        href: `${APP_URL}/card/praneeth-sivala`,
        tone: "bg-[#ffb8e7]",
        isExternal: true,
      },
      {
        eyebrow: "Event Passes",
        title: "Summit Pass & Check-In",
        description: "Preview live attendee registration and door scanner.",
        href: `${APP_URL}/event/apex-2026`,
        tone: "bg-[#f0fdb3]",
        isExternal: true,
      },
    ],
    tools: [
      ["Showcase Card", "Preview live ultra-luxury architectural listing.", `${APP_URL}/card/villa-bellagio`, "eac73.svg", true],
      ["Creator 3D Card", "Preview live 3D artist spatial portfolio.", `${APP_URL}/card/julian-reed`, "b9f6f.svg", true],
      ["Staff Check-In Scanner", "Test mobile door check-in camera scanner.", `${APP_URL}/checkin/apex-2026`, "b6887.svg", true],
      ["Two-Way Lead CRM", "Automatically capture inbound contact details.", `${APP_URL}/admin`, "eac73.svg", true],
      ["Email & Meeting Assets", "Generate matching virtual backgrounds and signatures.", `${APP_URL}/admin`, "b9f6f.svg", true],
      ["Scan & View Telemetry", "Audit views, scans, and vCard saves in real time.", `${APP_URL}/admin`, "b6887.svg", true],
    ],
  },
  {
    label: "Solutions",
    featuredLabel: "Start here",
    toolsLabel: "Built for",
    featured: [
      {
        eyebrow: "Discover",
        title: "Solutions Overview",
        description: "Find the right workflow for people, teams, and events.",
        href: "#page=solutions-overview",
        tone: "bg-[#eaf6ff]",
      },
      {
        eyebrow: "Personal",
        title: "For Individuals",
        description: "Make every introduction easy to remember and save.",
        href: "#page=for-individuals",
        tone: "bg-[#ffb8e7]",
      },
      {
        eyebrow: "Collaborate",
        title: "For Teams",
        description: "Manage brand, people, cards, leads, and insights.",
        href: `${APP_URL}/signup`,
        tone: "bg-[#f0fdb3]",
        isExternal: true,
      },
    ],
    tools: [
      ["For Enterprise", "Govern departments, roles, brands, and identities.", `${APP_URL}/signup`, "b9f6f.svg", true],
      ["For Sales Teams", "Capture and organize leads from every client meeting.", `${APP_URL}/signup`, "eac73.svg", true],
      ["For Event Organizers", "Manage registration, private passes, and door rosters.", `${APP_URL}/signup`, "b6887.svg", true],
      ["Admin Workspace Console", "Centralize user cards, billing, and permissions.", `${APP_URL}/admin`, "b6887.svg", true],
    ],
  },
  {
    label: "Resources",
    featuredLabel: "Learn",
    toolsLabel: "Support",
    featured: [
      {
        eyebrow: "Explore",
        title: "Frequently Asked Questions",
        description: "Everything about NFC cards, privacy, and CRM sync.",
        href: "#page=faq",
        tone: "bg-[#eaf6ff]",
      },
      {
        eyebrow: "Guides",
        title: "How It Works",
        description: "From setup to your first scan in under 3 minutes.",
        href: "#page=how-it-works",
        tone: "bg-[#eaf6ff]",
      },
      {
        eyebrow: "Plans",
        title: "Pricing & Tiers",
        description: "Transparent pricing for individuals, teams, and summits.",
        href: "#page=pricing-plans",
        tone: "bg-[#eaf6ff]",
      },
    ],
    tools: [
      ["Sign In to Dashboard", "Access your active workspaces and cards.", `${APP_URL}/login`, "b6887.svg", true],
      ["Create Free Account", "Start building your digital business card now.", `${APP_URL}/signup`, "b9f6f.svg", true],
    ],
  },
];

export default function NavigationMenu4({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  return (
    <NavigationMenu className="product-navigation">
      <NavigationMenuList className="flex items-center gap-1">
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.label}>
            <NavigationMenuTrigger className="product-trigger">
              {menu.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-4 sm:p-6 md:w-[720px] lg:w-[820px] bg-white rounded-3xl shadow-2xl border border-[#e5e7eb]">
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
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#5f5f5f] block">
                          {item.eyebrow}
                        </span>
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
            href="#how"
            onClick={onNavigate}
          >
            How It Works
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className="header-menu-link"
            href="#pricing"
            onClick={onNavigate}
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
