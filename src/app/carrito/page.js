'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function CarritoPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  const formatPrice = (value) =>
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(value);

  // Genera el mensaje de WhatsApp con el detalle del pedido
  function buildWhatsAppMessage() {
    let message = '¡Hola Shelton! 👋 Quiero hacer este pedido:\n\n';
    items.forEach((item) => {
      message += `• ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}\n`;
    });
    message += `\n*Total: ${formatPrice(totalPrice)}*`;
    return message; // <-- sin encodeURIComponent, ahora lo hace getWhatsAppLink
  }

  const whatsappUrl = getWhatsAppLink('5493804782311', buildWhatsAppMessage());

  if (items.length === 0) {
    return (
      <main className="px-6 py-16 text-center">
        <h1
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-3xl font-black uppercase text-[#111111] mb-3"
        >
          Tu carrito está vacío
        </h1>
        <p className="text-[#777777] mb-6">Agregá productos desde el catálogo para verlos acá.</p>
        <Link
          href="/productos"
          style={{ fontFamily: 'var(--font-display)' }}
          className="inline-block bg-[#111111] text-white text-sm font-bold tracking-widest uppercase px-6 py-3 hover:bg-[#F5A623] hover:text-[#111111] transition-colors duration-200"
        >
          Ver catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="px-6 py-10 max-w-4xl mx-auto w-full">
      <h1
        style={{ fontFamily: 'var(--font-display)' }}
        className="text-3xl md:text-4xl font-black tracking-wide text-[#111111] uppercase mb-8"
      >
        Tu carrito
      </h1>

      {/* LISTA DE PRODUCTOS */}
      <div className="flex flex-col gap-4 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b border-[#E5E3DC] pb-4">

            {/* Imagen */}
            <div className="w-20 h-24 bg-[#F0EEE8] flex-shrink-0 overflow-hidden">
              {item.image ? (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#ccc]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <p
                style={{ fontFamily: 'var(--font-display)' }}
                className="font-bold text-[#111111] uppercase text-sm mb-1"
              >
                {item.name}
              </p>
              <p className="text-xs text-[#999999] mb-2">{item.category}</p>
              <p className="text-sm font-bold text-[#111111]">{formatPrice(item.price)}</p>
            </div>

            {/* Cantidad */}
            <div className="flex items-center gap-2 border border-[#E5E3DC]">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 flex items-center justify-center text-[#111111] hover:bg-[#F0EEE8]"
              >
                −
              </button>
              <span className="w-6 text-center text-sm">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center text-[#111111] hover:bg-[#F0EEE8]"
              >
                +
              </button>
            </div>

            {/* Eliminar */}
            <button
              onClick={() => removeItem(item.id)}
              aria-label="Eliminar producto"
              className="text-[#999999] hover:text-[#cc3333] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

          </div>
        ))}
      </div>

      {/* TOTAL Y CHECKOUT */}
      <div className="bg-[#F4F2EC] p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-lg font-bold uppercase text-[#111111]"
          >
            Total
          </span>
          <span
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-2xl font-black text-[#111111]"
          >
            {formatPrice(totalPrice)}
          </span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: 'var(--font-display)' }}
          className="bg-[#25D366] text-white text-center text-sm font-bold tracking-widest uppercase py-4 hover:opacity-90 transition-opacity duration-200"
        >
          Finalizar pedido por WhatsApp
        </a>

        <Link
          href="/productos"
          className="text-center text-xs text-[#777777] hover:text-[#111111] transition-colors duration-200"
        >
          ← Seguir comprando
        </Link>
      </div>
    </main>
  );
}