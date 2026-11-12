import { useState, useMemo, useRef, TouchEvent } from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import Seo, { breadcrumb } from '@/components/Seo/Seo';

const galleryItems = [
  { id: 1, model: 'Skoda', Name: 'Skoda Octavia', image: '/cars/skodaoctavia.webp', alt: 'Skoda Octavia' },
  { id: 2, model: 'Skoda', Name: 'Skoda Octavia', image: '/cars/skodaoctavia2.webp', alt: 'Skoda Octavia' },

  { id: 3, model: 'Volkswagen', Name: 'Volkswagen Touareg', image: '/cars/tailleXL.jpg', alt: 'Volkswagen Touareg' },
  { id: 4, model: 'Volkswagen', Name: 'Volkswagen Touareg', image: '/cars/VolkswagenTouareg.jpg', alt: 'Volkswagen Touareg' },
  { id: 5, model: 'Volkswagen', Name: 'Volkswagen Touareg', image: '/cars/VolkswagenTouareg2.jpg', alt: 'Volkswagen Touareg' },

  { id: 6, model: 'Volkswagen', Name: 'Volkswagen Golf 8 R', image: '/cars/GOLFR0.webp', alt: 'Volkswagen Golf R' },
  { id: 7, model: 'Volkswagen', Name: 'Volkswagen Golf 8 R', image: '/cars/GOLFR.webp', alt: 'Volkswagen Golf R' },
  { id: 8, model: 'Volkswagen', Name: 'Volkswagen Golf 8 R', image: '/cars/GOLFR3.webp', alt: 'Volkswagen Golf R' },

  { id: 9, model: 'Dacia', Name: 'Dacia StepWay', image: '/cars/dacia.webp', alt: 'Dacia StepWay' },
  { id: 10, model: 'Dacia', Name: 'Dacia StepWay', image: '/cars/dacia2.webp', alt: 'Dacia StepWay' },

  { id: 11, model: 'Audi', Name: 'Audi A3', image: '/cars/audiA3.webp', alt: 'Audi A3' },
  { id: 12, model: 'Audi', Name: 'Audi A3', image: '/cars/audiA32.webp', alt: 'Audi A3' },
  { id: 13, model: 'Audi', Name: 'Audi A3', image: '/cars/audiA323.webp', alt: 'Audi A3' },

  { id: 14, model: 'Mercedes', Name: 'Mercedes AMG GLE 63 S model', image: '/cars/mercedes.webp', alt: 'Mercedes AMG GLE 63 S model' },
  { id: 15, model: 'Mercedes', Name: 'Mercedes AMG GLE 63 S model', image: '/cars/mercedes2.webp', alt: 'Mercedes AMG GLE 63 S model' },
  { id: 16, model: 'Mercedes', Name: 'Mercedes AMG GLE 63 S model', image: '/cars/mercedes3.webp', alt: 'Mercedes AMG GLE 63 S model' },
  { id: 17, model: 'Mercedes', Name: 'Mercedes AMG GLE 63 S model', image: '/cars/mercedes4.webp', alt: 'Mercedes AMG GLE 63 S model' },

  { id: 18, model: 'BMW', Name: 'BMW I5 m60', image: '/cars/bmw.webp', alt: 'BMW M60' },
  { id: 19, model: 'BMW', Name: 'BMW I5 m60', image: '/cars/bmw3.webp', alt: 'BMW M60' },
  { id: 20, model: 'BMW', Name: 'BMW I5 m60', image: '/cars/bmw4.webp', alt: 'BMW M60' },

  { id: 21, model: 'Mercedes', Name: 'Mercedes C63 Cabriolet', image: '/cars/C63TWINTURBO.jpg', alt: 'Mercedes C63 TWIN TURBO' },
  { id: 22, model: 'Mercedes', Name: 'Mercedes C63 Cabriolet', image: '/cars/C63TWINTURBO2.jpg', alt: 'Mercedes C63 TWIN TURBO' },
  { id: 23, model: 'Mercedes', Name: 'Mercedes C63 Cabriolet', image: '/cars/C63TWINTURBO1.jpg', alt: 'Mercedes C63 TWIN TURBO' },
  { id: 24, model: 'Mercedes', Name: 'Mercedes C63 Cabriolet', image: '/cars/C63TWINTURBO3.jpg', alt: 'Mercedes C63 TWIN TURBO' },

  // Porsche Cayenne S E-Hybrid images
  { id: 25, model: 'Porsche', Name: 'Porsche Cayenne S E-Hybrid', image: '/cars/PORSCHE_CAYENNES_E_HYBRID.jpg', alt: 'Porsche Cayenne S E-Hybrid' },
  { id: 26, model: 'Porsche', Name: 'Porsche Cayenne S E-Hybrid', image: '/cars/PORSCHE_CAYENNES_E_HYBRID2.jpg', alt: 'Porsche Cayenne S E-Hybrid' },

  // Chevrolet Camaro images
  { id: 27, model: 'Chevrolet', Name: 'Chevrolet Camaro', image: '/cars/ChevroletCamaro.webp', alt: 'Chevrolet Camaro' },
  { id: 28, model: 'Chevrolet', Name: 'Chevrolet Camaro', image: '/cars/ChevroletCamaro2.webp', alt: 'Chevrolet Camaro' },
  { id: 29, model: 'Chevrolet', Name: 'Chevrolet Camaro', image: '/cars/ChevroletCamaro1.webp', alt: 'Chevrolet Camaro' },

  { id: 30, model: 'BMW', Name: 'BMW 3 Series G20', image: '/cars/platinum-pack.jpg', alt: 'BMW' },
];

