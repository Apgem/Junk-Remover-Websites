import { motion } from 'motion/react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { REVIEWS } from '../data/content';

export function SectionReviews() {
  return (
    <section id="reviews" className="relative py-28 sm:py-36 bg-[#0c0e11] text-white border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xs font-mono-tag tracking-[0.25em] text-[#ff5500] font-bold uppercase">
                07 / SOCIAL PROOF
              </span>
              <span className="w-8 h-[1px] bg-[#ff5500]/40" />
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase max-w-2xl leading-[1.02]">
              WHAT PEOPLE SAY AFTER WE LEAVE.
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <div className="flex items-center gap-1 text-[#ff5500]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#ff5500]" />
              ))}
            </div>
            <p className="text-xs font-mono-tag text-neutral-400">
              Verified 5.0 Star Ratings on Google, Yelp & Angi
            </p>
          </div>
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 sm:p-10 rounded-2xl bg-neutral-900/70 border border-white/10 hover:border-white/20 flex flex-col justify-between shadow-xl group"
            >
              {/* Top Accent */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#ff5500]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ff5500]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono-tag text-[#ff5500] bg-[#ff5500]/10 px-2.5 py-1 rounded border border-[#ff5500]/20 font-bold uppercase tracking-wider">
                    {rev.highlight}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-neutral-700 group-hover:text-neutral-500 transition-colors mb-4" />

                <blockquote className="text-base sm:text-lg text-neutral-200 font-normal leading-relaxed italic">
                  "{rev.quote}"
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-wide uppercase">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] font-mono-tag text-neutral-400 mt-0.5">
                    {rev.attribution}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#ff5500]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Consistency Note */}
        <div className="mt-16 pt-8 border-t border-white/8 text-center max-w-xl mx-auto">
          <p className="text-xs font-mono-tag text-neutral-400">
            Real feedback from local residents and property owners in Anaheim, CA. No fabricated statistics.
          </p>
        </div>
      </div>
    </section>
  );
}
