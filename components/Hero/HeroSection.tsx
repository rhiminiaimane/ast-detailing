import { useRef, useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Reveal from '../ScrollOnReveal/Reveal';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    videoEl.addEventListener('play', handlePlay);
    videoEl.addEventListener('pause', handlePause);

    // Respect reduced-motion: show the poster frame instead of autoplaying.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      videoEl.play().catch(() => setIsPlaying(false));
    }

    return () => {
      videoEl.removeEventListener('play', handlePlay);
      videoEl.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlayback = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl.play().catch(() => setIsPlaying(false));
    } else {
      videoEl.pause();
    }
  };

  return (
    <section className={styles.container}>
      <video
        ref={videoRef}
        className={styles.videoBackground}
        poster="/video-placeholder.jpg"
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <div className={styles.videoOverlay}></div>

      <Reveal direction="left">
        <div className={styles.textContent}>
          <h1 className={styles.heroTitle}>
            Bienvenue chez <br />Auto Spa Detailing
          </h1>
          <div className={styles.heroDescription}>
            <p>Detailing, traitement céramique et film PPF à Tanger : votre destination de confiance pour le soin automobile haut de gamme.</p>
          </div>
        </div>
      </Reveal>

      <button
        type="button"
        className={styles.playbackToggle}
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Mettre la vidéo en pause' : 'Lire la vidéo'}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
            <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default HeroSection;
