'use client';

import { useState } from 'react';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';

export default function ProductosPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="px-6 py-10">
      <p className="text-xs text-[#999999] mb-2">Home / Categorías / Lo nuevo</p>

      <h1
        style={{ fontFamily: 'var(--font-display)' }}
        className="text-3xl md:text-4xl font-black tracking-wide text-[#111111] uppercase mb-8"
      >
        Catálogo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">

        {/* SIDEBAR FILTROS */}
        <aside>
          <div className="mb-6">
            <h4
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-sm font-bold tracking-widest text-[#111111] uppercase border-b border-[#E5E3DC] pb-2 mb-3"
            >
              Categoría
            </h4>
            <button
              onClick={() => setActiveCategory('Todos')}
              className={`flex w-full justify-between text-sm py-1.5 ${
                activeCategory === 'Todos' ? 'text-[#F5A623] font-bold' : 'text-[#555555] hover:text-[#111111]'
              }`}
            >
              <span>Todos</span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex w-full justify-between text-sm py-1.5 ${
                  activeCategory === cat.name ? 'text-[#F5A623] font-bold' : 'text-[#555555] hover:text-[#111111]'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[#999999]">{cat.count}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* GRILLA DE PRODUCTOS */}
        <div>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-[#777777] text-sm">No hay productos en esta categoría todavía.</p>
          )}
        </div>

      </div>
    </main>
  );
}