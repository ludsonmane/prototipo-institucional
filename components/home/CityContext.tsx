'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { UNITS, CITY_ORDER } from '@/lib/units';
import type { CityKey } from '@/lib/tracking';

type CityContextValue = {
  city: CityKey;
  displayCity: CityKey;
  fadeOut: boolean;
  isRotating: boolean;
  setCity: (city: CityKey) => void;
  openCityMenu: () => void;
  closeCityMenu: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  cityMenuOpen: boolean;
  mobileMenuOpen: boolean;
};

const CityContext = createContext<CityContextValue | null>(null);

const STORAGE_KEY = 'mane_city';
const ROTATION_INTERVAL_MS = 4000;
const FADE_MS = 320;

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [city, setCityState] = useState<CityKey>('bsb');
  const [displayCity, setDisplayCity] = useState<CityKey>('bsb');
  const [fadeOut, setFadeOut] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [cityMenuOpen, setCityMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const rotationRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rotationIdxRef = useRef(0);
  const hadSavedCityRef = useRef(false);

  const animateDisplay = useCallback((next: CityKey) => {
    setFadeOut(true);
    window.setTimeout(() => {
      setDisplayCity(next);
      setFadeOut(false);
    }, FADE_MS);
  }, []);

  const stopRotation = useCallback(() => {
    if (rotationRef.current) {
      clearInterval(rotationRef.current);
      rotationRef.current = null;
      setIsRotating(false);
    }
  }, []);

  const startRotation = useCallback(() => {
    if (rotationRef.current) return;
    setIsRotating(true);
    rotationRef.current = setInterval(() => {
      rotationIdxRef.current = (rotationIdxRef.current + 1) % CITY_ORDER.length;
      animateDisplay(CITY_ORDER[rotationIdxRef.current]);
    }, ROTATION_INTERVAL_MS);
  }, [animateDisplay]);

  const setCity = useCallback(
    (next: CityKey) => {
      if (!UNITS[next]) return;
      stopRotation();
      setCityState(next);
      animateDisplay(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* noop */
      }
    },
    [animateDisplay, stopRotation]
  );

  /* Hydrate from localStorage + start rotation for new visitors. */
  useEffect(() => {
    let saved: CityKey | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw && (raw === 'bsb' || raw === 'ac' || raw === 'sp')) {
        saved = raw;
      }
    } catch {
      /* noop */
    }
    if (saved) {
      hadSavedCityRef.current = true;
      setCityState(saved);
      setDisplayCity(saved);
      rotationIdxRef.current = CITY_ORDER.indexOf(saved);
    } else {
      startRotation();
    }
    return stopRotation;
  }, [startRotation, stopRotation]);

  /* Pause rotation when tab hidden, resume when visible. */
  useEffect(() => {
    const onVisibility = () => {
      if (hadSavedCityRef.current) return;
      if (document.hidden) {
        stopRotation();
      } else if (!rotationRef.current) {
        startRotation();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [startRotation, stopRotation]);

  /* ESC closes overlays. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCityMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const openCityMenu = useCallback(() => {
    stopRotation();
    setDisplayCity(city);
    setCityMenuOpen(true);
  }, [city, stopRotation]);
  const closeCityMenu = useCallback(() => setCityMenuOpen(false), []);
  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const value = useMemo<CityContextValue>(
    () => ({
      city,
      displayCity,
      fadeOut,
      isRotating,
      setCity,
      openCityMenu,
      closeCityMenu,
      openMobileMenu,
      closeMobileMenu,
      cityMenuOpen,
      mobileMenuOpen,
    }),
    [
      city,
      displayCity,
      fadeOut,
      isRotating,
      setCity,
      openCityMenu,
      closeCityMenu,
      openMobileMenu,
      closeMobileMenu,
      cityMenuOpen,
      mobileMenuOpen,
    ]
  );

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}

export function useCity() {
  const ctx = useContext(CityContext);
  if (!ctx) throw new Error('useCity must be used inside <CityProvider>');
  return ctx;
}
