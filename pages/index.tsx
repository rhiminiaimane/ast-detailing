import Seo, { SITE_URL, SITE_NAME } from '@/components/Seo/Seo';
import AboutSection from '@/components/About/AboutSection';
import HeroSection from '@/components/Hero/HeroSection';
import PackSection from '@/components/Packs/PackSection';
import ServiceSection from '@/components/Services/ServiceSection';
import ReviewsSection from '@/components/Reviews/ReviewsSection';
import Footer from '@/components/Footer/Footer';
import React from 'react';

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': ['AutoWash', 'AutoRepair'],
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: 'Auto Spa Detailing',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: [`${SITE_URL}/share.jpg`, `${SITE_URL}/garage.jpg`],
  telephone: '+212662038056',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dyar Tanja',
    addressLocality: 'Tanger',
    addressRegion: 'Tanger-Tétouan-Al Hoceïma',
    postalCode: '90000',
    addressCountry: 'MA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 35.7608711, longitude: -5.8518966 },
  hasMap: 'https://maps.app.goo.gl/u2n2Zmx6K9zHhju2A',
  areaServed: { '@type': 'City', name: 'Tanger' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:30',
      closes: '20:00',
    },
  ],
  sameAs: ['https://www.instagram.com/auto_spa_detailing_sarl/'],
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'fr-MA',
  publisher: { '@id': `${SITE_URL}/#business` },
};

const Home: React.FC = () => {
  return (
    <>
      <Seo
        title="AUTO SPA TANGER – Detailing, céramique & PPF à Tanger"
        description="Auto Spa Detailing à Tanger : traitement nano céramique, film de protection PPF et packs de nettoyage premium. Réservation rapide sur WhatsApp."
        path="/"
        jsonLd={[localBusiness, website]}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <PackSection />
        <ReviewsSection />
      </main>

      <Footer id="contact" />
    </>
  );
};

export default Home;