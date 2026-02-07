import { useState } from 'react';

function Footer() {
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);

  return (
    <footer className="border-t border-gray-200 bg-gray-50 pt-8 pb-4">
      <div className="mx-auto max-w-7xl px-4">
        {/* Top blocks: Payment, Shipping */}
        <div className="grid gap-6 py-6 md:grid-cols-2">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-600">
                <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H9a.75.75 0 000-1.5H6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="mb-1 font-bold text-gray-900">Choose how to pay</h3>
              <p className="mb-2 text-sm text-gray-600">
                With Mercado Pago, you pay with card, boleto or Pix. You can also pay in up to 12 installments without a card with the Credit Line.
              </p>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                How to pay with Mercado Pago
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-blue-600">
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a3 3 0 116 0h.375c1.035 0 1.875-.84 1.875-1.875V15z" />
                <path d="M8.25 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-.75z" />
              </svg>
            </div>
            <div>
              <h3 className="mb-1 font-bold text-gray-900">Free shipping from $19</h3>
              <p className="text-sm text-gray-600">
                When you sign up, you get free shipping on thousands of products.
              </p>
            </div>
          </div>
        </div>

        {/* More information */}
        <div className="border-t border-gray-200 py-4">
          <button
            type="button"
            onClick={() => setMoreInfoOpen(!moreInfoOpen)}
            className="flex w-full items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            More information
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-5 w-5 transition-transform ${moreInfoOpen ? 'rotate-180' : ''}`}
            >
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
            </svg>
          </button>
          {moreInfoOpen && (
            <div className="mt-4 grid grid-cols-2 gap-4 pt-4 md:grid-cols-4">
              <a href="#" className="text-sm text-gray-600 hover:underline">Work with us</a>
              <a href="#" className="text-sm text-gray-600 hover:underline">Promotions</a>
              <a href="#" className="text-sm text-gray-600 hover:underline">Affiliate Program</a>
              <a href="#" className="text-sm text-gray-600 hover:underline">Insurance information</a>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">About</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investor relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Trends
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">Contact</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Buy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sell
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">
              Social networks
            </h3>
            <ul className="flex gap-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="X">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Sitemap / Terms */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">More info</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer links row */}
        <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-gray-200 pt-6">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-sm text-gray-600 hover:underline">Work with us</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Terms and conditions</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Promotions</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">How we care for your privacy</a>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="flex items-center gap-1 text-sm text-gray-600 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
              </svg>
              Accessibility
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Contact</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Insurance information</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Affiliate Program</a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          Copyright © 1999-2026 E-commerce LTDA. A Mercado Livre group company.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
