function PromoBanners() {
  return (
    <section className="bg-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Banner 1 */}
          <article className="flex overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="flex h-48 w-2/5 shrink-0 items-center justify-center bg-gray-300 md:h-56">
              <span className="text-xs text-gray-500">Image</span>
            </div>
            <div className="flex flex-1 flex-col justify-center bg-white p-4">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-gray-100">
                <span className="text-xs font-medium text-gray-700">brand</span>
              </div>
              <p className="mb-1 text-sm font-semibold text-gray-900">
                mainMessage
              </p>
              <p className="mb-4 text-sm text-gray-600">subMessage</p>
              <a
                href="#"
                className="inline-flex text-sm font-medium text-amber-600 hover:underline"
              >
                Buy now &gt;
              </a>
            </div>
          </article>

          {/* Banner 2 */}
          <article className="flex overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="flex h-48 w-2/5 shrink-0 items-center justify-center bg-gray-300 md:h-56">
              <span className="text-xs text-gray-500">Image</span>
            </div>
            <div className="flex flex-1 flex-col justify-center bg-white p-4">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-gray-100">
                <span className="text-xs font-medium text-gray-700">brand</span>
              </div>
              <p className="mb-1 text-sm font-semibold text-gray-900">
                mainMessage
              </p>
              <p className="mb-4 text-sm text-gray-600">subMessage</p>
              <a
                href="#"
                className="inline-flex text-sm font-medium text-amber-600 hover:underline"
              >
                Buy now &gt;
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default PromoBanners;
