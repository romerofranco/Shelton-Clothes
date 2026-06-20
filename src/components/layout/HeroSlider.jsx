'use client';

import { useSlider } from '@/hooks/useSlider';

const mainSlides = [
  { tag: 'Nueva colección 2026', title: ['Street', 'culture'], subtitle: ['es lo que', 'vestís'], cta: 'Ver colección', bg: 'from-[#1a1a1a] to-[#2d2d2d]' },
  { tag: 'Supercomodas', title: ['Chombas', 'polo'], subtitle: ['para el', 'día a día'], cta: 'Ver chombas', bg: 'from-[#1a1510] to-[#2d2010]' },
  { tag: 'Cargo pants', title: ['El pantalón', 'que'], subtitle: ['lo aguanta', 'todo'], cta: 'Ver pantalones', bg: 'from-[#0f1a1a] to-[#102020]' },
  { tag: 'Promos 2026', title: ['Buzos', 'college'], subtitle: ['nuevos', 'ingresos'], cta: 'Ver promos', bg: 'from-[#1a1015] to-[#2a1020]' },
];

const sideSlides1 = [
  { label: 'Destacado', name: 'Cargo Pants', bg: 'from-[#141414] to-[#222]' },
  { label: 'Destacado', name: 'Cargo Negro', bg: 'from-[#111820] to-[#1a2030]' },
  { label: 'Destacado', name: 'Cargo Verde', bg: 'from-[#181410] to-[#281e10]' },
];

const sideSlides2 = [
  { label: 'Supercomodas', name: 'Chombas Polo', bg: 'from-[#111820] to-[#1a2030]' },
  { label: 'Supercomodas', name: 'Chomba Gris', bg: 'from-[#181410] to-[#281e10]' },
  { label: 'Supercomodas', name: 'Chomba Azul', bg: 'from-[#141414] to-[#222]' },
];

export default function HeroSlider() {
  const main = useSlider(mainSlides.length, 4000);
  const side1 = useSlider(sideSlides1.length, 7000);
  const side2 = useSlider(sideSlides2.length, 8000);

  return (
    <div className="grid grid-cols-2 grid-rows-[300px_180px] gap-[3px] mb-[3px]">

      {/* SLIDER PRINCIPAL */}
      <div className="row-span-2 relative overflow-hidden bg-[#111]">
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)]"
          style={{ transform: `translateX(-${main.current * 100}%)` }}
        >
          {mainSlides.map((slide, i) => (
            <div key={i} className="min-w-full h-full relative flex-shrink-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg} flex items-center justify-center`}>
                <svg className="w-20 h-20 text-[#222] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="inline-block bg-[#F5A623] text-[#0A0A0A] text-[11px] font-black tracking-wide px-2.5 py-1 uppercase mb-2.5"
                >
                  {slide.tag}
                </span>
                <h1
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-[48px] font-black leading-[0.9] uppercase text-[#F0EFEB] m-0 mb-3.5"
                >
                  {slide.title[0]}<br />
                  <span className="text-[#F5A623]">{slide.title[1]}</span><br />
                  {slide.subtitle[0]}<br />
                  {slide.subtitle[1]}
                </h1>
                <button
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="bg-[#F0EFEB] text-[#0A0A0A] text-[13px] font-bold tracking-widest uppercase px-5 py-2.5 border-none cursor-pointer"
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Flechas */}
        <button
          onClick={main.prev}
          aria-label="Slide anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-black/50 border border-[#333] text-[#F0EFEB] hover:bg-[#F5A623]/20 hover:border-[#F5A623] transition-colors duration-200"
        >
          ‹
        </button>
        <button
          onClick={main.next}
          aria-label="Siguiente slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-black/50 border border-[#333] text-[#F0EFEB] hover:bg-[#F5A623]/20 hover:border-[#F5A623] transition-colors duration-200"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 right-4 flex gap-1.5 z-10">
          {mainSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => main.goTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === main.current ? 'bg-[#F5A623] scale-125' : 'bg-[#555]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* SLIDER LATERAL 1 */}
      <SidePanel slides={sideSlides1} slider={side1} />

      {/* SLIDER LATERAL 2 */}
      <SidePanel slides={sideSlides2} slider={side2} />

    </div>
  );
}

function SidePanel({ slides, slider }) {
  return (
    <div className="relative overflow-hidden bg-[#111]">
      <div
        className="flex h-full transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.18,1)]"
        style={{ transform: `translateX(-${slider.current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full h-full relative flex-shrink-0 flex items-center justify-center">
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
            <div className="absolute bottom-3.5 left-3.5 z-10">
              <small
                style={{ fontFamily: 'var(--font-display)' }}
                className="block text-[10px] tracking-widest text-[#aaa] uppercase mb-0.5"
              >
                {slide.label}
              </small>
              <strong
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-lg font-bold tracking-wide uppercase text-[#F0EFEB]"
              >
                {slide.name}
              </strong>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3.5 right-3 flex gap-1 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => slider.goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === slider.current ? 'bg-[#F5A623] scale-125' : 'bg-[#444]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}