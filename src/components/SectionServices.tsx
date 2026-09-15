import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface SectionServicesProps {
  onSelectService: (serviceId: string) => void;
}

export function SectionServices({ onSelectService }: SectionServicesProps) {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES[0]);
  const [hoveredId, setHoveredId] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#090a0c] text-white border-t border-white/5 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xs font-mono-tag tracking-[0.25em] text-[#ff5500] font-bold uppercase">
                04 / CAPABILITIES
              </span>
              <span className="w-8 h-[1px] bg-[#ff5500]/40" />
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase max-w-3xl leading-[1.02]">
              "IF YOU DON'T WANT IT, WE'LL HANDLE THE HEAVY PART."
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-normal leading-relaxed">
            From single bulky items to entire residential and property cleanouts. We provide all the muscle, loading, and disposal.
          </p>
        </div>

        {/* Editorial Split: Left List / Right Active Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: The Editorial List (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-white/10">
            {SERVICES.map((service) => {
              const isSelected = activeService.id === service.id;
              const isHovered = hoveredId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => {
                    setActiveService(service);
                    setHoveredId(service.id);
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => onSelectService(service.id)}
                  data-cursor="GO"
                  className={`group py-7 sm:py-8 cursor-pointer transition-all duration-300 relative ${
                    isSelected ? 'pl-2 sm:pl-4' : 'hover:pl-2'
                  }`}
                >
                  {/* Subtle active line indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeServiceIndicator"
                      className="absolute left-0 top-6 bottom-6 w-1 bg-[#ff5500] rounded-full"
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs sm:text-sm font-mono-tag font-bold tracking-widest transition-colors ${
                            isSelected ? 'text-[#ff5500]' : 'text-neutral-500 group-hover:text-neutral-300'
                          }`}
                        >
                          {service.number}
                        </span>
                        <h3
                          className={`text-xl sm:text-2xl lg:text-3xl font-bold font-display uppercase tracking-tight transition-colors ${
                            isSelected ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed">
                        {service.description}
                      </p>

                      {/* Tag chips */}
                      <div className="pt-2 flex flex-wrap gap-1.5 sm:gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center text-[10px] sm:text-[11px] font-mono-tag px-2.5 py-1 rounded bg-white/[0.04] text-neutral-300 border border-white/6 group-hover:border-white/15 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow action */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#ff5500] text-white rotate-0'
                          : 'bg-white/5 text-neutral-400 group-hover:text-white group-hover:bg-white/10'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Editorial Photographic Preview (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/12 shadow-2xl p-2">
              <div className="relative h-[360px] sm:h-[460px] w-full rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter contrast-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-black/30 to-transparent" />

                    {/* Card Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono-tag font-bold tracking-[0.25em] text-[#ff5500] uppercase">
                          CATEGORY {activeService.number}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold font-display text-white uppercase tracking-tight">
                        {activeService.title}
                      </h4>
                      <p className="mt-1 text-xs text-neutral-300">
                        {activeService.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                        <span className="text-[11px] font-mono-tag text-neutral-400">
                          Anaheim, CA & Surrounding Area
                        </span>
                        <button
                          onClick={() => onSelectService(activeService.id)}
                          className="text-xs font-mono-tag font-bold text-[#ff5500] hover:text-[#ff7733] flex items-center gap-1 uppercase tracking-wider"
                        >
                          Request Estimate <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
