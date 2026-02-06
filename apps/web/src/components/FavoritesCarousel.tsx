import { useState } from 'react';

const PRODUCTS_PER_PAGE = 6;
const TOTAL_PAGES = 4;

const MOCK_PRODUCTS = Array.from({ length: PRODUCTS_PER_PAGE * TOTAL_PAGES }, (_, i) => ({
  id: i + 1,
  itemDescription: 'itemDescription',
  lastPrice: 'lastPrice',
  price: 'price',
  discount: 'discount',
}));

function FavoritesCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  const start = currentPage * PRODUCTS_PER_PAGE;
  const visibleProducts = MOCK_PRODUCTS.slice(start, start + PRODUCTS_PER_PAGE);

  const goNext = () =>
    setCurrentPage((p) => (p === TOTAL_PAGES - 1 ? 0 : p + 1));

  return (
    <section className="bg-gray-100 py-6">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-xl bg-gray-200 p-4 shadow-sm">
          {/* Header: title + link left, dots right */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-gray-900">
                Inspired by your favorites
              </h2>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Go to your favorites
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

          {/* Product grid: 6 cards + right arrow */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {visibleProducts.map((product) => (
                <article
                  key={product.id}
                  className="flex flex-col rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
                >
                  <div className="mb-2 flex aspect-square items-center justify-center rounded-md bg-gray-300">
                    <span className="text-xs text-gray-500">Image</span>
                  </div>
                  <p className="mb-1 truncate text-sm text-gray-800">
                    {product.itemDescription}
                  </p>
                  <p className="mb-0.5 text-xs text-gray-500 line-through">
                    {product.lastPrice}
                  </p>
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-gray-900">{product.price}</p>
                    <span className="text-xs text-gray-600">{product.discount}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Right arrow */}
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
    </section>
  );
}

export default FavoritesCarousel;
