import { useState } from 'react';
import { ArrowUpRight, Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { AUTHENTIC_IMAGES, AuthenticPhotoMeta } from '../data/images';
import { AuthenticPhoto } from '../components/AuthenticPhoto';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimate: () => void;
}

export function ServicesPage({ onNavigate: _onNavigate, onOpenEstimate }: ServicesPageProps) {
  const [lightboxMeta, setLightboxMeta] = useState<AuthenticPhotoMeta | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [activeRow, setActiveRow] = useState<number | null>(0); // First item open/active by default

  const handleOpenLightbox = (meta: AuthenticPhotoMeta, src: string) => {
    setLightboxMeta(meta);
    setLightboxSrc(src);
  };

  // Helper to map specific services to real authentic photos or placeholders
  const getServicePhotoMeta = (serviceId: string): AuthenticPhotoMeta | null => {
    switch (serviceId) {
      case 'furniture-removal':
        return AUTHENTIC_IMAGES.pianoMeta; // Antique upright piano heavy haul
      case 'garage-cleanouts':
        return AUTHENTIC_IMAGES.truckBoxesMeta; // Commercial hauler storage clearance
      case 'construction-debris':
        return AUTHENTIC_IMAGES.denaliLoadingMeta; // GMC Denali HD heavy-duty haul
      case 'property-cleanouts':
        return AUTHENTIC_IMAGES.crewMeta; // Crew ready for full property cleanout
      default:
        return null;
    }
  };

  return (
    <div className="w-full pt-32 pb-24">
      {/* 01. SERVICES HERO */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-20">
        <div className="border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tag tracking-wider text-neutral-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span className="uppercase text-[11px] font-bold tracking-[0.2em] text-[#ff5500]">
              SERVICES DIRECTORY
            </span>
            <span className="text-neutral-500">|</span>
            <span>ANAHEIM & ORANGE COUNTY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.05] mb-6 font-display">
            JUNK OUT.<br />
            <span className="text-neutral-300">SPACE BACK.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
            From single awkward heavy items to entire estate or garage clearouts, Blackstone handles the lifting and leaves the space clean.
          </p>
        </div>
      </section>

      {/* 02. EDITORIAL SERVICES LIST (Not 7 identical cards) */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto mb-28">
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {SERVICES.map((service, index) => {
            const photoMeta = getServicePhotoMeta(service.id);
            const isExpanded = activeRow === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveRow(index)}
                className="py-8 sm:py-10 transition-all group"
              >
                {/* Header Line */}
                <div
                  onClick={() => setActiveRow(isExpanded ? null : index)}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="text-xs font-mono-tag text-neutral-400 group-hover:text-[#ff5500] transition-colors font-bold tracking-widest">
                      {service.number}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display group-hover:text-[#ff5500] transition-colors tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs font-mono-tag text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block">
                      {isExpanded ? 'ACTIVE' : 'EXPLORE'}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#ff5500] flex items-center justify-center text-white group-hover:text-[#ff5500] transition-all group-hover:translate-x-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Content Area (Shows on Hover/Active) */}
                {isExpanded && (
                  <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
                    <div className="lg:col-span-7 space-y-6">
                      <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                        {service.description}
                      </p>

                      <div>
                        <span className="text-xs font-mono-tag font-semibold text-neutral-400 uppercase tracking-wider block mb-3">
                          TYPICAL ITEMS REMOVED:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-sm text-neutral-300">
                              <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        <button
                          onClick={onOpenEstimate}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#ff5500] hover:bg-[#ff6a1f] text-white text-xs font-semibold tracking-wider font-mono-tag transition-colors"
                        >
                          <span>GET AN ESTIMATE FOR THIS</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                        <a
                          href={`tel:${BUSINESS_INFO.phoneRaw}`}
                          className="inline-flex items-center gap-2 text-xs font-mono-tag text-neutral-400 hover:text-white transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
                          <span>(657) 377-6719</span>
                        </a>
                      </div>
                    </div>

                    {/* Image Area: Real photo or designed ImagePlaceholder */}
                    <div className="lg:col-span-5">
                      {photoMeta ? (
                        <AuthenticPhoto
                          meta={photoMeta}
                          aspectRatio="aspect-[16/10]"
                          onOpenLightbox={handleOpenLightbox}
                        />
                      ) : (
                        <ImagePlaceholder
                          label="BLACKSTONE PHOTO"
                          sublabel={service.title}
                          aspectRatio="aspect-[16/10]"
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 03. CLEAN CLOSING CTA */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto text-center">
        <div className="p-10 sm:p-14 rounded-2xl bg-[#0c0e12] border border-white/10">
          <span className="text-xs font-mono-tag font-bold tracking-[0.2em] text-[#ff5500] uppercase mb-3 block">
            NEED ADVICE ON A SPECIFIC ITEM?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] font-display mb-4">
            NOT SURE IF WE TAKE IT?
          </h2>
          <p className="text-neutral-300 max-w-md mx-auto mb-8 font-light leading-relaxed">
            Give us a quick call or text with a description or photo. We're open 24 hours and ready to give you clear answers.
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
