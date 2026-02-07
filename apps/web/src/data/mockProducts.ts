import type { ProductCardData } from '../components/ProductCard';

const baseProducts: ProductCardData[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1} description with more details...`,
  price: (Math.random() * 500 + 50).toFixed(2),
  originalPrice: Math.random() > 0.5 ? (Math.random() * 600 + 100).toFixed(2) : undefined,
  discount: Math.random() > 0.6 ? `${Math.floor(Math.random() * 40) + 5}% OFF` : undefined,
  installments: `18x $${(Math.random() * 30 + 5).toFixed(2)} interest-free Mercado Pago card`,
  shipping: Math.random() > 0.3 ? 'Free shipping' : 'Arrives Monday',
  full: Math.random() > 0.5,
  coupon: Math.random() > 0.85 ? '5% OFF Coupon' : undefined,
}));

export function getMockProducts(count = 24): ProductCardData[] {
  return baseProducts.slice(0, count).map((p, i) => ({ ...p, id: i + 1 }));
}

export function getMockProductsForSection(count = 18): ProductCardData[] {
  return getMockProducts(count);
}
