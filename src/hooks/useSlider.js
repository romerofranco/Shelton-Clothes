'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export function useSlider(totalSlides, intervalMs = 4000) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrent(((index % totalSlides) + totalSlides) % totalSlides);
  }, [totalSlides]);

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  // Reinicia el temporizador cada vez que cambia el slide actual
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % totalSlides);
    }, intervalMs);

    return () => clearInterval(timerRef.current);
  }, [current, totalSlides, intervalMs]);

  return { current, goTo, next, prev };
}