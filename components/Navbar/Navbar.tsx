import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleContactClick = async () => {
    if (router.pathname !== '/') {
      await router.push('/');
      setTimeout(() => {
        scrollToSection('#contact');
      }, 100);
    } else {
      scrollToSection('#contact');
    }
    setIsOpen(false);
  };

  return (
    <nav aria-label="Navigation principale" className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <Link href="/" onClick={() => {
        if (router.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsOpen(false);
      }} className={styles.navbarLogo} style={{ cursor: 'pointer' }}>
        <Image 
          src="/logos/logo1.png" 
          alt="AutoSpa Logo" 
          className={styles.logoImage} 
          width={50} 
          height={50} 
          priority
        />
        <span className={styles.brandName}>
          <span className={styles.mainBrand}>Masters Of Detailing</span> 
          {/* <span className={styles.subBrand}></span> */}
        </span>
      </Link>
      
      <div id="main-menu" className={`${styles.navbarLinks} ${isOpen ? styles.active : ''}`}>
        <Link href="/" onClick={() => {
          scrollToSection('.hero');
          setIsOpen(false);
        }}>
          ACCUEIL
        </Link>
        <Link href="/services/ceramique" onClick={() => setIsOpen(false)}>
          NANO CERAMIC
        </Link>
        <Link href="/services/ppf" onClick={() => setIsOpen(false)}>
          PPF
        </Link>
        <Link href="/packs" onClick={() => setIsOpen(false)}>
          PACKS
        </Link>
        <Link href="/galerie" onClick={() => setIsOpen(false)}>
          GALERIE
        </Link>
        <Link href="/#contact" onClick={handleContactClick}>
          CONTACT
        </Link>
      </div>

      <button
        type="button"
        className={`${styles.navbarHamburger} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
        aria-controls="main-menu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </nav>
  );
};

export default Navbar;