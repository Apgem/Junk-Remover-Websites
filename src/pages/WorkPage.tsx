import { useState } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { AUTHENTIC_IMAGES, AuthenticPhotoMeta } from '../data/images';
import { AuthenticPhoto } from '../components/AuthenticPhoto';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../types';

interface WorkPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimate: () => void;
}

export function WorkPage({ onNavigate: _onNavigate, onOpenEstimate }: WorkPageProps) {
  const [lightboxMeta, setLightboxMeta] = useState<AuthenticPhotoMeta | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const handleOpenLightbox = (meta: AuthenticPhotoMeta, src: string) => {
    setLightboxMeta(meta);
    setLightboxSrc(src);
  };

  return (
    <div className="w-full pt-32 pb-24">
      {/* 01. WORK HERO */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-16">
        <div className="border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tag tracking-wider text-neutral-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span className="uppercase text-[11px] font-bold tracking-[0.2em] text-[#ff5500]">
              VERIFIED WORK GALLERY
            </span>
            <span className="text-neutral-500">|</span>
            <span>REAL BLACKSTONE CAPTURES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.05] mb-6 font-display">
            THE WORK<br />
            <span className="text-neutral-300">SPEAKS FOR ITSELF.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
            Real Blackstone crews, real heavy hauls, and real spaces cleared across Anaheim and Orange County.
          </p>
        </div>
      </section>

      {/* 02. EDITORIAL ASYMMETRICAL GALLERY */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto mb-28 space-y-16">
        {/* 1. ONE LARGE FEATURE IMAGE */}
        <div className="space-y-3">
          <AuthenticPhoto
            meta={AUTHENTIC_IMAGES.crewMeta}
            aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
            priority={true}
            onOpenLightbox={handleOpenLightbox}
          />
          <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400 px-1 pt-1">
            <span className="text-white font-bold tracking-widest uppercase">THE BLACKSTONE CREW</span>
            <span>ANAHEIM, CA</span>
          </div>
        </div>

        {/* 2. TWO SMALLER SUPPORTING IMAGES (Asymmetrical Composition) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Supporting 01: GMC Denali in Driveway (Span 7) */}
          <div className="md:col-span-7 space-y-3">
            <AuthenticPhoto
              meta={AUTHENTIC_IMAGES.denaliLoadingMeta}
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
              onOpenLightbox={handleOpenLightbox}
            />
            <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400 px-1 pt-1">
              <span className="text-white font-bold tracking-widest uppercase">ON THE JOB</span>
              <span>GMC DENALI HD RIG</span>
            </div>
          </div>

          {/* Supporting 02: Antique Piano Haul (Span 5) */}
          <div className="md:col-span-5 space-y-3">
            <AuthenticPhoto
              meta={AUTHENTIC_IMAGES.pianoMeta}
              aspectRatio="aspect-[4/3]"
              onOpenLightbox={handleOpenLightbox}
            />
            <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400 px-1 pt-1">
              <span className="text-white font-bold tracking-widest uppercase">HEAVY ITEM REMOVAL</span>
              <span>BOX TRUCK HAULER</span>
            </div>
          </div>
        </div>

        {/* 3. ANOTHER WIDE IMAGE */}
        <div className="space-y-3">
          <AuthenticPhoto
            meta={AUTHENTIC_IMAGES.truckBoxesMeta}
            aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
            onOpenLightbox={handleOpenLightbox}
          />
          <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400 px-1 pt-1">
            <span className="text-white font-bold tracking-widest uppercase">REAL BLACKSTONE WORK</span>
            <span>COMMERCIAL HAULER WITH RAMP</span>
          </div>
        </div>

        {/* 4. ASYMMETRIC PAIR: CREW UNIFORM + INTENTIONAL DESIGNED PLACEHOLDER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Crew Uniform (Span 6) */}
          <div className="md:col-span-6 space-y-3">
            <AuthenticPhoto
              meta={AUTHENTIC_IMAGES.shirtBrandingMeta}
              aspectRatio="aspect-[4/3]"
              onOpenLightbox={handleOpenLightbox}
            />
            <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400 px-1 pt-1">
              <span className="text-white font-bold tracking-widest uppercase">CREW GEAR & CREST</span>
              <span>OFFICIAL UNIFORM</span>
            </div>
          </div>

          {/* Intentional Media Block Placeholder (Span 6) */}
          <div className="md:col-span-6 space-y-3">
            <ImagePlaceholder
              label="PHOTO PLACEHOLDER"
              sublabel="BLACKSTONE JOB SITE"
              aspectRatio="aspect-[4/3]"
            />
            <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400 px-1 pt-1">
              <span className="text-neutral-400 uppercase">ORANGE COUNTY CLEAROUT</span>
              <span>ADDITIONAL JOB REEL</span>
            </div>
          </div>
        </div>
      </section>

      {/* 03. MINIMAL CLOSING STATEMENT & CTA */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto text-center">
        <div className="p-10 sm:p-14 rounded-2xl bg-[#0c0e12] border border-white/10">
          <span className="text-xs font-mono-tag font-bold tracking-[0.25em] text-[#ff5500] uppercase mb-4 block">
            FAST DISPATCH · ANAHEIM, CA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] font-display leading-tight mb-4">
            LET OUR CREW HANDLE IT.
          </h2>
          <p className="text-neutral-300 max-w-lg mx-auto font-light leading-relaxed mb-8">
            Tell us what needs to go. We'll provide upfront pricing and book your preferred window.
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
