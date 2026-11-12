import styles from './AboutSection.module.css';
import Image from 'next/image';
import Reveal from '../ScrollOnReveal/Reveal';

const AboutSection: React.FC = () => {
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="section-inner">
        <div className={styles.grid}>
          <Reveal direction="left">
            <div className={styles.media}>
              <Image
                src="/garage.jpg"
                alt="L'atelier Auto Spa Detailing à Tanger"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
                className={styles.img}
              />
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className={styles.text}>
              <h2 id="about-title" className="section-title">Qui sommes nous ?</h2>
              <p className={styles.lead}>
                <strong>Auto Spa Detailing</strong>, c’est une équipe passionnée par l’automobile, dédiée à sublimer et protéger votre véhicule.
              </p>
              <p className={styles.body}>
                Grâce à des technologies de pointe comme <strong className={styles.highlight}>le revêtement céramique, la correction de peinture, ou encore la pose de films de protection PPF</strong>, nous garantissons à votre véhicule une protection durable et une apparence irréprochable.
              </p>
              <p className={styles.body}>
                Chaque intervention est réalisée avec le plus grand soin, dans le respect des spécificités de chaque voiture et des attentes de son propriétaire.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
