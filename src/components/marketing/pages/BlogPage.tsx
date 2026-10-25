import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, User, X, CheckCircle2, Share2 } from 'lucide-react';
import { MarketingNav } from '../MarketingNav';
import { MarketingFooter } from '../MarketingFooter';
import { updatePageSEO } from '../../../utils/seo';
import { MarketingHeroVisual } from '../MarketingHeroVisual';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  role: string;
  excerpt: string;
  content: string[];
  takeaways: string[];
}

const posts: BlogPost[] = [
  {
    id: 'death-of-paper-cards',
    title: 'Why 88% of Paper Business Cards Get Thrown Away Within a Week',
    category: 'Industry',
    date: 'Oct 2026',
    readTime: '5 min read',
    author: 'Elena Rostova',
    role: 'Head of Product Research',
    excerpt: 'Over 100 billion business cards are printed every year globally, yet 88% land in hotel trash cans. Here is why the browser-first paradigm is replacing paper forever.',
    content: [
      'In a survey of over 1,200 attendees across tech and enterprise summits, an overwhelming 88% admitted that physical business cards collected during conferences are discarded within seven days of returning home.',
      'The core friction is simple: paper requires manual data entry. Even business card scanner apps suffer from OCR typos, blurry contact numbers, and outdated job titles. By contrast, a digital card that exports a direct vCard 3.0 file lands directly into Apple Contacts or Google Contacts in under two seconds with 100% field fidelity.',
      'Furthermore, dynamic links never go stale. When an executive gets promoted or updates their office line, everyone who scanned their card earlier still reaches the correct profile.'
    ],
    takeaways: [
      'Zero manual typing for your recipients',
      'Dynamic real-time profile updates over the air',
      'Instant sync with Apple Contacts, Google Contacts, and vCard address books'
    ]
  },
  {
    id: 'nfc-smart-cards-guide',
    title: 'The Complete Technical Guide to NFC Business Cards & NTAG Chips',
    category: 'Product',
    date: 'Sep 2026',
    readTime: '7 min read',
    author: 'Marcus Vance',
    role: 'Hardware & Protocols Lead',
    excerpt: 'Everything you need to know about NTAG213, NTAG215, and NTAG216 chips, antenna frequency matching, and iOS/Android native tap compatibility.',
    content: [
      'Near Field Communication (NFC) operates at 13.56 MHz and enables two devices within 4cm of proximity to exchange data. Modern smartphones—including iPhone XR and newer, plus nearly all Android devices from the past six years—have background NFC tag reading enabled by default.',
      'When configuring physical smart cards, choosing between NTAG213 (144 bytes), NTAG215 (504 bytes), and NTAG216 (888 bytes) comes down to payload size. With Zuntra, we use concise cryptographic URL redirects, meaning a cost-effective NTAG213 chip easily fits your permanent card link with rapid read speeds.',
      'Our physical cards also feature laser-etched high-contrast dynamic QR codes on the reverse, providing an effortless fallback for users with protective metal phone cases or older legacy hardware.'
    ],
    takeaways: [
      'iPhone XR+ and modern Android read NFC natively without apps',
      'Concise redirect URLs provide lightning-fast read speeds',
      'Laser-etched QR code backup ensures 100% universal compatibility'
    ]
  },
  {
    id: 'qr-lead-conversion-tactics',
    title: 'How High-Velocity Sales Teams Capture 3.4× More Leads with Dynamic QR',
    category: 'Use Case',
    date: 'Sep 2026',
    readTime: '6 min read',
    author: 'Sophie Zhang',
    role: 'Enterprise Solutions Director',
    excerpt: 'Stop handing out static brochures at trade show booths. Discover how two-way contact exchange forms create instant pipeline attribution.',
    content: [
      'At busy trade expos, trade show reps have an average of 45 seconds to establish trust and capture contact information before prospects walk away.',
      'Traditional badge scanners cost thousands per event and often deliver batch CSV files days after the event concludes—when the prospect has already forgotten the initial conversation.',
      'By placing high-contrast dynamic QR codes on employee badges and phone lockscreens, sales reps empower prospects to instantly save their contact info and exchange their own details via a 2-tap web form. Leads sync in real time to the workspace CRM, enabling immediate post-meeting follow-ups while enthusiasm is at its peak.'
    ],
    takeaways: [
      'Instant two-way contact exchange in 15 seconds',
      'Eliminates expensive $1,500/day expo badge scanner rentals',
      'Real-time lead timestamp and event attribution tags'
    ]
  },
  {
    id: 'email-signature-branding',
    title: 'Mastering HTML Email Signatures Across Outlook, Gmail & Apple Mail',
    category: 'Guide',
    date: 'Aug 2026',
    readTime: '4 min read',
    author: 'Elena Rostova',
    role: 'Head of Product Research',
    excerpt: 'Why standard email signature generators break on mobile email clients, and how inline CSS table layouts solve layout shifts across 50+ mail clients.',
    content: [
      'Email clients like Microsoft Outlook for Windows still rely on Word-based rendering engines, which strip modern CSS flexbox and grid layouts.',
      'Zuntra compiles email signatures into strict HTML table structures with inline styles and web-safe font fallbacks. Each signature includes your headshot, title, social links, and an embedded dynamic QR code that recipients can scan right off their computer monitor with their phone.',
      'For team administrators, our workspace console allows one-click company-wide signature deployments that guarantee brand consistency across every outgoing email.'
    ],
    takeaways: [
      'Table-based inline HTML layout tested across 50+ email clients',
      'Embedded QR code allows instant phone scanning from computer screens',
      'Centralized admin templates enforce uniform corporate identity'
    ]
  },
  {
    id: 'networking-etiquette-2026',
    title: 'Modern Networking Etiquette: The Rules of Digital Contact Exchange',
    category: 'Industry',
    date: 'Aug 2026',
    readTime: '5 min read',
    author: 'Liam O’Connor',
    role: 'Brand & Community Strategist',
    excerpt: 'How to share your digital card without coming across as pushy, and why recipient-first UX creates genuine professional rapport.',
    content: [
      'The single biggest faux pas in digital networking is asking someone you just met to download an app or register an account just to view your contact information.',
      'Good networking etiquette means minimizing cognitive load for your counterpart. Present your lockscreen QR code with a warm introduction: "Scan this with your camera and it will drop my contact straight into your address book."',
      'Always offer the reciprocal option: "You can also tap the button to send me your details if you prefer." This polite, frictionless exchange respects their time and leaves an indelible professional impression.'
    ],
    takeaways: [
      'Never force someone to download an app or log in',
      'Present your QR code or NFC card cleanly and unobtrusively',
      'Always invite reciprocal exchange with one-tap ease'
    ]
  },
  {
    id: 'offline-qr-lockscreen-sharing',
    title: 'Offline Networking: How to Share Contact Badges Without Cellular Data',
    category: 'Tutorial',
    date: 'Jul 2026',
    readTime: '4 min read',
    author: 'Marcus Vance',
    role: 'Hardware & Protocols Lead',
    excerpt: 'Step-by-step breakdown of how high-contrast lockscreen badges and offline vCard QR codes work without Wi-Fi connectivity.',
    content: [
      'Conferences held in underground convention centers or crowded stadium halls notoriously suffer from cellular network congestion. If your digital card requires an active 5G connection to display your QR code, you will be left stranded.',
      'By saving your Zuntra high-contrast QR badge to your phone lockscreen wallpaper, your pass is permanently accessible with zero network latency.',
      'A single tap of your phone power button displays your high-contrast QR pass instantly—even in airplane mode. When the recipient scans your code, their phone loads your profile the moment connection returns, or parses the vCard payload directly.'
    ],
    takeaways: [
      'Power button shortcut access in under 2 seconds',
      'Works 100% offline without cellular or Wi-Fi data',
      'High-contrast QR engineering tuned for all camera sensors'
    ]
  }
];

