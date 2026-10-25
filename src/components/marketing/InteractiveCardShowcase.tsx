import React, { useState } from 'react';
import {
  Smartphone,
  QrCode,
  Wifi,
  Users,
  Video,
  Check,
  Download,
  Mail,
  Phone,
  Globe,
  Share2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Send,
  BatteryFull,
  Signal,
  MapPin
} from 'lucide-react';

interface InteractiveCardShowcaseProps {
  initialTab?: 'card' | 'qr' | 'nfc' | 'exchange' | 'virtual';
  compact?: boolean;
}

export const InteractiveCardShowcase: React.FC<InteractiveCardShowcaseProps> = ({
  initialTab = 'card',
  compact = false
}) => {
  const [activeTab, setActiveTab] = useState<'card' | 'qr' | 'nfc' | 'exchange' | 'virtual'>(initialTab);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', note: '' });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [nfcTapped, setNfcTapped] = useState(false);

  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const handleSaveContact = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleSimulatedAction = (label: string, detail: string) => {
    setActionFeedback(`Simulated: ${label} (${detail})`);
    setTimeout(() => setActionFeedback(null), 3000);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;
    setLeadSubmitted(true);
    setTimeout(() => {
      setLeadSubmitted(false);
      setLeadForm({ name: '', email: '', note: '' });
    }, 3500);
  };

  const handleNfcTap = () => {
    setNfcTapped(true);
    setTimeout(() => setNfcTapped(false), 2400);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto rounded-[32px] bg-white border border-hairline shadow-xl overflow-hidden font-sans ${compact ? 'p-4 sm:p-6' : 'p-6 sm:p-8'}`}>
      {/* Top Header & Tab Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-hairline">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-ink">
              Interactive Product Demo
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-surface border border-hairline text-[10px] font-mono uppercase text-slate font-semibold">
              Live Preview
            </span>
          </div>
          <p className="text-xs text-slate mt-1">
            Toggle between channels to test recipient experience across hardware and browser formats.
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          role="tablist"
          aria-label="Interactive demo channels"
          className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none"
        >
          <button
            role="tab"
            aria-selected={activeTab === 'card'}
            aria-controls="panel-card"
            id="tab-card"
            onClick={() => setActiveTab('card')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'card'
                ? 'bg-ink text-white shadow-xs'
                : 'bg-surface text-slate hover:bg-hairline hover:text-ink'
            }`}
          >
            <Smartphone size={13} />
            <span>Digital Card</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'qr'}
            aria-controls="panel-qr"
            id="tab-qr"
            onClick={() => setActiveTab('qr')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'qr'
                ? 'bg-ink text-white shadow-xs'
                : 'bg-surface text-slate hover:bg-hairline hover:text-ink'
            }`}
          >
            <QrCode size={13} />
            <span>Dynamic QR</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'nfc'}
            aria-controls="panel-nfc"
            id="tab-nfc"
            onClick={() => setActiveTab('nfc')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'nfc'
                ? 'bg-ink text-white shadow-xs'
                : 'bg-surface text-slate hover:bg-hairline hover:text-ink'
            }`}
          >
            <Wifi size={13} />
            <span>NFC Tap</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'exchange'}
            aria-controls="panel-exchange"
            id="tab-exchange"
            onClick={() => setActiveTab('exchange')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'exchange'
                ? 'bg-ink text-white shadow-xs'
                : 'bg-surface text-slate hover:bg-hairline hover:text-ink'
            }`}
          >
            <Users size={13} />
            <span>2-Way Lead Form</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'virtual'}
            aria-controls="panel-virtual"
            id="tab-virtual"
            onClick={() => setActiveTab('virtual')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'virtual'
                ? 'bg-ink text-white shadow-xs'
                : 'bg-surface text-slate hover:bg-hairline hover:text-ink'
            }`}
          >
            <Video size={13} />
            <span>Virtual Background</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="pt-8">
        {/* TAB 1: Digital Card Phone Simulator */}
        {activeTab === 'card' && (
          <div role="tabpanel" id="panel-card" aria-labelledby="tab-card" className="grid lg:grid-cols-[auto_minmax(0,1fr)] items-center justify-items-center lg:justify-items-stretch gap-10 lg:gap-16 max-w-4xl mx-auto w-full">
            {/* Phone Mockup Frame */}
            <div className="w-full max-w-[332px] mx-auto rounded-[48px] bg-[#080b12] p-[7px] shadow-[0_30px_70px_rgba(15,23,42,.28)] border border-[#334155] relative">
              {/* Mobile Screen */}
              <div className="w-full rounded-[40px] bg-[#f8fafc] overflow-hidden border border-white/10 text-ink flex flex-col">
                {/* Realistic Status Bar */}
                <div className="relative px-6 pt-3 pb-2 flex items-center justify-between bg-[#0f172a] text-white text-[9px] font-bold tracking-tight">
                  <span>9:41</span>
                  <div className="absolute left-1/2 top-2.5 -translate-x-1/2 w-[82px] h-[20px] rounded-full bg-[#05070b] border border-white/5 shadow-inner" aria-hidden="true">
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[#192235] ring-1 ring-[#26334a]" />
                  </div>
                  <span className="flex items-center gap-1.5"><Signal size={10} strokeWidth={2.6} /><span>5G</span><BatteryFull size={14} strokeWidth={2.4} /></span>
                </div>

                {/* Header Banner */}
                <div
                  className="h-28 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] relative p-4 overflow-hidden"
                  style={{ backgroundImage: 'radial-gradient(circle at 22% 18%, rgba(214,242,121,.18), transparent 34%), radial-gradient(rgba(255,255,255,.12) .7px, transparent .7px), linear-gradient(135deg,#1E293B,#0F172A 54%,#1E293B)' }}
                >
                  <div className="relative z-10 flex items-center justify-between text-white">
                    <span className="text-[11px] font-extrabold tracking-[-.04em]">zuntra<span className="text-[#D6F279]">↗</span></span>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[8px] font-semibold text-white/90"><ShieldCheck size={10} className="text-[#D6F279]" /> Verified</span>
                      <button type="button" className="w-7 h-7 rounded-full border border-white/15 bg-white/10 text-white grid place-items-center hover:bg-white/20" aria-label="Show QR code"><QrCode size={13} /></button>
                    </div>
                  </div>
                </div>

                {/* Profile Card Body */}
                <div className="px-5 pb-6 -mt-9 relative z-10 flex flex-col gap-4">
                  {/* Avatar */}
                  <div className="w-[74px] h-[74px] rounded-full border-[4px] border-white bg-gradient-to-br from-[#2f8067] to-[#102e26] text-white flex items-center justify-center text-xl font-extrabold shadow-[0_9px_24px_rgba(15,23,42,.22)] relative">
                    AM
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#28b67a] border-[3px] border-white" aria-label="Active" />
                  </div>

                  {/* Name and Bio */}
                  <div className="space-y-1">
                    <h4 className="text-[20px] font-extrabold text-[#0f172a] leading-none tracking-[-.04em]">Alex Morgan</h4>
                    <p className="text-[13px] text-[#4262ff] font-semibold">VP of Product Strategy</p>
                    <p className="text-[11px] text-[#64748b] flex items-start gap-1.5 leading-snug"><MapPin size={12} className="mt-px shrink-0" /><span><strong className="text-[#334155] font-semibold">Vertex Labs</strong> · San Francisco &amp; London</span></p>
                    <p className="text-[11px] text-[#64748b] pt-1 leading-[1.55]">Building useful identity systems for modern teams and making every introduction easier to keep.</p>
                  </div>

                  {/* Primary 1-Tap Action Button */}
                  <button
                    onClick={handleSaveContact}
                    className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      savedSuccess
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#0F172A] hover:bg-[#1E293B] text-white hover:-translate-y-0.5'
                    }`}
                  >
                    {savedSuccess ? (
                      <>
                        <Check size={16} />
                        <span>Saved to Contacts!</span>
                      </>
                    ) : (
                      <>
                        <Download size={15} className="text-[#D6F279]" />
                        <span>Save Contact (vCard)</span>
                      </>
                    )}
                  </button>

                  {/* Simulated Action Toast Feedback */}
                  {actionFeedback && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="py-1.5 px-3 rounded-lg bg-ink text-white text-[11px] font-medium text-center shadow-xs animate-fade-in"
                    >
                      {actionFeedback}
                    </div>
                  )}

                  {/* Direct Contact Channels */}
                  <div className="grid grid-cols-4 gap-2 pt-1 text-center">
                    <button
                      type="button"
                      onClick={() => handleSimulatedAction('Call', '+1 (555) 019-2834')}
                      className="p-2.5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#94a3b8] hover:-translate-y-0.5 hover:shadow-sm text-[#0f172a] flex flex-col items-center gap-1 transition-all cursor-pointer"
                      title="Simulated: Call"
                    >
                      <Phone size={15} className="text-brand-blue" />
                      <span className="text-[9px] font-semibold">Call</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSimulatedAction('Email', 'alex@vertexlabs.io')}
                      className="p-2.5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#94a3b8] hover:-translate-y-0.5 hover:shadow-sm text-[#0f172a] flex flex-col items-center gap-1 transition-all cursor-pointer"
                      title="Simulated: Email"
                    >
                      <Mail size={15} className="text-brand-blue" />
                      <span className="text-[9px] font-semibold">Email</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSimulatedAction('Profile link', 'linkedin.com/in/alexmorgan')}
                      className="p-2.5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#94a3b8] hover:-translate-y-0.5 hover:shadow-sm text-[#0f172a] flex flex-col items-center gap-1 transition-all cursor-pointer"
                      title="Simulated: Connect"
                    >
                      <Share2 size={15} className="text-brand-blue" />
                      <span className="text-[9px] font-semibold">Connect</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSimulatedAction('Calendar', 'Schedule meeting')}
                      className="p-2.5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#94a3b8] hover:-translate-y-0.5 hover:shadow-sm text-[#0f172a] flex flex-col items-center gap-1 transition-all cursor-pointer"
                      title="Simulated: Book"
                    >
                      <Calendar size={15} className="text-brand-blue" />
                      <span className="text-[9px] font-semibold">Book</span>
                    </button>
                  </div>

                  {/* Secondary Details */}
                  <div className="p-3 rounded-xl bg-white border border-[#e2e8f0] space-y-2 text-xs shadow-[0_1px_2px_rgba(15,23,42,.03)]">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-steel flex items-center gap-1.5"><Globe size={12} /> Website</span>
                      <span className="font-semibold text-ink">vertexlabs.io</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] border-t border-hairline pt-2">
                      <span className="text-steel flex items-center gap-1.5"><ShieldCheck size={12} /> Security</span>
                      <span className="font-semibold text-[#167457] inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#28b67a]" /> Enterprise Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Description Sidebar */}
            <div className="w-full max-w-md space-y-5 self-center">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
                Frictionless Recipient Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink leading-tight">
                No apps to install. Exactly where contacts belong.
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                When you share a Zuntra card, the recipient simply taps <strong>Save Contact</strong>. A standardized vCard file downloads instantly into Apple Contacts or Google Contacts with your photo, phone, job title, and social links intact.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">100% native mobile browser rendering without app store redirects</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Over-the-air profile updates: change phone numbers without reprinting</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Custom vanity URLs (zuntra.cards/yourname) for bios and resumes</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Dynamic QR Code Simulator */}
        {activeTab === 'qr' && (
          <div role="tabpanel" id="panel-qr" aria-labelledby="tab-qr" className="grid lg:grid-cols-[auto_minmax(0,1fr)] items-center justify-items-center lg:justify-items-stretch gap-10 lg:gap-16 max-w-4xl mx-auto w-full">
            <div className="w-[320px] rounded-[36px] bg-surface-soft border border-hairline p-8 flex flex-col items-center text-center space-y-6 shadow-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-hairline text-[10px] font-mono font-bold uppercase text-slate">
                <QrCode size={12} className="text-brand-blue" />
                <span>Dynamic Vector QR</span>
              </div>

              {/* Dynamic QR Display Box */}
              <div className="p-6 rounded-3xl bg-white border border-hairline shadow-md relative group">
                <div className="w-48 h-48 bg-ink rounded-2xl p-3 flex items-center justify-center relative overflow-hidden">
                  {/* High contrast QR Pattern Grid */}
                  <div className="grid grid-cols-6 gap-2 w-full h-full p-2 bg-white rounded-xl">
                    <div className="bg-ink rounded-sm col-span-2 row-span-2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-xs" />
                    </div>
                    <div className="bg-ink rounded-sm" />
                    <div className="bg-ink rounded-sm" />
                    <div className="bg-ink rounded-sm col-span-2 row-span-2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-xs" />
                    </div>
                    <div className="bg-ink rounded-sm" />
                    <div className="bg-brand-blue rounded-sm" />
                    <div className="bg-ink rounded-sm" />
                    <div className="bg-ink rounded-sm" />
                    <div className="bg-ink rounded-sm" />
                    <div className="bg-ink rounded-sm" />
                    <div className="bg-brand-blue rounded-full col-span-2 row-span-2 flex items-center justify-center text-white font-bold text-xs">
                      Z
                    </div>
                    <div className="bg-ink rounded-sm" />
                    <div className="bg-ink rounded-sm" />
                    <div className="bg-ink rounded-sm col-span-2 row-span-2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-xs" />
                    </div>
                    <div className="bg-ink rounded-sm" />
                    <div className="bg-ink rounded-sm" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold text-ink">Scan with any phone camera</p>
                <p className="text-[11px] text-slate">Works in low light and at distances up to 3 meters.</p>
              </div>

              {actionFeedback && (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-1.5 px-3 rounded-lg bg-ink text-white text-[11px] font-medium text-center shadow-xs animate-fade-in"
                >
                  {actionFeedback}
                </div>
              )}

              <button
                type="button"
                onClick={() => handleSimulatedAction('Camera Scan', 'Opened profile in browser')}
                className="px-6 py-2.5 rounded-full bg-ink hover:bg-charcoal text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Simulate Camera Scan</span>
                <ArrowRight size={13} />
              </button>
            </div>

            <div className="w-full max-w-md space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
                High-Contrast Camera Readiness
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink leading-tight">
                Crisp QR codes engineered for lightning-fast detection.
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Standard QR codes struggle on angled phone screens and poor lighting. Zuntra dynamically adjusts contrast ratios and error correction levels to ensure camera lenses lock on immediately.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Export vector SVG & high-res PNG for trade show lanyards and badges</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Instant browser handoff with 1-tap contact card download</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Dynamic redirection: update your destination card anytime without reprinting</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: NFC Hardware Tap Simulator */}
        {activeTab === 'nfc' && (
          <div role="tabpanel" id="panel-nfc" aria-labelledby="tab-nfc" className="grid lg:grid-cols-[auto_minmax(0,1fr)] items-center justify-items-center lg:justify-items-stretch gap-10 lg:gap-16 max-w-4xl mx-auto w-full">
            <div className="w-[340px] rounded-[36px] bg-surface-soft border border-hairline p-8 flex flex-col items-center text-center space-y-6 shadow-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-hairline text-[10px] font-mono font-bold uppercase text-slate">
                <Wifi size={12} className="text-brand-blue" />
                <span>NTAG213 / NTAG215 Hardware</span>
              </div>

              {/* Physical NFC Card Graphic */}
              <div
                onClick={handleNfcTap}
                className={`w-64 h-40 rounded-2xl bg-gradient-to-tr from-charcoal via-ink to-black p-5 text-white flex flex-col justify-between shadow-2xl relative cursor-pointer transition-transform duration-300 hover:scale-105 ${
                  nfcTapped ? 'ring-4 ring-brand-blue animate-pulse' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-slate uppercase">ZUNTRA NFC</span>
                  <Wifi size={20} className={nfcTapped ? 'text-brand-blue animate-ping' : 'text-steel'} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold tracking-tight">ALEX MORGAN</p>
                    <p className="text-[9px] font-mono text-steel uppercase">VERTEX LABS</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-brand-blue/40 flex items-center justify-center text-[10px] font-bold">
                    Z
                  </div>
                </div>

                {nfcTapped && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="absolute inset-0 bg-brand-blue/90 rounded-2xl flex items-center justify-center flex-col gap-1 text-white animate-fade-in"
                  >
                    <Check size={28} />
                    <span className="text-xs font-bold uppercase tracking-wider">Tap Successful! (110ms)</span>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold text-ink">Tap card above to simulate iPhone tap</p>
                <p className="text-[11px] text-slate">Hold near top of iPhone (XR+) or Android device.</p>
              </div>

              <button
                type="button"
                onClick={handleNfcTap}
                className="px-6 py-2.5 rounded-full bg-brand-blue hover:bg-blue-pressed text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Wifi size={14} />
                <span>Simulate Phone Tap</span>
              </button>
            </div>

            <div className="w-full max-w-md space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
                Hardware Tap-to-Share
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink leading-tight">
                Millisecond handoffs with standard NFC chips.
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Write your permanent cryptographic Zuntra URL to matte cards, bamboo cards, metal cards, or phone stickers. Works out of the box with standard iOS and Android NFC antennas.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Compatible with iPhone XR and newer without downloading apps</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Standard NTAG213 / NTAG215 encoding with 1-click write scripts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Backup laser-etched QR code on the back ensures 100% device coverage</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Reciprocal 2-Way Lead Form */}
        {activeTab === 'exchange' && (
          <div role="tabpanel" id="panel-exchange" aria-labelledby="tab-exchange" className="grid lg:grid-cols-[auto_minmax(0,1fr)] items-center justify-items-center lg:justify-items-stretch gap-10 lg:gap-16 max-w-4xl mx-auto w-full">
            <div className="w-[340px] rounded-[36px] bg-white border border-hairline p-7 shadow-xl space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-blue font-bold">Two-Way Exchange</span>
                <h4 className="text-base font-bold text-ink">Share your info back</h4>
                <p className="text-xs text-slate">Send your contact details directly to Alex's workspace.</p>
              </div>

              {leadSubmitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2"
                >
                  <Check size={28} className="text-emerald-600 mx-auto" />
                  <p className="text-sm font-bold text-emerald-900">Exchange Complete!</p>
                  <p className="text-xs text-emerald-700">Lead synced to Alex's contacts directory with timestamp.</p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="showcase-lead-name" className="text-[11px] font-semibold text-slate block mb-1">
                      Your Full Name
                    </label>
                    <input
                      id="showcase-lead-name"
                      name="name"
                      autoComplete="name"
                      type="text"
                      required
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      placeholder="e.g. Jordan Lee"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-hairline bg-surface text-ink focus:border-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="showcase-lead-email" className="text-[11px] font-semibold text-slate block mb-1">
                      Email Address
                    </label>
                    <input
                      id="showcase-lead-email"
                      name="email"
                      autoComplete="email"
                      type="email"
                      required
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      placeholder="jordan@company.com"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-hairline bg-surface text-ink focus:border-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="showcase-lead-note" className="text-[11px] font-semibold text-slate block mb-1">
                      Quick Note (Optional)
                    </label>
                    <input
                      id="showcase-lead-note"
                      name="note"
                      autoComplete="off"
                      type="text"
                      value={leadForm.note}
                      onChange={(e) => setLeadForm({ ...leadForm, note: e.target.value })}
                      placeholder="Met at Tech Summit Booth 42"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-hairline bg-surface text-ink focus:border-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-ink hover:bg-charcoal text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send size={13} />
                    <span>Send My Details</span>
                  </button>
                </form>
              )}
            </div>

            <div className="w-full max-w-md space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
                Active Lead Generation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink leading-tight">
                Turn casual handshakes into qualified connections.
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                When contacts view your card, they don't just consume info—they can exchange their own details back in 15 seconds. Incoming leads land in your workspace directory with timestamp, card attribution, and 1-click CSV/vCard export.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Automatic sync to workspace directory without paper business card scanning</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">30-day Trash Bin protection against accidental lead deletions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Direct CSV and vCard downloads for your workspace contacts directory</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: Virtual Background Simulator */}
        {activeTab === 'virtual' && (
          <div role="tabpanel" id="panel-virtual" aria-labelledby="tab-virtual" className="grid lg:grid-cols-[auto_minmax(0,1fr)] items-center justify-items-center lg:justify-items-stretch gap-10 lg:gap-16 max-w-4xl mx-auto w-full">
            <div className="w-[360px] rounded-[28px] bg-charcoal p-3 shadow-2xl border border-hairline/60">
              {/* Video Window Mockup */}
              <div className="w-full aspect-video rounded-2xl bg-gradient-to-tr from-slate via-charcoal to-ink relative overflow-hidden flex flex-col justify-between p-4">
                <div className="flex items-center justify-between text-white/80 text-[10px] font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Zoom • Team Sync
                  </span>
                  <span>1080p HD</span>
                </div>

                {/* Speaker Avatar Simulation */}
                <div className="self-center text-center space-y-1">
                  <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 mx-auto flex items-center justify-center text-white font-bold">
                    AM
                  </div>
                  <p className="text-white text-xs font-semibold">Alex Morgan</p>
                </div>

                {/* Embedded QR Code Badge on Virtual Background */}
                <div className="self-end bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-white flex items-center gap-2">
                  <div className="w-10 h-10 bg-ink rounded-lg p-1 flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-sm flex items-center justify-center">
                      <QrCode size={20} className="text-ink" />
                    </div>
                  </div>
                  <div className="text-left pr-1">
                    <p className="text-[9px] font-bold text-ink leading-tight">Scan to Connect</p>
                    <p className="text-[8px] text-slate font-mono">zuntra.cards/alex</p>
                  </div>
                </div>
              </div>

              <div className="p-3 text-center">
                <span className="text-[11px] text-white/70">Custom high-res wallpaper for Zoom, Teams, & Google Meet</span>
              </div>
            </div>

            <div className="w-full max-w-md space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">
                Virtual Video Calls
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink leading-tight">
                Connect effortlessly during remote Zoom & Teams meetings.
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Generate branded 1920×1080 virtual backgrounds with your company logo, job title, and high-contrast dynamic QR code positioned perfectly so your camera silhouette never obstructs it.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">1-click image download tailored for Zoom, Microsoft Teams, and Google Meet</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Webinar & conference attribution: see exactly who scanned during your presentation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <p className="text-xs text-ink font-medium">Consistent enterprise branding across remote global staff</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
