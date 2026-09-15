import React from 'react';
import { X, MapPin, Truck, ShieldCheck, Download } from 'lucide-react';
import { AuthenticPhotoMeta } from '../data/images';

interface PhotoLightboxModalProps {
  isOpen: boolean;
  meta: AuthenticPhotoMeta | null;
  imgSrc: string | null;
  onClose: () => void;
}

export function PhotoLightboxModal({
  isOpen,
  meta,
  imgSrc,
  onClose,
}: PhotoLightboxModalProps) {
  if (!isOpen || !meta) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#0f1217] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0c0f]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono-tag font-bold tracking-[0.2em] text-[#ff5500] uppercase bg-[#ff5500]/10 px-2.5 py-1 rounded border border-[#ff5500]/25">
              {meta.badge}
            </span>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
              {meta.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image View */}
        <div className="relative flex-1 min-h-[50vh] max-h-[70vh] bg-black flex items-center justify-center overflow-hidden p-2">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={meta.title}
              className="max-h-[68vh] max-w-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="text-center p-8 text-neutral-400">
              <p>Image not loaded</p>
            </div>
          )}
        </div>

        {/* Footer Details */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0a0c0f] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-tag">
          <div>
            <p className="text-neutral-300 font-sans text-sm font-normal mb-1">
              {meta.caption}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
                {meta.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-neutral-500" />
                {meta.equipment}
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                VERIFIED AUTHENTIC CAPTURE
              </span>
            </div>
          </div>

          <div className="text-neutral-500 shrink-0">
            Source: {meta.fallbackFile}
          </div>
        </div>
      </div>
    </div>
  );
}
