import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';

export default function Home() {
  return (
    <main>

      {/* BANNER PRINCIPAL */}
      <a href="/productos" className="block relative h-[420px] bg-[#1A1A1A] overflow-hidden group mb-2">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]">
          <svg className="w-24 h-24 text-[#333]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
          <span
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-white text-sm tracking-[4px] uppercase mb-3"
          >
            Nueva colección 2026
          </span>
          <h1
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-white text-5xl md:text-6xl font-black uppercase tracking-wide mb-6"
          >
            Street Culture
          </h1>
          <span
            style={{ fontFamily: 'var(--font-display)' }}
            className="bg-white text-[#111111] text-sm font-bold tracking-widest uppercase px-6 py-3 group-hover:bg-[#F5A623] transition-colors duration-200"
          >
            Ver colección
          </span>
        </div>
      </a>

      {/* DOS BANNERS MEDIANOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12 px-2">
        <a href="/categoria/buzos" className="relative h-[260px] bg-[#222] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1510] to-[#2d2010]" />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-start justify-end p-6">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-white text-3xl font-black uppercase mb-2"
            >
              Buzos
            </h2>
            <span className="text-white text-xs tracking-widest uppercase underline group-hover:text-[#F5A623] transition-colors">
              Shop now
            </span>
          </div>
        </a>
        <a href="/categoria/pantalones" className="relative h-[260px] bg-[#222] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a1a] to-[#102020]" />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-start justify-end p-6">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-white text-3xl font-black uppercase mb-2"
            >
              Pantalones
            </h2>
            <span className="text-white text-xs tracking-widest uppercase underline group-hover:text-[#F5A623] transition-colors">
              Shop now
            </span>
          </div>
        </a>
      </div>

      {/* PRODUCTOS DESTACADOS */}
      <div className="flex items-baseline justify-between px-6 mb-5">
        <h2
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-2xl md:text-3xl font-black tracking-wide text-[#111111] uppercase m-0"
        >
          Lo nuevo
        </h2>
        <a
          href="/productos"
          className="text-xs tracking-widest text-[#777777] uppercase hover:text-[#F5A623] transition-colors duration-200"
        >
          Ver todo →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 mb-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* BANNER DE ENVÍOS */}
      <div className="mx-6 mb-12 bg-[#F4F2EC] border-l-[3px] border-[#F5A623] px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-3xl font-black tracking-wide text-[#111111] uppercase m-0 mb-1"
          >
            Envíos a todo el país
          </h2>
          <p className="text-sm text-[#777777] m-0">
            Lunes a sábado · 18 a 22hs · Castro Barros 1547 esq. Congreso
          </p>
        </div>
        <a
          href="https://wa.me/5493804782311"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#111111] text-[#111111] text-[13px] font-bold tracking-widest uppercase px-6 py-3 whitespace-nowrap hover:bg-[#111111] hover:text-white transition-colors duration-200"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Contactar por WhatsApp
        </a>
      </div>

    </main>
  );
}