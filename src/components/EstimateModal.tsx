import React, { useState } from 'react';
import { X, Phone, CheckCircle2, Upload } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Anaheim',
    items: '',
    photos: [] as File[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

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
    }, 700);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-xl w-full bg-[#12151b] border border-white/15 rounded-xl shadow-2xl overflow-hidden my-8"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#0d0f14] border-b border-white/10 flex items-start justify-between">
          <div>
            <span className="text-[10px] font-mono-tag font-bold text-[#ff5500] uppercase tracking-widest block mb-1">
              FAST & UPFRONT QUOTE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Request Free Estimate
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1">
              Serving Anaheim & Orange County. Open 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-2xl font-bold text-white font-display">Request Submitted</h4>
              <p className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}. The Blackstone team is reviewing your request and will reach out shortly at {formData.phone}.
              </p>
              <div className="pt-4 border-t border-white/10">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-mono-tag text-[#ff5500] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Need instant answers? Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tag text-neutral-300 uppercase mb-1.5">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Robert Miller"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded bg-[#090a0c] border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff5500] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-tag text-neutral-300 uppercase mb-1.5">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(714) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded bg-[#090a0c] border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff5500] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tag text-neutral-300 uppercase mb-1.5">
                  WHAT NEEDS TO GO? *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g., Heavy sofa, garage boxes, broken refrigerator, mattress..."
                  value={formData.items}
                  onChange={(e) => setFormData(prev => ({ ...prev, items: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded bg-[#090a0c] border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff5500] text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tag text-neutral-300 uppercase mb-1.5">
                  PHOTOS (OPTIONAL)
                </label>
                <label className="border border-dashed border-white/15 hover:border-white/30 rounded p-4 flex items-center justify-center gap-2 cursor-pointer bg-[#090a0c] text-neutral-400 hover:text-white transition-colors">
                  <Upload className="w-4 h-4 text-[#ff5500]" />
                  <span className="text-xs">Attach item or space photos</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                {formData.photos.length > 0 && (
                  <span className="text-[11px] font-mono-tag text-neutral-400 mt-1 block">
                    {formData.photos.length} file(s) selected
                  </span>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded bg-[#ff5500] hover:bg-[#ff6a1f] text-white font-semibold text-xs font-mono-tag tracking-wider transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SEND ESTIMATE REQUEST →'}
                </button>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono-tag text-neutral-500">
                <span>Or dial direct:</span>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-[#ff5500]">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
