'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const links = [
    { label: 'Remeras',    href: '/categoria/remeras' },
    { label: 'Pantalones', href: '/categoria/pantalones' },
    { label: 'Buzos',      href: '/categoria/buzos' },
    { label: 'Accesorios', href: '/categoria/accesorios' },
    { label: 'Promos',     href: '/promos' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-[#2A2A2A]">
      <nav className="flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F0EFEB] flex items-center justify-center flex-shrink-0">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#0A0A0A"/>
              <polygon points="14,6 22,20 6,20" fill="#F5A623" opacity="0.9"/>
              <circle cx="14" cy="10" r="3" fill="#F5A623"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span style={{ fontFamily: 'var(--font-display)' }}
              className="font-black text-lg tracking-widest text-[#F0EFEB] leading-none">
              SHELTON
            </span>
            <span className="text-[9px] tracking-[3px] text-[#8A8A8A] leading-none mt-1">
              CLOTHES · SINCE 2017
            </span>
          </div>
        </Link>

        {/* LINKS DESKTOP */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-sm tracking-widest text-[#8A8A8A] uppercase hover:text-[#F0EFEB] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ICONOS DERECHA */}
        <div className="flex items-center gap-5">

          {/* Carrito con contador */}
          <Link href="/carrito" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#8A8A8A] hover:text-[#F0EFEB] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#F5A623] text-[#0A0A0A] text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Menú hamburguesa - solo mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-0.5 bg-[#F0EFEB] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-[#F0EFEB] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-[#F0EFEB] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>

        </div>
      </nav>

      {/* MENÚ MOBILE */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col border-t border-[#2A2A2A] list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{ fontFamily: 'var(--font-display)' }}
                className="block px-6 py-4 text-sm tracking-widest text-[#8A8A8A] uppercase hover:text-[#F0EFEB] hover:bg-[#141414] transition-colors border-b border-[#1A1A1A]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
}