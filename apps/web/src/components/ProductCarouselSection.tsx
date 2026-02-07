import { useState } from 'react';
import ProductCard, { type ProductCardData } from './ProductCard';

const PRODUCTS_PER_PAGE = 6;

type Props = {
  title: string;
  link?: { text: string; href?: string };
  products: ProductCardData[];
  totalPages?: number;
  bgClass?: string;
};

function ProductCarouselSection({
  title,
  link,
  products,
  totalPages: customTotalPages,
  bgClass = 'bg-white',
}: Props) {
  const totalPages = customTotalPages ?? Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  const start = currentPage * PRODUCTS_PER_PAGE;
  const visibleProducts = products.slice(start, start + PRODUCTS_PER_PAGE);

  const goPrev = () =>
    setCurrentPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const goNext = () =>
    setCurrentPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <section className={`py-6 ${bgClass}`}>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-xl bg-gray-100 p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-gray-900">{title}</h2>
              {link && (
                <a
                  href={link.href ?? '#'}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  {link.text}
                </a>
              )}
            </div>
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => (
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

          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="absolute -right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-100"
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

            <button
              type="button"
              onClick={goPrev}
              className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-100"
              aria-label="Previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-gray-700"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
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

export default ProductCarouselSection;
