import { useState, useEffect } from 'react';
import Image from 'next/image';
import ReviewCard from './ReviewCard';
import styles from './ReviewsSection.module.css';
import Reveal from '../ScrollOnReveal/Reveal';

interface Review {
  author: string;
  quote: string;
  rating: number;
}

const reviews: Review[] = [
  {
    author: 'Aboudi M.',
    quote: "I'm seriously impressed with Auto Spa Detailing in Tangier. The detailer clearly has a lot of experience and brought top-tier techniques—like the two bucket method—which you don't see often here. It's clear they brought their expertise from outside and are now raising the bar in Tangier.",
    rating: 5,
  },
  {
    author: 'Jamal H.',
    quote: 'Excellente expérience  ! Je remercie toute l’équipe pour leur professionnalisme. Service rapide, prix raisonnables et très bonne communication. Mon PPF a été posé parfaitement. Des gens au top — je recommande vivement !',
    rating: 5,
  },
  {
    author: 'White R.',
    quote: "We were there a couple of weeks ago. They did an awesome job. Clean to the last detail from the inside and outside. Every single inch was shining after their job. Great guys. They do a very, very good job. Greetings from Germany.",
    rating: 5,
  },
  {
    author: 'ElDahbi',
    quote: "I highly recommend AUTO SPA DETAILING! Excellent service, friendly staff, a warm welcome, and amazing results. My car looks new with the full wash, polish, and nano-ceramic coating. Truly professional work! ",
    rating: 5,
  },
  {
    author: 'Otman B.',
    quote: "J’ai confié ma voiture à Autospa Detailing pour une prestation , et je suis plus que satisfait du résultat. Le travail a été réalisé avec un grand professionnalisme et une attention aux moindres détails. Ma voiture est ressortie comme neuve, aussi bien à l’intérieur qu’à l’extérieur. L’équipe est accueillante, passionnée et vraiment à l’écoute. Je recommande vivement leurs services à tous ceux qui souhaitent redonner une seconde jeunesse à leur véhicule. Merci encore pour ce travail impeccable !",
    rating: 5,
  },
  {
    author: 'Ali A.',
    quote: "I had an outstanding experience with AUTO SPA and their team. They were professional, thorough, and paid great attention to detail. My car looks brand new, both inside and out! The staff was friendly and efficient, ensuring everything was done to perfection. I highly recommend their services to anyone looking for quality car cleaning.",
    rating: 5,
  },
  {
    author: 'Stelios S.',
    quote: "Really great prices, he is reasonable and explains every detail exactly as it should be,truly professional!!!!! I highly recommend him!",
    rating: 5,
  },
  {
    author: 'Ghizlane H.',
    quote: "I have just tried the titanium treatment and wow my car was an absulte sh..t show the seats were yuckkk from years of using it for  food delivery these guys did an amazing job they deep cleaned the seats rugs trunck doors fabric everything is sparkling clean the car has that new car feel to it + they picked up my car cleaned it and delivered it back to my house 🤩 I mean talk about VIP TREATMENT ..I highly recommend THE TITANIUM TREATMENT it is worth every penny.",
    rating: 5,
  },
  {
    author: 'Fatiha H.',
    quote : "My car was in a very bad state and when I got it back it looked as good as new. I would definitely recommend it.",
    rating: 5,
  },
];

const ReviewsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [reviewsPerPage, setReviewsPerPage] = useState<number>(3);

  // Update useEffect to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setReviewsPerPage(1);
      } else {
        setReviewsPerPage(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage
  );

  return (
    <section className={styles.reviews}>
      <Reveal direction="left">
      <h2 className={styles.reviewsTitle}>Avis</h2>
      <div className={styles.sliderContainer}>
        <button
          onClick={handlePrev}
          className={styles.sliderButton}
          aria-label="Avis précédents"
        >
          <Image 
            src="/icons/slider.png"
            alt=""
            width={18}
            height={18}
            className={styles.prevArrow}
          />
        </button>
        <div className={styles.cardsContainer} aria-live="polite">
          {currentReviews.map((review, index) => (
            <div key={index} className={styles.cardItem}>
              <ReviewCard
                author={review.author}
                quote={review.quote}
                rating={review.rating}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={styles.sliderButton}
          aria-label="Avis suivants"
        >
          <Image 
            src="/icons/slider.png"
            alt=""
            width={18}
            height={18}
            className={styles.nextArrow}
          />
        </button>
      </div>
      </Reveal>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            type="button"
            key={index}
            className={styles.dotButton}
            onClick={() => setCurrentPage(index)}
            aria-label={`Page d'avis ${index + 1} sur ${totalPages}`}
            aria-current={index === currentPage ? 'true' : undefined}
          >
            <span
              aria-hidden="true"
              className={index === currentPage ? styles.dotActive : styles.dot}
            ></span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;