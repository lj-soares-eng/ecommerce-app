function Header() {
  return (
    <header className="border-t-2 border-amber-900 bg-[#FFE600]">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        {/* Logo and brand */}
        <div className="flex shrink-0 items-center gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#FFE600] shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-white"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-gray-900">E-commerce</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex flex-1 items-center">
          <div className="relative w-full max-w-2xl">
            <input
              type="search"
              placeholder="Search products, brands and more..."
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="shrink-0 text-gray-900 font-medium">component</div>
      </div>
    </header>
  );
}

export default Header;
