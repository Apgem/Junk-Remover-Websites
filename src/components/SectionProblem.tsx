import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROBLEM_FRAGMENTS } from '../data/content';

interface SectionProblemProps {
  onSelectCategory?: (id: string) => void;
}

export function SectionProblem({ onSelectCategory }: SectionProblemProps) {
  return (
    <section id="problem" className="relative py-28 sm:py-36 bg-[#090a0c] text-white overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xs font-mono-tag tracking-[0.25em] text-[#ff5500] font-bold uppercase">
                02 / THE ACCUMULATION
              </span>
              <span className="w-8 h-[1px] bg-[#ff5500]/40" />
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase max-w-3xl leading-[1.02]">
              "JUNK HAS A WAY OF TAKING OVER."
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-sm font-normal leading-relaxed">
            It starts with a single corner, an extra box, or replaced furniture. Soon, entire garages, storage units, and rooms are surrendered to clutter.
          </p>
        </div>

        {/* Asymmetric Editorial Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Fragment 1: GARAGE (Spans 7 cols, tall) */}
          <div className="lg:col-span-7">
            <CollageCard
              fragment={PROBLEM_FRAGMENTS[0]}
              size="large"
              onSelect={onSelectCategory}
            />
          </div>

          {/* Fragment 2: STORAGE (Spans 5 cols) */}
          <div className="lg:col-span-5 lg:translate-y-8">
            <CollageCard
              fragment={PROBLEM_FRAGMENTS[1]}
              size="medium"
              onSelect={onSelectCategory}
            />
          </div>

          {/* Fragment 3: FURNITURE (Spans 4 cols, offset) */}
          <div className="lg:col-span-4 lg:-translate-y-6">
            <CollageCard
              fragment={PROBLEM_FRAGMENTS[2]}
              size="medium"
              onSelect={onSelectCategory}
            />
          </div>

          {/* Fragment 4: OFFICE (Spans 4 cols) */}
          <div className="lg:col-span-4">
            <CollageCard
              fragment={PROBLEM_FRAGMENTS[3]}
              size="medium"
              onSelect={onSelectCategory}
            />
          </div>

          {/* Fragment 5: YARD & 6: CLEANOUT (Spans 4 cols stacked or combined) */}
          <div className="lg:col-span-4 lg:translate-y-4">
            <CollageCard
              fragment={PROBLEM_FRAGMENTS[4]}
              size="medium"
              onSelect={onSelectCategory}
            />
          </div>
        </div>

        {/* Bottom Transition Ribbon */}
        <div className="mt-20 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-tag text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
            <span className="text-neutral-300 uppercase tracking-wider">
              DON'T LET UNWANTED PIECES CONSUME SQUARE FOOTAGE
            </span>
          </div>
          <span className="text-neutral-500 tracking-widest uppercase">
            BEFORE → BLACKSTONE → CLEAR
          </span>
        </div>
      </div>
    </section>
  );
}

function CollageCard({
  fragment,
  size,
  onSelect,
}: {
  fragment: (typeof PROBLEM_FRAGMENTS)[0];
  size: 'large' | 'medium';
  onSelect?: (id: string) => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      onClick={() => onSelect && onSelect(fragment.id)}
      data-cursor="VIEW"
      className={`group relative overflow-hidden rounded-xl bg-neutral-900 border border-white/10 cursor-pointer shadow-lg w-full ${
        size === 'large' ? 'h-[380px] sm:h-[480px]' : 'h-[300px] sm:h-[380px]'
      }`}
    >
      {/* Background Image with subtle zoom on hover */}
      <img
        src={fragment.image}
        alt={fragment.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center filter grayscale-[25%] contrast-[1.08] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-[#090a0c]/40 to-black/20 group-hover:via-[#090a0c]/25 transition-colors duration-500" />

      {/* Subtle border highlight on hover */}
      <div className="absolute inset-0 border border-[#ff5500]/0 group-hover:border-[#ff5500]/40 rounded-xl transition-colors duration-300 pointer-events-none" />

      {/* Content pinned to bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between">
        <div>
          <span className="text-[10px] font-mono-tag tracking-[0.25em] text-[#ff5500] uppercase font-bold block mb-1">
            FRAGILE TO BULKY
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-white uppercase leading-none">
            {fragment.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-300 opacity-90 max-w-xs group-hover:text-white transition-colors">
            {fragment.subtitle}
          </p>
        </div>

        {/* Interactive Arrow Button */}
        <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#ff5500] border border-white/15 flex items-center justify-center text-white transition-all duration-300 shrink-0 ml-4 group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
}
