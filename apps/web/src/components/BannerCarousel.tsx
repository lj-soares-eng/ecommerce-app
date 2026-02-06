import { useState } from 'react';

const SLIDE_COUNT = 7;

function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((i) => (i === 0 ? SLIDE_COUNT - 1 : i - 1));
  const goNext = () => setCurrent((i) => (i === SLIDE_COUNT - 1 ? 0 : i + 1));
  const goTo = (index: number) => setCurrent(index);

  return (
    <section className="relative w-full overflow-hidden bg-gray-200">
      {/* Blur/fade overlays on left and right so arrows sit in a softened zone */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-black/40 to-transparent backdrop-blur-[2px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-black/40 to-transparent backdrop-blur-[2px]"
        aria-hidden
      />

      {/* Carousel track: full width so one slide visible; track slides left */}
      <div className="relative" style={{ width: '100%' }}>
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            width: `${SLIDE_COUNT * 100}%`,
            transform: `translateX(-${current * (100 / SLIDE_COUNT)}%)`,
          }}
        >
          {Array.from({ length: SLIDE_COUNT }, (_, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center justify-center"
              style={{ width: `${100 / SLIDE_COUNT}%` }}
            >
              <div className="flex h-56 w-full items-center justify-center bg-gray-300/80 sm:h-72 md:h-80">
                <span className="text-gray-500 text-sm font-medium">
                  Banner {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left arrow */}
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label="Previous banner"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-gray-700"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={goNext}
        className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label="Next banner"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-gray-700"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {Array.from({ length: SLIDE_COUNT }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className="h-2 w-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            style={{
              backgroundColor: i === current ? 'white' : 'transparent',
              boxShadow: i === current ? 'none' : 'inset 0 0 0 1.5px white',
            }}
            aria-label={`Go to banner ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default BannerCarousel;
