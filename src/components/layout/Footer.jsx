import Link from 'next/link';

export default function Footer() {
  const categorias = [
    { label: 'Remeras',    href: '/categoria/remeras' },
    { label: 'Pantalones', href: '/categoria/pantalones' },
    { label: 'Buzos',      href: '/categoria/buzos' },
    { label: 'Accesorios', href: '/categoria/accesorios' },
  ];

  const info = [
    { label: 'Cómo comprar',   href: '/como-comprar' },
    { label: 'Medios de pago', href: '/medios-de-pago' },
    { label: 'Envíos',         href: '/envios' },
    { label: 'Contacto',       href: '/contacto' },
  ];

  return (
    <footer className="bg-[#F4F2EC] border-t border-[#E5E3DC] mt-auto">

      {/* CONTENIDO PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-12">

        {/* COLUMNA 1 - Marca */}
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="#111111"/>
                <polygon points="14,6 22,20 6,20" fill="#F5A623" opacity="0.9"/>
                <circle cx="14" cy="10" r="3" fill="#F5A623"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                style={{ fontFamily: 'var(--font-display)' }}
                className="font-black text-lg tracking-widest text-[#111111] leading-none">
                SHELTON
              </span>
              <span className="text-[9px] tracking-[3px] text-[#777777] leading-none mt-1">
                CLOTHES · SINCE 2017
              </span>
            </div>
          </div>
          <p className="text-sm text-[#777777] leading-relaxed">
            Tienda de ropa urbana y streetwear desde 2017. La Rioja, Argentina.
          </p>
          {/* Horarios */}
          <div className="flex flex-col gap-1">
            <span className="text-xs tracking-widest text-[#F5A623] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}>
              Horarios
            </span>
            <span className="text-sm text-[#777777]">Lunes a Sábado · 18 a 22hs</span>
            <span className="text-sm text-[#777777]">Castro Barros 1547 esq. Congreso</span>
          </div>
        </div>

        {/* COLUMNA 2 - Categorías */}
        <div className="flex flex-col gap-4">
          <h4
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-sm font-bold tracking-widest text-[#111111] uppercase">
            Categorías
          </h4>
          <ul className="flex flex-col gap-2 list-none m-0 p-0">
            {categorias.map((cat) => (
              <li key={cat.href}>
                <Link
                  href={cat.href}
                  className="text-sm text-[#777777] hover:text-[#F5A623] transition-colors duration-200">
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMNA 3 - Info */}
        <div className="flex flex-col gap-4">
          <h4
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-sm font-bold tracking-widest text-[#111111] uppercase">
            Información
          </h4>
          <ul className="flex flex-col gap-2 list-none m-0 p-0">
            {info.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[#777777] hover:text-[#F5A623] transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* WhatsApp */}
          <a
            href="https://wa.me/5493804000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm mt-2 text-[#777777] hover:text-[#25D366] transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L0 24l6.318-1.508A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.368l-.36-.214-3.732.891.935-3.618-.235-.373A9.818 9.818 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/>
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>

      </div>

      {/* BARRA INFERIOR */}
      <div className="border-t border-[#E5E3DC] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-[#999999]">
          © 2026 Shelton Clothes · Todos los derechos reservados
        </p>
        <p className="text-xs text-[#999999]">
          La Rioja · Argentina
        </p>
      </div>

    </footer>
  );
}