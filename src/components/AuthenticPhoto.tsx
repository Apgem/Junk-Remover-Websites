import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Check, ZoomIn, Shield, MapPin, Truck } from 'lucide-react';
import { AuthenticPhotoMeta } from '../data/images';

interface AuthenticPhotoProps {
  meta: AuthenticPhotoMeta;
  aspectRatio?: string;
  className?: string;
  showDetails?: boolean;
  priority?: boolean;
  onOpenLightbox?: (meta: AuthenticPhotoMeta, currentSrc: string) => void;
}

export function AuthenticPhoto({
  meta,
  aspectRatio = 'aspect-[16/10]',
  className = '',
  showDetails = true,
  priority = false,
  onOpenLightbox,
}: AuthenticPhotoProps) {
  const [imgSrc, setImgSrc] = useState<string>(meta.src);
  const [loadFailed, setLoadFailed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if user has uploaded a custom or stored image for this photo slot in localStorage
  useEffect(() => {
    const storageKey = `blackstone_photo_${meta.fallbackFile}`;
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setImgSrc(stored);
      setLoadFailed(false);
    } else {
      setImgSrc(meta.src);
    }
  }, [meta.src, meta.fallbackFile]);

  const handleImageError = () => {
    // If the local file path (e.g. /unnamed (4).jpg) hasn't been written to /public yet,
    // toggle loadFailed to show our high-fidelity authentic visual display card
    setLoadFailed(true);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
    setLoadFailed(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImgSrc(result);
          setLoadFailed(false);
          setIsLoaded(true);
          try {
            localStorage.setItem(`blackstone_photo_${meta.fallbackFile}`, result);
          } catch (err) {
            console.warn('LocalStorage full, preview only', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImgSrc(result);
          setLoadFailed(false);
          setIsLoaded(true);
          try {
            localStorage.setItem(`blackstone_photo_${meta.fallbackFile}`, result);
          } catch (err) {
            console.warn('LocalStorage full, preview only', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`group relative rounded-xl overflow-hidden border border-white/10 bg-[#0f1217] transition-all duration-300 hover:border-white/25 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {/* Hidden file input to allow manual photo upload if user desires */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Main Visual Container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-[#0c0e12]`}>
        {!loadFailed ? (
          <>
            <img
              src={imgSrc}
              alt={meta.title}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading={priority ? 'eager' : 'lazy'}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] ${
                isLoaded ? 'opacity-100 filter brightness-[0.93] contrast-[1.05]' : 'opacity-0'
              }`}
            />
            {/* Elegant gradient overlay for textual legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-transparent to-black/20 opacity-80 pointer-events-none" />
          </>
        ) : (
          /* Editorial Authentic Slate Showcase Card when image is being placed or synced */
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative bg-gradient-to-br from-[#12151c] via-[#0d1015] to-[#090a0e] select-none">
            {/* Subtle background mountain vector silhouette */}
            <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
              <svg width="180" height="180" viewBox="0 0 120 120" fill="none">
                <polygon points="60,10 110,95 10,95" fill="#ffffff" />
              </svg>
            </div>

            {/* Top metadata tags */}
            <div className="flex items-center justify-between gap-2 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                <span className="text-[10px] font-mono-tag font-bold tracking-[0.2em] text-[#ff5500] uppercase">
                  {meta.badge}
                </span>
              </div>
              <span className="text-[11px] font-mono-tag text-neutral-400">
                {meta.fallbackFile}
              </span>
            </div>

            {/* Center Content */}
            <div className="my-auto py-4 z-10">
              <div className="flex items-center gap-3 mb-2 text-white">
                <Camera className="w-5 h-5 text-[#ff5500]" />
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-tight">
                  {meta.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-md">
                {meta.caption}
              </p>
            </div>

            {/* Bottom Proof Details & Quick Upload Trigger */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 z-10 text-xs font-mono-tag text-neutral-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>{meta.location}</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-neutral-400">
                  <Truck className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{meta.equipment}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors border border-white/15"
                title="Click to select or drop your authentic photo file"
              >
                <Upload className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Attach {meta.fallbackFile}</span>
              </button>
            </div>
          </div>
        )}

        {/* Hover Controls for Loaded Image */}
        {!loadFailed && (
          <div
            className={`absolute top-4 right-4 z-20 flex items-center gap-2 transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {onOpenLightbox && (
              <button
                type="button"
                onClick={() => onOpenLightbox(meta, imgSrc)}
                className="p-2 rounded-md bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-transform active:scale-95"
                title="Expand full resolution"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2 rounded-md bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-transform active:scale-95"
              title="Replace or update photo file"
            >
              <Upload className="w-4 h-4 text-[#ff5500]" />
            </button>
          </div>
        )}

        {/* Bottom Caption Overlay on Loaded Photo */}
        {!loadFailed && showDetails && (
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono-tag font-bold tracking-[0.2em] text-[#ff5500] uppercase bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                  {meta.badge}
                </span>
                <span className="text-xs font-mono-tag text-neutral-300 hidden sm:inline">
                  {meta.location}
                </span>
              </div>
              <h4 className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight leading-snug drop-shadow-md">
                {meta.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-lg line-clamp-2 drop-shadow-sm mt-0.5">
                {meta.caption}
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono-tag text-neutral-300 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 shrink-0">
              <Shield className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>AUTHENTIC TEAM PHOTOGRAPHY</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
