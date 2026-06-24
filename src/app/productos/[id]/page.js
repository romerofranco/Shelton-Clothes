'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductoDetallePage() {
  const params = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(params.id));

  const formatPrice = (value) =>
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(value);

  if (!product) {
    return (
      <main className="px-6 py-16 text-center">
        <h1
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-3xl font-black uppercase text-[#111111] mb-3"
        >
          Producto no encontrado
        </h1>
        <Link
          href="/productos"
          className="text-sm text-[#777777] hover:text-[#F5A623] underline"
        >
          ← Volver al catálogo
        </Link>
      </main>
    );
  }

  function handleAddToCart() {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <main className="px-6 py-10 max-w-5xl mx-auto w-full">
      <p className="text-xs text-[#999999] mb-6">
        <Link href="/productos" className="hover:text-[#F5A623]">Catálogo</Link> / {product.category}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGEN */}
        <div className="w-full aspect-[3/4] bg-[#F0EEE8] flex items-center justify-center overflow-hidden">
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-[#ccc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )}
        </div>

        {/* INFO */}
        <div className="flex flex-col">
          {product.badge && (
            <span
              style={{ fontFamily: 'var(--font-display)' }}
              className="inline-block bg-[#F5A623] text-[#111111] text-[11px] font-black tracking-wide px-2.5 py-1 uppercase w-fit mb-4"
            >
              {product.badge}
            </span>
          )}

          <h1
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-3xl md:text-4xl font-black uppercase text-[#111111] mb-2"
          >
            {product.name}
          </h1>

          <p className="text-sm text-[#999999] mb-4">{product.category}</p>

          <div
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-3xl font-bold text-[#111111] mb-6"
          >
            {formatPrice(product.price)}
            {product.oldPrice && (
              <span className="text-lg text-[#bbbbbb] line-through ml-2 font-normal">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          {/* Selector de cantidad */}
          <div className="flex items-center gap-2 border border-[#E5E3DC] w-fit mb-6">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-10 h-10 flex items-center justify-center text-[#111111] hover:bg-[#F0EEE8]"
            >
              −
            </button>
            <span className="w-10 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-10 h-10 flex items-center justify-center text-[#111111] hover:bg-[#F0EEE8]"
            >
              +
            </button>
          </div>

          {/* Botón agregar */}
          <button
            onClick={handleAddToCart}
            style={{ fontFamily: 'var(--font-display)' }}
            className={`text-sm font-bold tracking-widest uppercase py-4 transition-colors duration-200 ${
              added
                ? 'bg-[#25D366] text-white'
                : 'bg-[#111111] text-white hover:bg-[#F5A623] hover:text-[#111111]'
            }`}
          >
            {added ? '✓ Agregado al carrito' : 'Agregar al carrito'}
          </button>

          <Link
            href="/productos"
            className="text-center text-xs text-[#777777] hover:text-[#111111] mt-4 transition-colors duration-200"
          >
            ← Seguir comprando
          </Link>
        </div>

      </div>
    </main>
  );
}