const POPULAR_TERMS = [
  'iPhone 15',
  'PlayStation 5',
  'Air Fryer',
  'Smart TV',
  'Refrigerator',
  'Sofa',
  'Bluetooth Headphones',
  'Laptop',
  'Washing Machine',
  'Platform Bed',
];

function PopularSearchTerms() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-2">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-xs text-gray-500">Popular search terms:</p>
        <div className="flex flex-wrap gap-2">
          {POPULAR_TERMS.map((term) => (
            <a
              key={term}
              href="#"
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition hover:bg-amber-100 hover:text-gray-900"
            >
              {term}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularSearchTerms;
