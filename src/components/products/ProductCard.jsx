'use client';

import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const { name, category, price, oldPrice, badge, image } = product;

  const formatPrice = (value) =>
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(value);

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  }

  return (
    <div className="bg-white cursor-pointer group">

      {/* IMAGEN */}
      <div className="w-full aspect-[3/4] bg-[#F0EEE8] flex items-center justify-center relative overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#ccc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}

        {badge && (
          <span
            style={{ fontFamily: 'var(--font-display)' }}
            className="absolute top-2.5 left-2.5 bg-[#F5A623] text-[#111111] text-[10px] font-black tracking-wide px-2 py-1 uppercase"
          >
            {badge}
          </span>
        )}

        {/* Botón agregar al carrito - aparece al hacer hover */}
        <button
          onClick={handleAddToCart}
          style={{ fontFamily: 'var(--font-display)' }}
          className="absolute bottom-0 left-0 right-0 bg-[#111111] text-white text-xs font-bold tracking-widest uppercase py-3 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-200"
        >
          Agregar al carrito
        </button>
      </div>

      {/* INFO */}
      <div className="px-1 py-4">
        <p
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-[15px] font-bold tracking-wide text-[#111111] uppercase m-0 mb-1"
        >
          {name}
        </p>
        <p className="text-[11px] text-[#999999] m-0 mb-2">
          {category}
        </p>
        <div
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-lg font-bold text-[#111111]"
        >
          {formatPrice(price)}
          {oldPrice && (
            <span className="text-[13px] text-[#bbbbbb] line-through ml-1.5 font-normal">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
      </div>

    </div>
  );
}