import { motion } from 'motion/react';
import { ArrowRight, Phone, MessageSquare, Truck, Sparkles } from 'lucide-react';
import { HOW_IT_WORKS, BUSINESS_INFO } from '../data/content';

interface SectionHowItWorksProps {
  onOpenEstimate: () => void;
}

export function SectionHowItWorks({ onOpenEstimate }: SectionHowItWorksProps) {
  const stepIcons = [MessageSquare, Truck, Sparkles];

  return (
    <section id="how-it-works" className="relative py-28 sm:py-36 bg-[#0c0e11] text-white border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span className="text-[11px] font-mono-tag tracking-[0.25em] font-semibold text-neutral-300 uppercase">
              05 / THE PROCESS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase leading-[1.02]">
            THREE STEPS. ONE CLEAR SPACE.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            No endless back-and-forth or vague quotes. A straightforward process designed to give you your space back without friction.
          </p>
        </div>

        {/* The 3 Big Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {HOW_IT_WORKS.map((step, idx) => {
            const IconComponent = stepIcons[idx];

            return (
              <motion.div
                key={step.number}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/20 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-lg"
              >
                {/* Large architectural watermark number */}
                <div className="text-7xl sm:text-8xl font-black font-display text-white/[0.06] group-hover:text-[#ff5500]/15 transition-colors absolute -top-4 -right-2 select-none pointer-events-none">
                  {step.number}
                </div>

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] group-hover:bg-[#ff5500] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-xs font-mono-tag font-bold tracking-widest text-[#ff5500]">
                      PHASE {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-white mb-4 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs font-mono-tag text-neutral-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                    <span>{step.subtext}</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-neutral-900/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5500] animate-pulse shrink-0" />
            <div>
              <h4 className="text-sm sm:text-base font-bold font-display uppercase text-white">
                READY TO CLEAR YOUR SPACE TODAY?
              </h4>
              <p className="text-xs text-neutral-400">
                Operating 7 days a week across Anaheim, CA and surrounding communities.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenEstimate}
              data-cursor="GO"
              className="flex-1 sm:flex-none px-6 py-3 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-mono-tag font-bold text-xs uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap shadow-md"
            >
              GET AN ESTIMATE
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 sm:flex-none px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono-tag font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
