import { useState, useRef, useCallback, type TouchEvent, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, CheckCircle, Sparkles, MoveHorizontal } from 'lucide-react';
import { ASSET_IMAGES } from '../data/images';

export function SectionTransformation({ onOpenEstimate }: { onOpenEstimate: () => void }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformation" className="relative py-28 sm:py-36 bg-[#0c0e11] text-white border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span className="text-[11px] font-mono-tag tracking-[0.25em] font-semibold text-neutral-300 uppercase">
              03 / THE TRANSFORMATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase leading-[1.02]">
            FROM OVERWHELMING TO UNDER CONTROL.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            The real service isn't just loading a truck. It's the moment you step into the room after we leave and take a deep breath.
          </p>
        </div>

        {/* Interactive Before / After Slider Container */}
        <div className="max-w-5xl mx-auto">
          {/* Preset Buttons for Quick Interaction */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2 text-xs font-mono-tag text-neutral-400">
              <MoveHorizontal className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>DRAG SLIDER OR TAP PRESETS:</span>
            </div>

            <div className="flex items-center gap-1.5 bg-neutral-900/80 p-1 rounded-lg border border-white/10 text-xs font-mono-tag">
              <button
                onClick={() => setSliderPosition(15)}
                className={`px-3 py-1 rounded transition-colors ${
                  sliderPosition < 30 ? 'bg-[#ff5500] text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                CLEAR (AFTER)
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className={`px-3 py-1 rounded transition-colors ${
                  sliderPosition >= 30 && sliderPosition <= 70
                    ? 'bg-white/15 text-white font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                SPLIT
              </button>
              <button
                onClick={() => setSliderPosition(85)}
                className={`px-3 py-1 rounded transition-colors ${
                  sliderPosition > 70 ? 'bg-[#ff5500] text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                CLUTTER (BEFORE)
              </button>
            </div>
          </div>

          {/* Draggable Viewport */}
          <div
            ref={containerRef}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => {
              setIsDragging(true);
              if (e.touches.length > 0) handleMove(e.touches[0].clientX);
            }}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[520px] md:h-[580px] w-full rounded-2xl overflow-hidden cursor-ew-resize border border-white/15 shadow-2xl select-none group"
          >
            {/* UNDER LAYER: AFTER (Clean Room) */}
            <div className="absolute inset-0 w-full h-full bg-neutral-950">
              <img
                src={ASSET_IMAGES.garageAfter}
                alt="After Blackstone: Clean, empty, clutter-free space"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />

              {/* After Badge */}
              <div className="absolute top-6 right-6 z-10 px-4 py-2 bg-black/75 backdrop-blur-md rounded-lg border border-white/20 text-right">
                <span className="text-[10px] font-mono-tag font-bold tracking-[0.25em] text-[#ff5500] uppercase block">
                  AFTER BLACKSTONE
                </span>
                <span className="text-xs sm:text-sm font-display font-bold text-white uppercase">
                  CLEAR & RESTORED
                </span>
              </div>
            </div>

            {/* TOP CLIPPED LAYER: BEFORE (Cluttered Garage) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="absolute inset-0 w-full h-full"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw' }}
              >
                <img
                  src={ASSET_IMAGES.garageBefore}
                  alt="Before Blackstone: Crowded garage with junk and boxes"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                />
              </div>

              {/* Before Badge */}
              <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-black/75 backdrop-blur-md rounded-lg border border-white/20">
                <span className="text-[10px] font-mono-tag font-bold tracking-[0.25em] text-neutral-400 uppercase block">
                  BEFORE
                </span>
                <span className="text-xs sm:text-sm font-display font-bold text-white uppercase">
                  ACCUMULATED CLUTTER
                </span>
              </div>

              {/* Subtle edge shadow along divider */}
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Vertical Divider Line with Grip Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="relative h-full w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] -translate-x-1/2">
                {/* Physical Gripper Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#111317] border-2 border-[#ff5500] shadow-xl flex items-center justify-center text-white pointer-events-auto">
                  <ArrowLeftRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Footer Details */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/8">
              <span className="text-[10px] font-mono-tag text-[#ff5500] font-bold tracking-widest uppercase block mb-1">
                STEP 1: THE DISPATCH
              </span>
              <p className="text-xs text-neutral-300">
                Scheduled arrival window with proactive text confirmation. We arrive equipped and ready to work.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/8">
              <span className="text-[10px] font-mono-tag text-[#ff5500] font-bold tracking-widest uppercase block mb-1">
                STEP 2: THE CLEARING
              </span>
              <p className="text-xs text-neutral-300">
                Couches, appliances, debris, and boxes handled with care so walls and doorways stay protected.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/8">
              <span className="text-[10px] font-mono-tag text-[#ff5500] font-bold tracking-widest uppercase block mb-1">
                STEP 3: THE FINISH
              </span>
              <p className="text-xs text-neutral-300">
                We sweep the ground and leave the cleared area clean. You immediately enjoy your reclaimed space.
              </p>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={onOpenEstimate}
              data-cursor="GO"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-mono-tag font-bold text-xs tracking-wider uppercase rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>RECLAIM YOUR SPACE WITH BLACKSTONE →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
