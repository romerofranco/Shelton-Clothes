import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';
import HeroSlider from '@/components/layout/HeroSlider';

export default function Home() {
  return (
    <main>

      {/* HERO CON SLIDERS */}
      <HeroSlider />

      {/* CATEGORÍAS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px] mb-12">
        {categories.map((cat) => (
          <a
            key={cat.href}
            href={cat.href}
            className="bg-[#141414] px-4 py-5 text-center cursor-pointer border-b-2 border-transparent hover:border-[#F5A623] transition-colors duration-200"
          >
            <div
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-[13px] font-bold tracking-widest text-[#F0EFEB] uppercase"
            >
              {cat.name}
            </div>
            <div className="text-[11px] text-[#8A8A8A] mt-0.5">
              +{cat.count} productos
            </div>
          </a>
        ))}
      </div>

      {/* PRODUCTOS DESTACADOS */}
      <div className="flex items-baseline justify-between px-6 mb-5">
        <h2
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-2xl md:text-3xl font-black tracking-wide text-[#F0EFEB] uppercase m-0"
        >
          Lo nuevo
        </h2>
        <a
          href="/productos"
          className="text-xs tracking-widest text-[#8A8A8A] uppercase hover:text-[#F5A623] transition-colors duration-200"
        >
          Ver todo →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px] px-6 mb-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* BANNER DE ENVÍOS */}
      <div className="mx-6 mb-12 bg-[#141414] border-l-[3px] border-[#F5A623] px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-3xl font-black tracking-wide text-[#F0EFEB] uppercase m-0 mb-1"
          >
            Envíos a todo el país
          </h2>
          <p className="text-sm text-[#8A8A8A] m-0">
            Lunes a sábado · 18 a 22hs · Castro Barros 1547 esq. Congreso
          </p>
        </div>
        <a
          href="https://wa.me/5493804000000"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#F0EFEB] text-[#F0EFEB] text-[13px] font-bold tracking-widest uppercase px-6 py-3 whitespace-nowrap hover:bg-[#F0EFEB] hover:text-[#0A0A0A] transition-colors duration-200"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Contactar por WhatsApp
        </a>
      </div>

    </main>
  );
}