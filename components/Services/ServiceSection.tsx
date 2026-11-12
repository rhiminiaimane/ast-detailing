import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';
import Reveal from '../ScrollOnReveal/Reveal'; // Assuming you have a Reveal component for animations

const services = [
    {
        title: 'Protection Nano Céramique',
        description: 'Protection longue durée contre les rayons UV, la pluie acide, la pollution et plus encore. Finition ultra brillante et protection jusqu’à 5 ans.',
        imageUrl: '/cars/ceramic-protect-9h.jpg',
    },
    {
        title: 'Film de protection de peinture',
        description: 'Préservez votre peinture contre les éclats de pierre, rayures et agressions extérieures avec un film invisible et ultra résistant.',
        imageUrl: '/cars/Film_de_protection_de_peinture.jpg',
    },
];

const ServiceSection: React.FC = () => {
  return (
    <section className={styles.services}>
      <Reveal direction="left">
      <h2 className={styles.servicesTitle}>Nos services</h2>
      

      <Link href="/services">
        <div className={styles.cardsContainer}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </Link>
      </Reveal>
      <div className={styles.linkContainer}>
        <Link href="/services" className={styles.servicesLink}>
          Voir plus de détails 
          <Image 
            src="/icons/circle-arrow.png" 
            alt="" 
            width={20} 
            height={20}
            className={styles.arrowImage}
          />
        </Link>
      </div>
    </section>
  );
};

export default ServiceSection;