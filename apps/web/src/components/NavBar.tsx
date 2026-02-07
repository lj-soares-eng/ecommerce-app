function NavBar() {
  return (
    <nav className="flex items-center justify-center border-b border-amber-700/20 bg-[#FFE600]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-2">
        {/* Left: Address / CEP */}
        <div className="flex shrink-0 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 shrink-0 text-gray-800"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div className="flex flex-col">
            <label htmlFor="nav-cep" className="text-xs text-gray-600">
              Enter your ZIP code
            </label>
            <input
              id="nav-cep"
              type="text"
              placeholder="00000"
              maxLength={9}
              className="w-24 rounded border border-gray-300 bg-white px-2 py-0.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
              aria-label="Enter your ZIP code for shipping costs"
            />
          </div>
        </div>

        {/* Middle: Categories, Offers, Sell, Contact */}
        <div className="flex flex-1 items-center justify-center gap-6">
          <button type="button" className="flex items-center gap-0.5 text-sm font-medium text-gray-800 hover:underline">
            Categories
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
            </svg>
          </button>
          <button type="button" className="text-sm font-medium text-gray-800 hover:underline">
            Offers
          </button>
          <button type="button" className="text-sm font-medium text-gray-800 hover:underline">
            Sell
          </button>
          <button type="button" className="text-sm font-medium text-gray-800 hover:underline">
            Contact
          </button>
        </div>

        {/* Right: Login, Orders, Favorites, Notification, Cart */}
        <div className="flex shrink-0 items-center gap-5">
          <button type="button" className="flex items-center gap-1.5 text-sm font-medium text-gray-800 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            Login
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
            </svg>
          </button>
          <button type="button" className="text-sm font-medium text-gray-800 hover:underline">
            Orders
          </button>
          <button type="button" className="flex items-center gap-0.5 text-sm font-medium text-gray-800 hover:underline">
            Favorites
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
            </svg>
          </button>
          <button type="button" className="p-1 text-gray-800 hover:opacity-80" aria-label="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>
          <button type="button" className="p-1 text-gray-800 hover:opacity-80" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
