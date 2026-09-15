import { motion } from 'motion/react';
import { PRINCIPLES } from '../data/content';
import { BlackstoneLogo } from './BlackstoneLogo';

export function SectionStandard() {
  return (
    <section id="standard" className="relative py-28 sm:py-36 bg-[#090a0c] text-white border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Mountain Crest Accent */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span className="text-[11px] font-mono-tag tracking-[0.25em] font-semibold text-neutral-300 uppercase">
              06 / BRAND MANIFESTO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight uppercase leading-[0.98] text-balance">
            "WE DON'T JUST REMOVE THE JUNK. WE RESPECT THE SPACE IT CAME FROM."
          </h2>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-neutral-700" />
            <span className="text-xs font-mono-tag tracking-[0.3em] font-bold text-neutral-400 uppercase">
              THE BLACKSTONE STANDARD
            </span>
            <span className="h-[1px] w-12 bg-neutral-700" />
          </div>
        </div>

        {/* Four Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRINCIPLES.map((item) => (
            <motion.div
              key={item.number}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="p-8 rounded-2xl bg-neutral-900/50 border border-white/8 hover:border-[#ff5500]/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                <span className="text-sm font-mono-tag font-bold text-[#ff5500] tracking-widest block mb-6">
                  PRINCIPLE {item.number}
                </span>

                <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight text-white mb-4 leading-snug group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tag text-neutral-600 group-hover:text-neutral-400 transition-colors">
                <span>VERIFIED STANDARD</span>
                <span>ANAHEIM, CA</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Brand Ethos Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="shrink-0 p-3 bg-neutral-900 rounded-xl border border-white/10">
              <BlackstoneLogo variant="mark" size="lg" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold font-display text-white uppercase tracking-tight">
                CLEAR SPACE IS A FEELING.
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-xl">
                When you invite a removal crew onto your property, professionalism and respect matter just as much as physical capability. We treat your property like our own.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div className="text-right">
              <span className="block text-2xl font-black font-display text-white">100%</span>
              <span className="text-[10px] font-mono-tag text-neutral-400 uppercase tracking-widest">
                AREA SWEPT CLEAN
              </span>
            </div>
            <span className="h-10 w-[1px] bg-white/10" />
            <div className="text-right">
              <span className="block text-2xl font-black font-display text-[#ff5500]">0</span>
              <span className="text-[10px] font-mono-tag text-neutral-400 uppercase tracking-widest">
                SURPRISE FEES
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
