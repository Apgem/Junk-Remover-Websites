import React, { useState } from 'react';
import { Phone, MapPin, Clock, ArrowUpRight, CheckCircle2, Upload, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export function ContactPage({ onNavigate: _onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    items: '',
    photos: [] as File[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, photos: [...prev.photos, ...files] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full pt-32 pb-24">
      {/* 01. CONTACT HERO */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-20">
        <div className="border-b border-white/10 pb-12">
          <span className="text-xs font-mono-tag font-bold tracking-[0.25em] text-[#ff5500] uppercase mb-4 block">
            DIRECT ESTIMATES & DISPATCH · ANAHEIM, CA
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.05] mb-6 font-display">
            READY TO<br />
            <span className="text-neutral-300">CLEAR IT OUT?</span>
          </h1>
          <p className="text-lg sm:text-2xl text-neutral-300 font-light max-w-2xl leading-relaxed">
            Tell us what needs to go. We'll handle the heavy lifting.
          </p>
        </div>
      </section>

      {/* 02. ELEGANT TWO-COLUMN LAYOUT */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: DIRECT CALL & BUSINESS ESSENTIALS (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Call Blackstone Block */}
            <div className="space-y-4">
              <span className="text-xs font-mono-tag font-bold text-[#ff5500] uppercase tracking-wider block">
                IMMEDIATE SERVICE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                CALL BLACKSTONE
              </h2>
              <p className="text-base text-neutral-300 font-light leading-relaxed">
                Call or text anytime for direct pricing and same-day or scheduled availability.
              </p>

              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-[#ff5500] hover:bg-[#ff6a1f] text-white font-semibold text-lg transition-colors shadow-lg shadow-[#ff5500]/25"
                >
                  <Phone className="w-5 h-5" />
                  <span>{BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono-tag text-neutral-400 pt-2">
                <Clock className="w-4 h-4 text-[#ff5500]" />
                <span>Open 24 Hours · 7 Days a Week</span>
              </div>
            </div>

            {/* Base Location & Socials */}
            <div className="pt-8 border-t border-white/10 space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff5500] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-white block">Anaheim, CA 92805</span>
                  <span className="text-xs text-neutral-400 font-light">
                    Serving Anaheim, Fullerton, Orange, Santa Ana, Irvine, and all of Orange County.
                  </span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="pt-4 flex flex-col gap-2.5 text-xs font-mono-tag">
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-[#ff5500]" />
                    <span>Instagram: {BUSINESS_INFO.instagramHandle}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Facebook className="w-4 h-4 text-[#ff5500]" />
                    <span>Facebook: {BUSINESS_INFO.facebookName}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: GET A FREE ESTIMATE (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#0c0e12] border border-white/10">
              <span className="text-xs font-mono-tag font-bold tracking-[0.2em] text-[#ff5500] uppercase mb-2 block">
                ONLINE REQUEST
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-2">
                GET A FREE ESTIMATE
              </h2>
              <p className="text-sm text-neutral-400 font-light mb-8">
                Send a description or photos of the items. We'll reply with a straightforward quote.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="text-2xl font-bold text-white font-display">Request Sent</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you, {formData.name}. Our Anaheim dispatch team will review your notes and contact you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', items: '', photos: [] });
                    }}
                    className="text-xs font-mono-tag text-[#ff5500] hover:underline uppercase tracking-wider block mx-auto pt-4"
                  >
                    SEND ANOTHER REQUEST
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono-tag text-neutral-300 uppercase tracking-wider mb-2 font-medium">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-md bg-[#07080a] border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff5500] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tag text-neutral-300 uppercase tracking-wider mb-2 font-medium">
                      PHONE *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(714) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-md bg-[#07080a] border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff5500] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tag text-neutral-300 uppercase tracking-wider mb-2 font-medium">
                      WHAT NEEDS TO GO? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="List the items or describe the job (e.g. garage cleanout, mattress, sofa, construction debris)"
                      value={formData.items}
                      onChange={(e) => setFormData(prev => ({ ...prev, items: e.target.value }))}
                      className="w-full px-4 py-3 rounded-md bg-[#07080a] border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff5500] transition-colors text-sm resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tag text-neutral-300 uppercase tracking-wider mb-2 font-medium">
                      OPTIONAL PHOTOS
                    </label>
                    <label className="border border-dashed border-white/20 hover:border-white/40 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-[#07080a]">
                      <Upload className="w-5 h-5 text-[#ff5500] mb-2" />
                      <span className="text-xs text-neutral-300">
                        Upload or drag photos of your items
                      </span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>

                    {formData.photos.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {formData.photos.map((file, idx) => (
                          <span key={idx} className="text-xs font-mono-tag px-2.5 py-1 rounded bg-white/10 text-neutral-300">
                            {file.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-md bg-[#ff5500] hover:bg-[#ff6a1f] text-white font-medium tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff5500]/20 active:scale-[0.99] disabled:opacity-50 text-sm"
                  >
                    <span>{isSubmitting ? 'SENDING REQUEST...' : 'SEND REQUEST →'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
