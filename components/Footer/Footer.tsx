import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import Reveal from '../ScrollOnReveal/Reveal';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className={styles.footer}>
      <Reveal direction="bottom">
      <div className={styles.footerContainer}>
        <div className={styles.contentWrapper}>
          {/* Map Section */}
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>Adresse</h3>
            <address className={styles.address}>
              Auto Spa Detailing<br />
              Dyar Tanja, 90000 Tanger, Maroc
            </address>
            <Link
              href="https://maps.app.goo.gl/u2n2Zmx6K9zHhju2A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvrir notre adresse dans Google Maps"
            >
              <Image
                src="/map.png"
                alt="Plan d'accès à Auto Spa Detailing, Dyar Tanja, Tanger"
                width={250}
                height={250}
                className={styles.mapImage}
              />
            </Link>
          </div>

          {/* Contact Section */}
          <div className={styles.contactContainer}>
            <h3 className={styles.centeredTitle}>Contactez-Nous</h3>
            <div className={styles.contactWrapper}>
                <div className={styles.verticalDivider}></div>
              <div className={styles.contactDetails}>
                <p className={styles.contactItem}>
                  <span className={styles.icon}>
                    <Image
                      src="/icons/instagram-icon.png"
                      alt=""
                      width={20}
                      height={20}
                      className={styles.contactIcon}
                    />
                  </span>
                  <Link href="https://www.instagram.com/auto_spa_detailing_sarl" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    @auto_spa_detailing_sarl
                  </Link>
                </p>
                <p className={styles.contactItem}>
                  <span className={styles.icon}>
                    <Image
                      src="/icons/whatsapp-icon-w.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span>
                  <a href="tel:+212662038056" className={styles.contactLink}>
                    06 62 03 80 56
                  </a>
                </p>
                <p className={styles.contactItem}>
                  <span className={styles.icon}>
                    <Image
                      src="/icons/clock-icon.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span>
                  Mardi - Dimanche<br/>10H30 - 20H
                </p>
              </div>
                <div className={styles.verticalDivider}></div>
              <div className={styles.messageRapide}>
                <div className={styles.messageContent}>
                    <Image
                        src="/icons/whatsapp.png"
                        alt=""
                        width={50}
                        height={50}
                    />
                    <h3>Contact Rapide</h3>
                    <p>Message direct sur WhatsApp</p>  
                    <a 
                        href={`https://wa.me/+212662038056?text=${encodeURIComponent(
                            "Bonjour Auto Spa Detailing, je souhaite prendre rendez-vous."
                        )}`} 
                        className={styles.whatsappBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nous écrire
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    </footer>
  );
};

export default Footer;