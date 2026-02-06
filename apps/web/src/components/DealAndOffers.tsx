import { useState } from 'react';

const OFFERS_PER_PAGE = 4;
const TOTAL_PAGES = 5;

const MOCK_OFFERS = Array.from({ length: OFFERS_PER_PAGE * TOTAL_PAGES }, (_, i) => ({
  id: i + 1,
  itemDescription: 'itemDescription',
  lastPrice: 'lastPrice',
  price: 'price',
  discount: 'discount',
}));

function ProductCard({ product, compact = false }: { product: { id: number; itemDescription: string; lastPrice: string; price: string; discount: string }; compact?: boolean }) {
  return (
    <article className={`flex h-full flex-col rounded-lg border border-gray-200 bg-white shadow-sm ${compact ? 'p-2' : 'p-3'}`}>
      <div className={`flex items-center justify-center rounded-md bg-gray-300 ${compact ? 'mb-1 min-h-0 flex-1 w-full' : 'mb-2 aspect-square shrink-0'}`}>
        <span className="text-xs text-gray-500">Image</span>
      </div>
      <p className={`truncate text-gray-800 ${compact ? 'mb-0.5 text-xs' : 'mb-1 text-sm'}`}>
        {product.itemDescription}
      </p>
      <p className={`text-gray-500 line-through ${compact ? 'mb-0.5 text-[10px]' : 'mb-0.5 text-xs'}`}>
        {product.lastPrice}
      </p>
      <div className="flex items-center gap-1">
        <p className={`font-semibold text-gray-900 ${compact ? 'text-xs' : ''}`}>{product.price}</p>
        <span className={`text-green-600 ${compact ? 'text-[10px]' : 'text-xs'}`}>{product.discount}</span>
      </div>
    </article>
  );
}

function DealAndOffers() {
  const [currentPage, setCurrentPage] = useState(0);

  const start = currentPage * OFFERS_PER_PAGE;
  const visibleOffers = MOCK_OFFERS.slice(start, start + OFFERS_PER_PAGE);

  const dealProduct = {
    id: 0,
    itemDescription: 'itemDescription',
    lastPrice: 'lastPrice',
    price: 'price',
    discount: 'discount',
  };

  const goNext = () =>
    setCurrentPage((p) => (p === TOTAL_PAGES - 1 ? 0 : p + 1));

  return (
    <section className="bg-white py-4">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {/* Left: Deal of the day (1/3 width) */}
          <div className="flex w-full flex-col rounded-lg border border-gray-200 bg-white p-3 shadow-sm lg:w-1/3">
            <h2 className="mb-2 shrink-0 text-base font-bold text-gray-900">
              Deal of the day
            </h2>
            <div className="flex min-h-0 flex-1 flex-col">
              <ProductCard product={dealProduct} compact />
            </div>
          </div>

          {/* Right: Offers carousel (2/3 width) */}
          <div className="flex min-h-0 w-full flex-col rounded-lg border border-gray-200 bg-white p-3 shadow-sm lg:w-2/3">
            {/* Header: title + link left, dots right */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-gray-900">Offers</h2>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Show all offers
                </a>
              </div>
              <div className="flex gap-1.5">
                {Array.from({ length: TOTAL_PAGES }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentPage(i)}
                    className="h-2 w-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-amber-500"
                    style={{
                      backgroundColor: i === currentPage ? '#2563eb' : '#d1d5db',
                    }}
                    aria-label={`Page ${i + 1}`}
                    aria-current={i === currentPage ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>

            {/* Carousel: 4 cards + right arrow */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {visibleOffers.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                className="absolute -right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-gray-100 shadow-md hover:bg-gray-200"
                aria-label="Next page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealAndOffers;
