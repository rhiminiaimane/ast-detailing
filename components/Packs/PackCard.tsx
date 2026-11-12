import styles from './PackCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface PackCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PackCard: React.FC<PackCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Link href="/packs" className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 280px"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </Link>
  );
};

export default PackCard;