const Galerie: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(galleryItems[0]);
  const [filter, setFilter] = useState('All');
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  // Get unique models for filter options
  const modelOptions = useMemo(() => {
    const uniqueModels = [...new Set(galleryItems.map(item => item.model))];
    return ['All', ...uniqueModels].sort();
  }, []);

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.model === filter);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    
    // Set the first image of the selected category as the selected image
    if (newFilter === 'All') {
      setSelectedImage(galleryItems[0]);
    } else {
      const firstItemInCategory = galleryItems.find(item => item.model === newFilter);
      if (firstItemInCategory) {
        setSelectedImage(firstItemInCategory);
      }
    }
  };

  const handleThumbnailClick = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
    // Scroll to top of the page smoothly
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    // Prevent swipe if only one image in the category
    if (filteredItems.length <= 1) return;

    const swipeDistance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
      let newIndex;

      if (swipeDistance > 0) {
        // Swipe left
        setSlideDirection('left');
        newIndex = currentIndex + 1 >= filteredItems.length ? 0 : currentIndex + 1;
      } else {
        // Swipe right
        setSlideDirection('right');
        newIndex = currentIndex - 1 < 0 ? filteredItems.length - 1 : currentIndex - 1;
      }

      setSelectedImage(filteredItems[newIndex]);

      // Reset slide direction after animation
      setTimeout(() => {
        setSlideDirection(null);
      }, 300);
    }
  };

  return (
    <>
      <Seo
        title="Galerie de réalisations detailing à Tanger | Auto Spa"
        description="Nos réalisations à Tanger : traitement céramique, PPF, polissage et nettoyage intérieur sur BMW, Mercedes, Porsche, Audi, Golf R et plus."
        path="/galerie"
        jsonLd={[breadcrumb([{ name: 'Galerie', path: '/galerie' }])]}
      />

    <main className={styles.container}>
      <div className={styles.gallery}>
      <h1 className={styles.pageTitle}>Galerie de nos réalisations</h1>
      <div 
        className={styles.mainImage} 
        ref={mainImageRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={selectedImage.image}
          alt={`Detailing ${selectedImage.Name} à Tanger`}
          width={600}
          height={400}
          className={`${styles.image} ${
            slideDirection === 'left' ? styles.slideLeft : 
            slideDirection === 'right' ? styles.slideRight : ''
          }`}
        />
        <h2 className={styles.imageTitle} aria-live="polite">{selectedImage.Name}</h2>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.filter}>
          <label htmlFor="modelFilter">Filtrer par modèle</label>
          <select
            id="modelFilter"
            value={filter}
            onChange={handleFilterChange}
            className={styles.select}
          >
            {modelOptions.map(model => (
              <option key={model} value={model}>
                {model === 'All' ? 'Tous les modèles' : model}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.thumbnails}>
          {filteredItems.map(item => (
            <button
              type="button"
              key={item.id}
              className={styles.thumbnail}
              onClick={() => handleThumbnailClick(item)}
              aria-pressed={item.id === selectedImage.id}
            >
              <Image
                src={item.image}
                alt={`${item.Name} – detailing Auto Spa Tanger`}
                width={100}
                height={75}
                className={styles.thumbnailImage}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
    </main>
    </>
  );
};

export default Galerie;