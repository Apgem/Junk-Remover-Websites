import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Users, Check, ArrowRight } from 'lucide-react';
import { ASSET_IMAGES } from '../data/images';
import { BUSINESS_INFO } from '../data/content';

export function SectionHuman({ onOpenEstimate }: { onOpenEstimate: () => void }) {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#090a0c] text-white border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Documentary Photographic Portrait (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/12 shadow-2xl p-2 group">
              <div className="relative h-[420px] sm:h-[540px] w-full rounded-xl overflow-hidden">
                <img
                  src={ASSET_IMAGES.crewTruckLoad}
                  alt="Aaron and Edwin - Blackstone Junk Removal Crew in Anaheim, California"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-transparent to-transparent opacity-90" />

                {/* Floating Crew Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono-tag tracking-[0.2em] font-bold text-[#ff5500] uppercase block">
                        THE BLACKSTONE CREW
                      </span>
                      <h4 className="text-base sm:text-lg font-bold font-display text-white uppercase mt-0.5">
                        EDWIN & AARON
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono-tag text-neutral-400 block">
                        Anaheim, CA
                      </span>
                      <span className="text-[10px] font-mono-tag text-neutral-500 uppercase">
                        Hands-On & Reliable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Brand Ethos (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
              <span className="text-[11px] font-mono-tag tracking-[0.25em] font-semibold text-neutral-300 uppercase">
                08 / WHO WE ARE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight uppercase leading-[1.02]">
              LOCAL PEOPLE. REAL WORK. NO SHORTCUTS.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Blackstone is built around showing up, doing the work properly, and making the process easier for the people who call.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              We aren't a nameless dispatch center or an automated app. When you schedule with Blackstone, Edwin, Aaron, and our local Anaheim team show up at your door with clean equipment, clear communication, and the muscle to handle any job.
            </p>

            {/* Crew Checklist */}
            <div className="pt-2 space-y-3">
              {[
                'Hard-working, punctual, and respectful of your home & property',
                'Clear communication before, during, and after every pickup',
                'Equipped for heavy, awkward, and bulky furniture pieces',
                'Always leave the cleared site clean and swept',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff5500]/15 border border-[#ff5500]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#ff5500]" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-300 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Local Badge & Direct Call */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenEstimate}
                data-cursor="GO"
                className="px-6 py-3.5 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-mono-tag font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#ff5500]/20"
              >
                <span>REQUEST AN ESTIMATE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="px-4 py-3 bg-neutral-900 border border-white/8 rounded-lg flex items-center gap-2.5 text-xs text-neutral-400 font-mono-tag">
                <MapPin className="w-4 h-4 text-[#ff5500] shrink-0" />
                <span>Operating locally in Anaheim, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
