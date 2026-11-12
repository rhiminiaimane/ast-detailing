import Link from 'next/link';
import Image from 'next/image';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, href }) => {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="(max-width: 560px) 100vw, 220px"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <span className={styles.more} aria-hidden="true">En savoir plus →</span>
      </div>
    </Link>
  );
};

export default ServiceCard;
