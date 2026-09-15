import { useState } from 'react';
import { ArrowUpRight, Phone, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO, PRINCIPLES } from '../data/content';
import { AUTHENTIC_IMAGES, AuthenticPhotoMeta } from '../data/images';
import { AuthenticPhoto } from '../components/AuthenticPhoto';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';
import { BlackstoneLogo } from '../components/BlackstoneLogo';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimate: () => void;
}

export function AboutPage({ onNavigate: _onNavigate, onOpenEstimate }: AboutPageProps) {
  const [lightboxMeta, setLightboxMeta] = useState<AuthenticPhotoMeta | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const handleOpenLightbox = (meta: AuthenticPhotoMeta, src: string) => {
    setLightboxMeta(meta);
    setLightboxSrc(src);
  };

  return (
    <div className="w-full pt-32 pb-24">
      {/* 01. ABOUT HERO */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-16">
        <div className="border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tag tracking-wider text-neutral-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span className="uppercase text-[11px] font-bold tracking-[0.2em] text-[#ff5500]">
              ABOUT BLACKSTONE JUNK REMOVAL
            </span>
            <span className="text-neutral-500">|</span>
            <span>ANAHEIM, CALIFORNIA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.05] mb-6 font-display">
            LOCAL PEOPLE.<br />
            <span className="text-neutral-300">REAL WORK.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
            Blackstone Junk Removal is built around straightforward service: show up on time, do the work properly, communicate clearly, and leave the space swept clean.
          </p>
        </div>
      </section>

      {/* 02. AUTHENTIC CREW PHOTOGRAPHY & EDITORIAL BIO */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <AuthenticPhoto
              meta={AUTHENTIC_IMAGES.crewMeta}
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
              onOpenLightbox={handleOpenLightbox}
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono-tag font-bold tracking-widest text-[#ff5500] uppercase block">
              REAL LOCAL SERVICE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight">
              Real People. Real Care.
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              When you call Blackstone, you aren't routed to an out-of-state broker or lead aggregator. You speak directly with our team in Anaheim, who know the neighborhoods, show up in uniform with proper hauling equipment, and treat your home with total respect.
            </p>

            <div className="pt-4 border-t border-white/10 space-y-3 text-xs font-mono-tag text-neutral-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#ff5500]" />
                <span>Woman-Owned & Family Operated in Anaheim, CA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#ff5500]" />
                <span>All Heavy Lifting & Stairs Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. OFFICIAL BRAND SECTION FEATURING THE OFFICIAL LOGO */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto mb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center rounded-2xl bg-[#0c0e12] border border-white/10 p-8 sm:p-14">
          <div className="md:col-span-5 flex justify-center">
            <BlackstoneLogo variant="badge" size="xl" className="max-w-xs" />
          </div>

          <div className="md:col-span-7 space-y-5">
            <span className="text-xs font-mono-tag font-bold tracking-widest text-[#ff5500] uppercase block">
              THE BLACKSTONE EMBLEM
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display leading-tight">
              Built on Durability, Integrity, and Clarity.
            </h3>
            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              The Blackstone mountain crest represents unyielding reliability. Junk removal often happens during stressful transitions—moving homes, clearing out an estate, or reclaiming a garage after years of storage. We view our job as bringing calm, order, and physical relief to every space.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-mono-tag text-neutral-300">
              <div>
                <span className="text-white font-bold block mb-1">LOCAL BASE</span>
                <span>Anaheim, CA 92805</span>
              </div>
              <div>
                <span className="text-white font-bold block mb-1">DISPATCH</span>
                <span>Open 24 Hours · 7 Days</span>
              </div>
              <div>
                <span className="text-white font-bold block mb-1">REPUTATION</span>
                <span>15 Verified 5-Star Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. THE BLACKSTONE STANDARD: 4 NUMBERED EDITORIAL STATEMENTS */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-28">
        <div className="border-b border-white/10 pb-8 mb-12">
          <span className="text-xs font-mono-tag font-bold tracking-[0.2em] text-[#ff5500] uppercase mb-2 block">
            HOW WE OPERATE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] font-display">
            THE BLACKSTONE STANDARD
          </h2>
        </div>

        {/* Clean Editorial Statements Using Whitespace & Typography (Not Huge Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {PRINCIPLES.map((principle) => (
            <div key={principle.number} className="space-y-2.5">
              <span className="text-xs font-mono-tag font-bold text-[#ff5500] tracking-widest block">
                {principle.number}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                {principle.title}
              </h3>
              <p className="text-neutral-300 text-base font-light leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 05. FEATURED CLIENT PROOF QUOTE */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-28">
        <div className="border-t border-b border-white/10 py-16">
          <span className="text-xs font-mono-tag text-neutral-400 uppercase tracking-widest block mb-4">
            VERIFIED LOCAL EXPERIENCE
          </span>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-white font-light font-display leading-snug mb-6">
            “Hard-working and easy to communicate with.”
          </blockquote>
          <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400">
            <div>
              <span className="font-bold text-white text-sm block">Sarah Soquel Morhaim</span>
              <span>Anaheim, CA · Google Review</span>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
              <span className="text-white font-bold ml-1 font-mono-tag">5.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* 06. FINAL CTA */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto text-center">
        <div className="p-10 sm:p-14 rounded-2xl bg-[#0c0e12] border border-white/10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] font-display leading-tight mb-4">
            LET OUR CREW HANDLE IT.
          </h2>
          <p className="text-neutral-300 max-w-lg mx-auto font-light leading-relaxed mb-8">
            Reach out for a fast, free estimate. We'll answer your questions and book a convenient window.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#ff5500] hover:bg-[#ff6a1f] text-white font-medium transition-all shadow-lg shadow-[#ff5500]/20 active:scale-[0.98]"
            >
              <span>GET A FREE ESTIMATE</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-white/5 hover:bg-white/10 text-white border border-white/15 font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#ff5500]" />
              <span>(657) 377-6719</span>
            </a>
          </div>
        </div>
      </section>

      {/* Photo Lightbox Modal */}
      <PhotoLightboxModal
        isOpen={!!lightboxMeta}
        meta={lightboxMeta}
        imgSrc={lightboxSrc}
        onClose={() => setLightboxMeta(null)}
      />
    </div>
  );
}
