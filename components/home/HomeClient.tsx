'use client';

import { type ReactNode } from 'react';
import type { CityKey } from '@/lib/tracking';
import { CityProvider } from './CityContext';
import { Header } from './Header';
import { Hero } from './Hero';
import { MediaSection } from './MediaSection';
import { RestaurantsSection } from './RestaurantsSection';
import { OccasionSection } from './OccasionSection';
import { ExperienceSection } from './ExperienceSection';
import { ReviewsSection } from './ReviewsSection';
import { UnitsSection } from './UnitsSection';
import { Footer } from './Footer';
import { CityMenu } from './CityMenu';
import { MobileMenu } from './MobileMenu';

export function HomeClient({
  socialProof,
  initialCity,
}: {
  socialProof?: ReactNode;
  initialCity?: CityKey;
}) {
  return (
    <CityProvider initialCity={initialCity}>
      <Header />
      <Hero socialProof={socialProof} />
      <MediaSection />
      <RestaurantsSection />
      <OccasionSection />
      <ExperienceSection />
      <ReviewsSection />
      <UnitsSection />
      <Footer />
      <CityMenu />
      <MobileMenu />
    </CityProvider>
  );
}
