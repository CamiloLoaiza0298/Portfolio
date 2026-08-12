import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goTo = (index) => {
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const pauseAutoplay = () => clearInterval(timerRef.current);
  const resumeAutoplay = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  };

  // Touch handlers
  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
    pauseAutoplay();
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) next();
      else prev();
    }
    resumeAutoplay();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-surface-container border border-white/10 rounded-lg overflow-hidden group"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Image container */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full shrink-0"
          >
            <div className="relative aspect-video flex items-center justify-center p-0 sm:p-4">
              <img
                src={slide.image}
                alt={slide.caption}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows - hidden on mobile */}
      <button
        onClick={() => { prev(); pauseAutoplay(); resumeAutoplay(); }}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-surface-container/80 backdrop-blur-md border border-white/10 text-on-surface opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-container/20 hover:border-primary-container/40 cursor-pointer"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => { next(); pauseAutoplay(); resumeAutoplay(); }}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-surface-container/80 backdrop-blur-md border border-white/10 text-on-surface opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-container/20 hover:border-primary-container/40 cursor-pointer"
      >
        <ChevronRight size={22} />
      </button>

      {/* Caption + Dots */}
      <div className="px-6 pb-5 pt-2 text-center">
        <div className="flex items-center justify-center gap-2 mt-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-primary-container w-4'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant min-h-[1.6em] mt-3">
          {slides[currentIndex].caption}
        </p>
      </div>
    </div>
  );
}
