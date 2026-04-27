'use client';

import { type ReactNode } from 'react';
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

export function HomeClient({ socialProof }: { socialProof?: ReactNode }) {
  return (
    <CityProvider>
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
