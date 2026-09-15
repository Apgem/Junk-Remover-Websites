import { Star, ArrowUpRight, Phone } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS } from '../data/content';
import { PageId } from '../types';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimate: () => void;
}

export function ReviewsPage({ onNavigate: _onNavigate, onOpenEstimate }: ReviewsPageProps) {
  // Featured primary review: Darryl Taylor
  const featured = REVIEWS[1];
  const otherReviews = REVIEWS.filter((_, idx) => idx !== 1);

  return (
    <div className="w-full pt-32 pb-24">
      {/* 01. REVIEWS HERO: REFINED & SIMPLE */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-20">
        <div className="border-b border-white/10 pb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.05] mb-8 font-display">
            DON'T TAKE<br />
            <span className="text-neutral-300">OUR WORD FOR IT.</span>
          </h1>

          {/* Simple, Non-Dashboard Rating Indicator */}
          <div className="flex items-center gap-4 text-base sm:text-lg font-mono-tag">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white text-xl">5.0 ★</span>
            <span className="text-neutral-400">·</span>
            <span className="text-neutral-300 tracking-wider">15 VERIFIED GOOGLE REVIEWS</span>
          </div>
        </div>
      </section>

      {/* 02. ONE LARGE FEATURED TESTIMONIAL */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-24">
        <div className="p-8 sm:p-14 rounded-2xl bg-[#0c0e12] border border-white/10">
          <span className="text-xs font-mono-tag font-bold tracking-[0.25em] text-[#ff5500] uppercase mb-4 block">
            FEATURED CLIENT TESTIMONIAL
          </span>

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-white font-light font-display leading-snug mb-8">
            “{featured.quote}”
          </blockquote>

          {/* Owner Response (Tasteful & Integrated) */}
          {featured.ownerResponse && (
            <div className="mb-8 pl-5 border-l-2 border-white/20 text-sm text-neutral-400 font-light italic">
              <span className="text-xs font-mono-tag text-neutral-300 not-italic uppercase tracking-wider block mb-1">
                Response from Blackstone Junk Removal:
              </span>
              "{featured.ownerResponse}"
            </div>
          )}

          <div className="flex items-center justify-between pt-6 border-t border-white/10 text-sm font-mono-tag">
            <div>
              <span className="font-bold text-white text-base block">{featured.author}</span>
              <span className="text-xs text-neutral-400">Anaheim, CA · Google Review</span>
            </div>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03. EDITORIAL GRID OF VERIFIED TESTIMONIALS (Different Visual Scales) */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherReviews.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-xl bg-[#090b0f] border border-white/5 flex flex-col justify-between space-y-6 hover:border-white/15 transition-colors"
            >
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-base text-neutral-200 font-light leading-relaxed mb-4">
                  “{review.quote}”
                </p>

                {review.ownerResponse && (
                  <div className="pt-3 border-t border-white/5 text-xs text-neutral-400 italic">
                    <span className="text-[11px] font-mono-tag text-neutral-300 not-italic block mb-0.5">
                      Blackstone:
                    </span>
                    "{review.ownerResponse}"
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tag text-neutral-400">
                <span className="font-bold text-white">{review.author}</span>
                <span>{review.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04. FINAL REVIEWS CTA */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto text-center">
        <div className="p-10 sm:p-14 rounded-2xl bg-[#0c0e12] border border-white/10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] font-display leading-tight mb-4">
            EXPERIENCE THE DIFFERENCE.
          </h2>
          <p className="text-neutral-300 max-w-lg mx-auto font-light leading-relaxed mb-8">
            Prompt arrival, careful heavy lifting, and spaces left swept clean. Contact us for an upfront quote.
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
    </div>
  );
}
