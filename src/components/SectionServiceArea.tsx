import { motion } from 'motion/react';
import { MapPin, Phone, Compass, Navigation, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface SectionServiceAreaProps {
  onOpenEstimate: () => void;
}

export function SectionServiceArea({ onOpenEstimate }: SectionServiceAreaProps) {
  const nearbyAreas = [
    'Anaheim Hills',
    'Fullerton',
    'Orange',
    'Garden Grove',
    'Placentia',
    'Buena Park',
    'Yorba Linda',
    'Brea',
  ];

  return (
    <section id="service-area" className="relative py-28 sm:py-36 bg-[#090a0c] text-white border-t border-white/5 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content & Call (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
              <span className="text-[11px] font-mono-tag tracking-[0.25em] font-semibold text-neutral-300 uppercase">
                10 / DISPATCH & TERRITORY
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight uppercase leading-[1.02]">
              WHEN YOU NEED IT GONE, CALL BLACKSTONE.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Based directly in Anaheim, California. We dispatch locally with prompt arrival windows, reliable trucks, and a crew that gets straight to work.
            </p>

            {/* Quick Territory Tags */}
            <div className="pt-2">
              <span className="text-xs font-mono-tag font-bold tracking-widest text-neutral-400 uppercase block mb-3">
                Primary Service Hub & Nearby Communities
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded bg-[#ff5500]/15 border border-[#ff5500]/40 text-[#ff7733] font-mono-tag font-bold text-xs uppercase flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Anaheim (HQ)
                </span>
                {nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 rounded bg-white/[0.04] border border-white/8 text-neutral-300 font-mono-tag text-xs"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-7 py-4 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-mono-tag font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2.5 shadow-lg shadow-[#ff5500]/25 active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>CALL {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <button
                onClick={onOpenEstimate}
                data-cursor="GO"
                className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono-tag font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>GET A FREE ESTIMATE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Stylized Dark Minimal Geographic / Radar Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#14171d] to-[#0d0f13] border border-white/12 p-8 sm:p-10 shadow-2xl">
              {/* Radar Graphic Grid SVG */}
              <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center">
                <svg
                  className="w-full h-full max-w-[340px] max-h-[340px]"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Concentric Radar Rings */}
                  <circle cx="200" cy="200" r="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="130" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="80" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="30" stroke="#ff5500" strokeWidth="1.5" strokeOpacity="0.4" />

                  {/* Crosshairs */}
                  <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                  {/* Anaheim Core Point */}
                  <circle cx="200" cy="200" r="7" fill="#ff5500" />
                  <circle cx="200" cy="200" r="18" stroke="#ff5500" strokeWidth="1" opacity="0.6">
                    <animate attributeName="r" values="7;28;7" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
                  </circle>

                  {/* Surrounding Nodes */}
                  <circle cx="260" cy="140" r="4" fill="#6c7482" />
                  <circle cx="150" cy="130" r="4" fill="#6c7482" />
                  <circle cx="250" cy="270" r="4" fill="#6c7482" />
                  <circle cx="130" cy="240" r="4" fill="#6c7482" />

                  {/* Connecting Vectors */}
                  <line x1="200" y1="200" x2="260" y2="140" stroke="#ff5500" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
                  <line x1="200" y1="200" x2="150" y2="130" stroke="#ff5500" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
                  <line x1="200" y1="200" x2="250" y2="270" stroke="#ff5500" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
                  <line x1="200" y1="200" x2="130" y2="240" stroke="#ff5500" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
                </svg>

                {/* Pin callout banner over map */}
                <div className="absolute top-6 left-6 p-3 bg-neutral-900/90 border border-white/10 rounded-lg">
                  <span className="text-[10px] font-mono-tag font-bold tracking-widest text-[#ff5500] uppercase block">
                    SERVICE DISPATCH
                  </span>
                  <span className="text-xs font-mono-tag font-semibold text-white">
                    33.8366° N, 117.9143° W
                  </span>
                </div>

                <div className="absolute bottom-6 right-6 p-3 bg-neutral-900/90 border border-white/10 rounded-lg text-right">
                  <span className="text-[10px] font-mono-tag text-neutral-400 uppercase block">
                    RESPONSE TIME
                  </span>
                  <span className="text-xs font-mono-tag font-bold text-white">
                    SAME DAY / 7 DAYS A WEEK
                  </span>
                </div>
              </div>

              {/* Coordinates info footer */}
              <div className="mt-4 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono-tag text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#ff5500]" /> Anaheim, CA Base
                </span>
                <span>Fast Dispatch Across Orange County</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
