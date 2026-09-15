import React from 'react';

interface ImagePlaceholderProps {
  label?: string;
  sublabel?: string;
  aspectRatio?: string;
  className?: string;
  heightClass?: string;
}

export function ImagePlaceholder({
  label = 'BLACKSTONE PHOTO',
  sublabel = 'REAL JOB SITE',
  aspectRatio = 'aspect-[16/10]',
  className = '',
  heightClass = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-white/10 bg-[#0d0f14] group flex items-center justify-center select-none ${aspectRatio} ${heightClass} ${className}`}
    >
      {/* Subtle architectural grain / grid background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Subtle corner framing marks */}
      <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/20" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/20" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/20" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/20" />

      {/* Central Editorial Label */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-4">
        <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center mb-3 text-neutral-400 group-hover:border-[#ff5500]/50 group-hover:text-[#ff5500] transition-colors">
          <div className="w-2 h-2 rounded-sm bg-neutral-400 group-hover:bg-[#ff5500] transition-colors" />
        </div>
        
        <span className="text-[11px] font-mono-tag font-bold tracking-[0.25em] text-neutral-200 uppercase mb-1">
          {label}
        </span>
        
        {sublabel && (
          <span className="text-[10px] font-mono-tag tracking-[0.2em] text-neutral-400 uppercase">
            {sublabel}
          </span>
        )}
      </div>

      {/* Subtle hover wash */}
      <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}
