import Head from 'next/head';
import AboutSection from '@/components/About/AboutSection';
import HeroSection from '@/components/Hero/HeroSection';
import PackSection from '@/components/Packs/PackSection';
import ServiceSection from '@/components/Services/ServiceSection';
import ReviewsSection from '@/components/Reviews/ReviewsSection';
import Footer from '@/components/Footer/Footer';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>AUTO SPA TANGER – Protection Céramique & PPF à Tanger</title>
        <meta
          name="description"
          content="AUTO SPA TANGER – Experts en detailing automobile, traitement céramique et protection PPF à Tanger. Sublimez et protégez votre voiture avec notre savoir-faire premium."
        />
        <meta
          name="keywords"
          content="AUTO SPA TANGER, protection céramique Tanger, PPF Tanger, detailing Tanger, traitement céramique voiture Tanger, protection peinture voiture Tanger, nano ceramic Tanger, lavage premium Tanger, detailing auto Tanger"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="AUTO SPA TANGER" />
        <link rel="canonical" href="https://autospatanger.com/" />

        {/* Schema.org Local Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "AUTO SPA TANGER",
              "image": "https://autospatanger.com/logo.png",
              "logo": "https://autospatanger.com/logo.png",
              "@id": "https://autospatanger.com",
              "url": "https://autospatanger.com",
              "telephone": "+212662038056",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dyar Tanja",
                "addressLocality": "Tanger",
                "addressRegion": "Tanger-Tétouan-Al Hoceïma",
                "postalCode": "90000",
                "addressCountry": "MA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 35.7608711,
                "longitude": -5.8518966
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:30",
                "closes": "20:00"
              },
              "priceRange": "$$$",
              "sameAs": [
                "https://www.instagram.com/auto_spa_detailing_sarl/"
              ]
            }
          `}
        </script>

        {/* Schema.org WebSite */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AUTO SPA TANGER",
              "url": "https://autospatanger.com"
            }
          `}
        </script>

        {/* Schema.org Organization Logo (Optional) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://autospatanger.com",
              "logo": "https://autospatanger.com/logo.png",
              "name": "AUTO SPA TANGER"
            }
          `}
        </script>

        {/* Open Graph */}
        <meta
          property="og:title"
          content="AUTO SPA TANGER – Detailing, Protection Céramique & PPF à Tanger"
        />
        <meta
          property="og:description"
          content="Experts en detailing automobile, traitement céramique et protection PPF à Tanger. Services professionnels pour protéger votre véhicule."
        />
        <meta property="og:url" content="https://autospatanger.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_MA" />
        <meta property="og:image" content="https://autospatanger.com/share.jpg" />
        <meta property="og:site_name" content="AUTO SPA TANGER" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AUTO SPA TANGER – Experts en Protection Automobile à Tanger"
        />
        <meta
          name="twitter:description"
          content="Traitement céramique, protection PPF et detailing auto à Tanger."
        />
        <meta name="twitter:image" content="https://autospatanger.com/share.jpg" />
        <meta name="twitter:site" content="@autospatanger" />
      </Head>

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