import { Phone, MapPin, Clock, Star, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { BlackstoneLogo } from './BlackstoneLogo';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimate: () => void;
}

export function Footer({ onNavigate, onOpenEstimate }: FooterProps) {
  const pages: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="w-full bg-[#050608] border-t border-white/10 pt-20 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Main 4-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Direct (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <BlackstoneLogo onClick={() => onNavigate('home')} />
            
            <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-sm">
              Professional junk removal and property clearouts in Anaheim, CA. Built on straightforward service: show up, do the work, and leave the space clean.
            </p>

            <div className="pt-2 space-y-2.5 text-xs font-mono-tag">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-white hover:text-[#ff5500] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#ff5500]" />
                <span className="font-bold text-sm">{BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <div className="flex items-center gap-2.5 text-neutral-400">
                <Clock className="w-4 h-4 text-[#ff5500]" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-400">
                <MapPin className="w-4 h-4 text-[#ff5500]" />
                <span>{BUSINESS_INFO.address}, {BUSINESS_INFO.city}, {BUSINESS_INFO.state}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Pages Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono-tag font-bold tracking-[0.2em] text-white uppercase block">
              PAGES
            </span>
            <ul className="space-y-2.5 text-sm">
              {pages.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      onNavigate(p.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono-tag font-bold tracking-[0.2em] text-white uppercase block">
              SERVICES
            </span>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verification & Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <span className="text-xs font-mono-tag font-bold tracking-[0.2em] text-white uppercase block">
              VERIFICATION
            </span>

            <div className="p-4 rounded-lg bg-[#0e1014] border border-white/5 space-y-2">
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
                <span className="text-white text-xs font-bold font-mono-tag ml-1">5.0 ★</span>
              </div>
              <p className="text-xs text-neutral-300 font-mono-tag">
                15 Verified Google Reviews
              </p>
              <span className="text-[10px] text-emerald-400 block font-mono-tag">
                ● 100% 5-Star Track Record
              </span>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono-tag text-neutral-500 uppercase tracking-wider block">
                AUTHENTIC SOCIAL
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Blackstone on Instagram"
                  className="p-2.5 rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Blackstone on Facebook"
                  className="p-2.5 rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <button
                  onClick={onOpenEstimate}
                  className="flex-1 py-2 px-3 rounded-md bg-[#ff5500] hover:bg-[#ff6a1f] text-white text-xs font-mono-tag font-bold tracking-wider transition-colors flex items-center justify-center gap-1"
                >
                  <span>ESTIMATE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tag text-neutral-400">
          <div>
            © {new Date().getFullYear()} Blackstone Junk Removal. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Anaheim, California</span>
            <span>·</span>
            <span>MAKE SPACE. FEEL LIGHTER.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
