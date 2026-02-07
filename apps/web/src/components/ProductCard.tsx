export type ProductCardData = {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  installments?: string;
  shipping?: string;
  full?: boolean;
  coupon?: string;
};

function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
      <div className="mb-2 flex aspect-square items-center justify-center rounded-md bg-gray-100">
        <span className="text-xs text-gray-400">Product</span>
      </div>
      <p className="mb-1 line-clamp-2 text-sm text-blue-600">
        {product.name}
      </p>
      {product.originalPrice && (
        <p className="mb-0.5 text-xs text-gray-400 line-through">
          ${product.originalPrice}
        </p>
      )}
      <div className="mb-1 flex items-center gap-1.5">
        <p className="text-lg font-bold text-gray-900">${product.price}</p>
        {product.discount && (
          <span className="rounded px-1.5 py-0.5 text-xs font-medium text-green-600">
            {product.discount}
          </span>
        )}
      </div>
      {product.installments && (
        <p className="mb-1 text-xs text-gray-600">{product.installments}</p>
      )}
      <div className="mt-auto flex flex-wrap items-center gap-1 text-xs text-green-600">
        {product.shipping && <span>{product.shipping}</span>}
        {product.full && (
          <span className="inline-flex items-center gap-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                fillRule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302h-7.268a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clipRule="evenodd"
              />
            </svg>
            FULL
          </span>
        )}
      </div>
      {product.coupon && (
        <div className="mt-2 inline-flex w-fit items-center gap-1 rounded border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3.5 w-3.5"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
          {product.coupon}
        </div>
      )}
    </article>
  );
}

export default ProductCard;
