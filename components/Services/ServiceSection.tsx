import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';
import Reveal from '../ScrollOnReveal/Reveal';

const services = [
  {
    title: 'Protection Nano Céramique',
    description: 'Protection longue durée contre les rayons UV, la pluie acide, la pollution et plus encore. Finition ultra brillante et protection jusqu’à 5 ans.',
    imageUrl: '/cars/ceramic-protect-9h.jpg',
    href: '/services?service=ceramic',
  },
  {
    title: 'Film de protection de peinture',
    description: 'Préservez votre peinture contre les éclats de pierre, rayures et agressions extérieures avec un film invisible et ultra résistant.',
    imageUrl: '/cars/Film_de_protection_de_peinture.jpg',
    href: '/services?service=ppf',
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="section" aria-labelledby="services-title">
      <div className="section-inner">
        <div className="section-header">
          <h2 id="services-title" className="section-title">Nos services</h2>
          <Link href="/services" className="section-link">
            Voir plus de détails
            <Image src="/icons/circle-arrow.png" alt="" width={20} height={20} />
          </Link>
        </div>
        <Reveal direction="bottom">
          <ul className={styles.grid}>
            {services.map((service) => (
              <li key={service.href}>
                <ServiceCard {...service} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default ServiceSection;
