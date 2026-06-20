export default function ProductCard({ product }) {
  const { name, category, price, oldPrice, badge } = product;

  // Formatea el precio en pesos argentinos: 18500 -> "$18.500"
  const formatPrice = (value) =>
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(value);

  return (
    <div className="bg-[#141414] cursor-pointer group">

      {/* IMAGEN */}
      <div className="w-full aspect-[3/4] bg-[#1C1C1C] flex items-center justify-center relative overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#2A2A2A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>

        {badge && (
          <span
            style={{ fontFamily: 'var(--font-display)' }}
            className="absolute top-2.5 left-2.5 bg-[#F5A623] text-[#0A0A0A] text-[10px] font-black tracking-wide px-2 py-1 uppercase"
          >
            {badge}
          </span>
        )}
      </div>

      {/* INFO */}
      <div className="px-3 py-4">
        <p
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-[15px] font-bold tracking-wide text-[#F0EFEB] uppercase m-0 mb-1"
        >
          {name}
        </p>
        <p className="text-[11px] text-[#8A8A8A] m-0 mb-2">
          {category}
        </p>
        <div
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-lg font-bold text-[#F0EFEB]"
        >
          {formatPrice(price)}
          {oldPrice && (
            <span className="text-[13px] text-[#555] line-through ml-1.5 font-normal">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
      </div>

    </div>
  );
}