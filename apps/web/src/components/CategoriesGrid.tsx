const CATEGORIES = [
  'Cars, Motorcycles and More',
  'Cell Phones and Telephones',
  'Home, Furniture and Decor',
  'Home Appliances',
  'Electronics, Audio and Video',
  'Sports and Fitness',
  'Tools',
  'Computing',
  'Fashion',
  'Pet Shop',
  'Health',
  'Babies',
  'Toys and Hobbies',
  'Games',
  'Construction',
  'Food and Beverages',
  'More Categories',
];

function CategoriesGrid() {
  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-lg font-bold text-gray-900">Categories</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {CATEGORIES.map((category) => (
            <a
              key={category}
              href="#"
              className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-3 text-center shadow-sm transition hover:border-amber-500 hover:shadow-md"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3H6.75a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H18a3 3 0 01-3-3v-2.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-800 line-clamp-2">
                {category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesGrid;
