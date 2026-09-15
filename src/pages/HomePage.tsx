import { useState } from 'react';
import { ArrowUpRight, Phone, Star, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, REVIEWS } from '../data/content';
import { AUTHENTIC_IMAGES, AuthenticPhotoMeta } from '../data/images';
import { AuthenticPhoto } from '../components/AuthenticPhoto';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';
import { BlackstoneLogo } from '../components/BlackstoneLogo';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimate: () => void;
}

export function HomePage({ onNavigate, onOpenEstimate }: HomePageProps) {
  const [lightboxMeta, setLightboxMeta] = useState<AuthenticPhotoMeta | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleOpenLightbox = (meta: AuthenticPhotoMeta, src: string) => {
    setLightboxMeta(meta);
    setLightboxSrc(src);
  };

  // Map services to real images or placeholders
  const getServiceImage = (serviceId: string) => {
    switch (serviceId) {
      case 'furniture-removal':
        return { isReal: true, meta: AUTHENTIC_IMAGES.pianoMeta };
      case 'garage-cleanouts':
        return { isReal: true, meta: AUTHENTIC_IMAGES.truckBoxesMeta };
      case 'construction-debris':
        return { isReal: true, meta: AUTHENTIC_IMAGES.denaliLoadingMeta };
      default:
        return { isReal: false, label: 'BLACKSTONE PHOTO', sublabel: 'JOB SITE' };
    }
  };

  // Featured Testimonial (Emily Heller's real Google review)
  const featuredReview = REVIEWS[0];

  return (
    <div className="w-full">
      {/* ================================================== */}
      {/* 01. FULL-VIEWPORT CINEMATIC HERO SECTION */}
      {/* ================================================== */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden border-b border-white/10">
        {/* Full-Viewport Cinematic Background Image with Subtle Dark Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src="/hero-bg.jpg"
            alt="Blackstone Junk Removal Crew on site in Anaheim"
            className="w-full h-full object-cover object-center filter brightness-[0.58] contrast-[1.1] transition-all duration-1000 scale-[1.02]"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = '/unnamed (4).jpg';
            }}
          />
          {/* Subtle cinematic gradient overlays tuned so the photograph is vivid while text is razor-sharp */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06080b]/92 via-[#06080b]/70 to-[#06080b]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-transparent to-[#06080b]/75" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Main Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto w-full my-auto py-8">
          {/* Eyebrow / Region Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono-tag tracking-wider text-neutral-200 mb-6 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            <span className="uppercase text-[11px] font-bold tracking-[0.2em] text-[#ff5500]">
              ANAHEIM & ORANGE COUNTY
            </span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-300">OPEN 24 HOURS</span>
          </div>

          {/* Bold, Elegant Display Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.05] mb-6 font-display drop-shadow-md">
            MAKE SPACE.<br />
            <span className="text-neutral-300">FEEL LIGHTER.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-200 font-light max-w-2xl leading-relaxed mb-8 drop-shadow-sm">
            Professional junk removal without the hassle. We do the heavy lifting, clear the space, and leave it clean.
          </p>

          {/* Primary Action Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-4">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-md bg-[#ff5500] hover:bg-[#ff6a1f] text-white font-medium text-sm sm:text-base tracking-wide transition-all shadow-lg shadow-[#ff5500]/30 active:scale-[0.98]"
            >
              <span>GET A FREE ESTIMATE</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base border border-white/20 transition-all backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-[#ff5500]" />
              <span>CALL BLACKSTONE</span>
            </a>
          </div>
        </div>

        {/* Verification & Proof Line */}
        <div className="relative z-10 max-w-4xl mx-auto w-full pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs font-mono-tag text-neutral-300">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">5.0 RATING</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>15 VERIFIED REVIEWS</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#ff5500]" />
            <span>ANAHEIM LOCAL BASE</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#ff5500]" />
            <span>OPEN 24 HOURS</span>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 02. REAL BLACKSTONE SECTION (Let the Photo Breathe) */}
      {/* ================================================== */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto my-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Real Crew Photography (Large & Prominent) */}
          <div className="lg:col-span-7">
            <AuthenticPhoto
              meta={AUTHENTIC_IMAGES.crewMeta}
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
              priority={true}
              onOpenLightbox={handleOpenLightbox}
            />
          </div>

          {/* Pure Human & Operational Copy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono-tag font-bold tracking-[0.25em] text-[#ff5500] uppercase block">
              ANAHEIM OWNED & OPERATED
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] font-display leading-[1.1]">
              REAL PEOPLE.<br />
              <span className="text-neutral-300">REAL WORK.</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              Blackstone Junk Removal is built around straightforward service — showing up on time, doing the work properly, communicating clearly, and leaving the space clean.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs font-mono-tag text-white hover:text-[#ff5500] font-bold tracking-wider uppercase transition-colors"
              >
                <span>READ ABOUT OUR TEAM & STANDARDS</span>
                <ArrowUpRight className="w-4 h-4 text-[#ff5500]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 03. EDITORIAL HORIZONTAL SERVICES LIST */}
      {/* ================================================== */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-4">
          <div>
            <span className="text-xs font-mono-tag font-bold tracking-[0.25em] text-[#ff5500] uppercase mb-2 block">
              CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] font-display">
              WHAT WE REMOVE.
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-mono-tag text-neutral-400 hover:text-[#ff5500] font-bold tracking-wider uppercase transition-colors"
          >
            <span>FULL SERVICES DIRECTORY</span>
            <ArrowUpRight className="w-4 h-4 text-[#ff5500]" />
          </button>
        </div>

        {/* Editorial Horizontal Rows */}
        <div className="divide-y divide-white/10">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredService === index;
            const imgData = getServiceImage(service.id);

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => onNavigate('services')}
                className="group cursor-pointer py-6 sm:py-8 transition-all duration-300 hover:px-4 hover:bg-white/[0.02] rounded-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left: Number + Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="text-xs font-mono-tag text-neutral-400 group-hover:text-[#ff5500] transition-colors font-bold tracking-widest">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-[#ff5500] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-400 font-light mt-1 max-w-xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Action arrow and preview indicator */}
                  <div className="flex items-center gap-4 self-end lg:self-center">
                    <span className="text-xs font-mono-tag text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block">
                      VIEW DETAILS
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#ff5500] flex items-center justify-center text-white group-hover:text-[#ff5500] transition-all group-hover:translate-x-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Optional Expandable Image Preview on Hover */}
                {isHovered && (
                  <div className="mt-4 pt-4 border-t border-white/5 max-w-sm">
                    {imgData.isReal && imgData.meta ? (
                      <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-[16/9]">
                        <img
                          src={imgData.meta.src}
                          alt={imgData.meta.title}
                          className="w-full h-full object-cover filter brightness-90"
                        />
                        <span className="absolute bottom-2 left-2 text-[10px] font-mono-tag text-white bg-black/70 px-2 py-0.5 rounded">
                          REAL BLACKSTONE JOB
                        </span>
                      </div>
                    ) : (
                      <ImagePlaceholder
                        label="BLACKSTONE PHOTO"
                        sublabel={service.title}
                        aspectRatio="aspect-[16/9]"
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================================================== */}
      {/* 04. OUR WORK: EDITORIAL ASYMMETRICAL GALLERY */}
      {/* ================================================== */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-12">
          <div>
            <span className="text-xs font-mono-tag font-bold tracking-[0.25em] text-[#ff5500] uppercase mb-2 block">
              AUTHENTIC CAPTURES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] font-display">
              REAL BLACKSTONE WORK.
            </h2>
          </div>
          <button
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-2 text-xs font-mono-tag text-neutral-400 hover:text-[#ff5500] font-bold tracking-wider uppercase transition-colors"
          >
            <span>VIEW COMPLETE WORK GALLERY</span>
            <ArrowUpRight className="w-4 h-4 text-[#ff5500]" />
          </button>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Photo 1: GMC Denali Driveway (Span 7) */}
          <div className="md:col-span-7 space-y-3">
            <AuthenticPhoto
              meta={AUTHENTIC_IMAGES.denaliLoadingMeta}
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
              onOpenLightbox={handleOpenLightbox}
            />
            <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400 px-1">
              <span className="text-neutral-300 font-bold uppercase">RESIDENTIAL DRIVEWAY CLEAROUT</span>
              <span>GMC DENALI RIG · ANAHEIM</span>
            </div>
          </div>

          {/* Photo 2: Antique Piano Heavy Haul (Span 5) */}
          <div className="md:col-span-5 space-y-3">
            <AuthenticPhoto
              meta={AUTHENTIC_IMAGES.pianoMeta}
              aspectRatio="aspect-[4/3]"
              onOpenLightbox={handleOpenLightbox}
            />
            <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400 px-1">
              <span className="text-neutral-300 font-bold uppercase">HEAVY ITEM REMOVAL</span>
              <span>COMMERCIAL BOX HAULER</span>
            </div>
          </div>
        </div>

        {/* Wide Supporting Banner: Commercial Storage Cargo */}
        <div className="mt-8 space-y-3">
          <AuthenticPhoto
            meta={AUTHENTIC_IMAGES.truckBoxesMeta}
            aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
            onOpenLightbox={handleOpenLightbox}
          />
          <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-400 px-1">
            <span className="text-neutral-300 font-bold uppercase">FULL CAPACITY HAUL</span>
            <span>BOX HAULER WITH RAMP · ORANGE COUNTY</span>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 05. LARGE EDITORIAL TESTIMONIAL (No Dashboard) */}
      {/* ================================================== */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-32">
        <div className="border-t border-b border-white/10 py-16 sm:py-20">
          <span className="text-xs font-mono-tag font-bold tracking-[0.25em] text-[#ff5500] uppercase mb-6 block">
            VERIFIED GOOGLE CLIENT REVIEW
          </span>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-white font-light font-display leading-snug mb-8">
            “{featuredReview.quote}”
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 text-sm font-mono-tag">
            <div>
              <span className="font-bold text-white text-base block">{featuredReview.author}</span>
              <span className="text-neutral-400 text-xs">Anaheim, CA · Google Review</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold ml-1">5.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 06. OFFICIAL BRAND HERITAGE & CREST */}
      {/* ================================================== */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto mb-32">
        <div className="rounded-2xl border border-white/10 bg-[#0c0e12] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex justify-center">
            {/* Real Official Blackstone Mountain Emblem */}
            <BlackstoneLogo variant="badge" size="xl" className="max-w-xs w-full" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono-tag font-bold tracking-[0.2em] text-[#ff5500] uppercase block">
              OFFICIAL BLACKSTONE IDENTITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] font-display leading-tight">
              LOCAL. WOMAN-OWNED. FAMILY OPERATED.
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              Blackstone Junk Removal is based at 1516 E Pinewood Ave in Anaheim, California. We aren't a national broker or lead generator; we are Aaron, Edwin, and our dedicated local crew providing upfront pricing, clear communication, and reliable property cleanouts.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-mono-tag">
              <div>
                <span className="text-[#ff5500] font-bold block mb-1">PHONE / TEXT</span>
                <span className="text-white">(657) 377-6719</span>
              </div>
              <div>
                <span className="text-[#ff5500] font-bold block mb-1">LOCATION</span>
                <span className="text-white">Anaheim, CA 92805</span>
              </div>
              <div>
                <span className="text-[#ff5500] font-bold block mb-1">HOURS</span>
                <span className="text-white">Open 24 Hours · 7 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 07. FULL-WIDTH ARCHITECTURAL FINAL CTA */}
      {/* ================================================== */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto text-center mb-20">
        <div className="p-10 sm:p-16 rounded-2xl bg-[#0d0f14] border border-white/10">
          <span className="text-xs font-mono-tag font-bold tracking-[0.25em] text-[#ff5500] uppercase mb-4 block">
            MAKE SPACE. FEEL LIGHTER.
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] font-display mb-6">
            READY TO CLEAR IT OUT?
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto font-light leading-relaxed mb-10">
            Send us a quick note or give us a call. We'll give you clear answers, upfront pricing, and fast scheduling.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#ff5500] hover:bg-[#ff6a1f] text-white font-medium text-base transition-all shadow-lg shadow-[#ff5500]/20 active:scale-[0.98]"
            >
              <span>GET A FREE ESTIMATE</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-white/5 hover:bg-white/10 text-white font-medium text-base border border-white/15 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#ff5500]" />
              <span>CALL BLACKSTONE</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      <PhotoLightboxModal
        isOpen={!!lightboxMeta}
        meta={lightboxMeta}
        imgSrc={lightboxSrc}
        onClose={() => setLightboxMeta(null)}
      />
    </div>
  );
}