const categories = ['All', 'Industry', 'Product', 'Use Case', 'Guide', 'Tutorial'];

export const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  React.useEffect(() => {
    updatePageSEO({
      title: 'Blog & Networking Insights | Zuntra Cards',
      description: 'Tactical guides, industry research, and modern contact exchange techniques for high-performing professionals.',
      canonicalPath: '/blog',
    });
  }, []);

  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);

  const handleShare = (post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(window.location.origin + '/blog#' + post.id);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="marketing min-h-screen bg-white text-ink flex flex-col font-sans">
      <MarketingNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="marketing-page-hero pt-20 pb-14 lg:pt-28 lg:pb-18 text-center bg-surface-soft border-b border-hairline">
          <div className="marketing-hero-layout">
          <div className="marketing-hero-copy max-w-4xl mx-auto px-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-hairline text-xs font-medium text-slate shadow-2xs">
              <BookOpen size={13} className="text-brand-blue" />
              <span>Insights & Perspectives</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-2px] leading-tight">
              Insights for modern<br />professional networking.
            </h1>
            <p className="text-base sm:text-lg text-slate max-w-2xl mx-auto leading-relaxed">
              In-depth articles, hardware protocols, lead capture strategies, and architectural essays from the creators of Zuntra Cards.
            </p>
          </div>
          <MarketingHeroVisual kind="blog" />
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b border-hairline bg-white sticky top-[60px] z-10 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-ink text-white shadow-xs'
                    : 'bg-surface text-slate hover:bg-hairline hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Posts Grid */}
        <section id="latest-stories" className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="group bg-white border border-hairline rounded-[24px] overflow-hidden hover:border-ink hover:shadow-md transition-all flex flex-col cursor-pointer"
                >
                  {/* Visual Header Banner */}
                  <div className="h-44 bg-gradient-to-br from-surface to-surface-soft border-b border-hairline p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-full bg-white border border-hairline text-[10px] font-mono font-bold uppercase tracking-wider text-slate">
                        {post.category}
                      </span>
                      <button
                        onClick={(e) => handleShare(post, e)}
                        className="w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-hairline flex items-center justify-center text-steel hover:text-ink transition-colors cursor-pointer"
                        title="Copy article link"
                      >
                        {copiedId === post.id ? <CheckCircle2 size={14} className="text-emerald-600" /> : <Share2 size={13} />}
                      </button>
                    </div>

                    <div className="z-10">
                      <p className="text-xs font-medium text-slate flex items-center gap-1.5">
                        <Clock size={12} className="text-brand-blue" />
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </p>
                    </div>

                    <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-brand-blue/5 rounded-full blur-xl pointer-events-none" />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-3">
                      <h2 className="text-lg font-bold text-ink leading-snug group-hover:text-brand-blue transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-xs text-slate leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-hairline flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-surface border border-hairline flex items-center justify-center text-ink text-xs font-bold">
                          <User size={13} className="text-steel" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-ink leading-none">{post.author}</p>
                          <p className="text-[10px] text-slate mt-0.5">{post.role}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Article Modal Reader */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
            <div className="bg-white rounded-[28px] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-hairline shadow-2xl relative">
              <div className="sticky top-0 bg-white/95 backdrop-blur-md px-8 py-5 border-b border-hairline flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-surface border border-hairline text-[10px] font-mono font-bold uppercase text-slate">
                    {selectedPost.category}
                  </span>
                  <span className="text-xs text-steel">• {selectedPost.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-9 h-9 rounded-full bg-surface hover:bg-hairline flex items-center justify-center text-slate hover:text-ink transition-colors cursor-pointer"
                  aria-label="Close article"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-8 sm:p-12 space-y-8">
                <div className="space-y-4">
                  <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink leading-tight">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-3 pt-2 text-xs text-slate">
                    <span className="font-semibold text-ink">{selectedPost.author}</span>
                    <span>•</span>
                    <span>{selectedPost.role}</span>
                    <span>•</span>
                    <span>Published {selectedPost.date}</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-surface-soft border border-hairline space-y-2">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                    Key Executive Takeaways
                  </p>
                  <ul className="space-y-1.5 text-xs text-ink">
                    {selectedPost.takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-brand-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-5 text-sm text-slate leading-relaxed border-t border-hairline pt-6">
                  {selectedPost.content.map((paragraph, idx) => (
                    <p key={idx} className="text-base text-charcoal leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
                  <a
                    href="/signup"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-ink hover:bg-charcoal text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Create Your Free Card</span>
                    <ArrowRight size={14} />
                  </a>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-xs font-semibold text-slate hover:text-ink underline cursor-pointer"
                  >
                    Back to all insights
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter Section */}
        <section className="py-20 bg-surface-soft border-t border-hairline">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue">
              The Digital Exchange Dispatch
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
              Stay ahead of modern networking technology.
            </h2>
            <p className="text-sm text-slate leading-relaxed max-w-xl mx-auto">
              Join over 24,000 founders, sales directors, and creative professionals receiving our monthly analysis on digital identity protocols.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Zuntra Dispatch!'); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="flex-1 px-5 py-3 rounded-full border border-hairline-strong text-sm bg-white text-ink placeholder:text-muted focus:border-brand-blue focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-ink text-white text-xs font-semibold uppercase tracking-wider hover:bg-charcoal transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Subscribe</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
};
