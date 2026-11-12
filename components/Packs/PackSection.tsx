import Link from 'next/link';
import Image from 'next/image';
import PackCard from './PackCard';
import styles from './PackSection.module.css';
import Reveal from '../ScrollOnReveal/Reveal';

const packs = [
  {
    title: 'Pack Maintenance',
    description: 'Un nettoyage complet, idéal pour un entretien régulier et garder votre véhicule toujours propre.',
    imageUrl: '/cars/maintenance-pack.webp',
  },
  {
    title: 'Pack Platinum',
    description: "Un service plus approfondi avec désinfection intérieure et brillance carrosserie pour une propreté durable.",
    imageUrl: '/cars/platinum-pack.jpg',
  },
  {
    title: 'Pack Diamond',
    description: 'Un soin luxueux avec traitement du cuir ou tissu et protection contre la saleté et les UV.',
    imageUrl: '/cars/diamond-pack.jpg',
  },
  {
    title: 'Pack Titanium',
    description: "Le pack ultime pour les passionnés d’automobile : polissage + cire premium pour une finition miroir.",
    imageUrl: '/cars/titanium-pack.jpg',
  },
];

const PackSection: React.FC = () => {
  return (
    <section className="section" aria-labelledby="packs-title">
      <div className="section-inner">
        <div className="section-header">
          <h2 id="packs-title" className="section-title">Nos packs</h2>
          <Link href="/packs" className="section-link">
            Voir plus de détails
            <Image src="/icons/circle-arrow.png" alt="" width={20} height={20} />
          </Link>
        </div>
        <Reveal direction="bottom">
          <ul className={styles.grid}>
            {packs.map((pack) => (
              <li key={pack.title}>
                <PackCard {...pack} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default PackSection;
