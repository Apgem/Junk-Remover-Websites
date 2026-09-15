import React from 'react';

interface BlackstoneLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'horizontal' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

export function BlackstoneLogo({
  className = '',
  variant = 'full',
  size = 'md',
  onClick,
}: BlackstoneLogoProps) {
  // Dimensions map
  const markSize = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  }[size];

  // If user requested the full square emblem badge (exact 1:1 with unnamed (2).png)
  if (variant === 'badge') {
    return (
      <div
        onClick={onClick}
        className={`relative rounded-2xl overflow-hidden border border-white/20 bg-[#0b0d11] p-3 shadow-2xl transition-all duration-300 hover:border-white/40 ${
          onClick ? 'cursor-pointer active:scale-98' : ''
        } ${className}`}
      >
        <div className="relative aspect-square w-full flex items-center justify-center">
          <img
            src="/logo.svg"
            alt="Blackstone Junk Removal Official Logo"
            className="w-full h-full object-contain rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  // Mark-only icon
  if (variant === 'mark') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center justify-center shrink-0 select-none ${
          onClick ? 'cursor-pointer' : ''
        } ${className}`}
      >
        <div className={`${markSize} relative flex items-center justify-center bg-[#0d0f14] border border-white/20 rounded-lg p-1`}>
          <img
            src="/logo.svg"
            alt="Blackstone Logo Mark"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  // Standard Header / Horizontal / Full Variant
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 select-none ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Official Mountain Emblem Container */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center bg-[#0b0d11] border border-white/20 rounded-lg p-1 shadow-md overflow-hidden">
        <img
          src="/logo.svg"
          alt="Blackstone Junk Removal"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Typography Block */}
      <div className="flex flex-col">
        <span className="font-extrabold text-xl sm:text-2xl tracking-[0.06em] text-white font-serif uppercase leading-none">
          BLACKSTONE
        </span>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-[10px] font-bold font-mono-tag tracking-[0.24em] text-[#ff5500] uppercase leading-none">
            JUNK REMOVAL
          </span>
          <span className="text-neutral-600 text-[9px] leading-none">·</span>
          <span className="text-[9px] font-mono-tag tracking-[0.15em] text-neutral-400 uppercase leading-none hidden sm:inline">
            ANAHEIM, CA
          </span>
        </div>
      </div>
    </div>
  );
}
