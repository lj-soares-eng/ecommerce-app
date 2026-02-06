import { useRef } from 'react';

const SECTIONS = [
  { id: 'recently-viewed', title: 'Recently viewed', type: 'product' as const },
  { id: 'buy-favorite', title: 'Buy your favorite', type: 'product' as const },
  { id: 'payment-methods', title: 'Payment methods', type: 'info' as const },
  { id: 'under-30', title: 'Under $30', type: 'info' as const },
  { id: 'best-sellers', title: 'Best sellers', type: 'product' as const },
  { id: 'our-categories', title: 'Our categories', type: 'info' as const },
];

function HomeSections() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 220;
    scrollRef.current.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative bg-gradient-to-b from-amber-100/80 to-white py-6">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scroll-smooth py-2 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {SECTIONS.map((section) => (
            <article
              key={section.id}
              className="flex w-44 shrink-0 flex-col rounded-lg bg-white p-3 shadow-md sm:w-48"
            >
              <h3 className="mb-2 text-sm font-bold text-gray-900">
                {section.title}
              </h3>
              {section.type === 'product' ? (
                <>
                  <div className="mb-2 flex h-24 items-center justify-center rounded-md bg-gray-100">
                    <span className="text-xs text-gray-400">Product</span>
                  </div>
                  <p className="mb-0.5 truncate text-xs text-gray-600">
                    Product name
                  </p>
                  <p className="mb-0.5 text-sm font-semibold text-gray-900">$0.00</p>
                  <p className="text-xs text-green-600">Free shipping</p>
                </>
              ) : (
                <>
                  <div className="mb-2 flex h-16 items-center justify-center rounded-md bg-amber-100/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 text-amber-600"
                    >
                      {section.id === 'payment-methods' ? (
                        <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V6a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 013 6v-.875zm13.5 0c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V6a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 0116.5 6v-.875zM2.25 12c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v1.875c0 1.036-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 012.25 13.875V12zm13.5 0c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v1.875c0 1.036-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875V12z" clipRule="evenodd" />
                      ) : section.id === 'under-30' ? (
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                      ) : (
                        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3H6.75a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H18a3 3 0 01-3-3v-2.25z" clipRule="evenodd" />
                      )}
                    </svg>
                  </div>
                  <p className="mb-2 text-xs text-gray-600">
                    {section.id === 'payment-methods' &&
                      'Pay quickly and securely.'}
                    {section.id === 'under-30' &&
                      'Check out products at low prices.'}
                    {section.id === 'our-categories' &&
                      'Browse by category.'}
                  </p>
                  <button
                    type="button"
                    className="w-full rounded-md bg-blue-600 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
                  >
                    {section.id === 'payment-methods' && 'Show methods'}
                    {section.id === 'under-30' && 'Show products'}
                    {section.id === 'our-categories' && 'Browse'}
                  </button>
                </>
              )}
            </article>
          ))}
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
          aria-label="Scroll right"
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

        {/* Left arrow */}
        <button
          type="button"
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
          aria-label="Scroll left"
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
      </div>
    </section>
  );
}

export default HomeSections;
